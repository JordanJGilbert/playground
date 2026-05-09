const STORAGE_KEY = "notes.v1";

const notesEl = document.getElementById("notes");
const emptyEl = document.getElementById("empty");
const editor = document.getElementById("editor");
const noteText = document.getElementById("note-text");
const newBtn = document.getElementById("new-note");

let editingId = null;

function load() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch {
    return [];
  }
}

function save(notes) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
}

function formatDate(ts) {
  const d = new Date(ts);
  const now = new Date();
  const sameDay = d.toDateString() === now.toDateString();
  return sameDay
    ? d.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })
    : d.toLocaleDateString([], { month: "short", day: "numeric" });
}

function render() {
  const notes = load().sort((a, b) => b.updatedAt - a.updatedAt);
  notesEl.innerHTML = "";
  emptyEl.hidden = notes.length > 0;

  for (const note of notes) {
    const li = document.createElement("li");
    li.className = "note";

    const body = document.createElement("div");
    body.style.flex = "1";

    const text = document.createElement("div");
    text.className = "note-text";
    text.textContent = note.text;
    text.addEventListener("click", () => openEditor(note));

    const meta = document.createElement("div");
    meta.className = "note-meta";
    meta.textContent = formatDate(note.updatedAt);

    body.append(text, meta);

    const del = document.createElement("button");
    del.className = "note-delete";
    del.textContent = "✕";
    del.setAttribute("aria-label", "Delete note");
    del.addEventListener("click", () => deleteNote(note.id));

    li.append(body, del);
    notesEl.appendChild(li);
  }
}

function openEditor(note) {
  editingId = note?.id ?? null;
  noteText.value = note?.text ?? "";
  editor.showModal();
  setTimeout(() => noteText.focus(), 0);
}

function deleteNote(id) {
  const notes = load().filter((n) => n.id !== id);
  save(notes);
  render();
}

editor.addEventListener("close", () => {
  if (editor.returnValue !== "save") return;
  const text = noteText.value.trim();
  if (!text) return;

  const notes = load();
  const now = Date.now();

  if (editingId) {
    const idx = notes.findIndex((n) => n.id === editingId);
    if (idx >= 0) {
      notes[idx].text = text;
      notes[idx].updatedAt = now;
    }
  } else {
    notes.push({
      id: crypto.randomUUID(),
      text,
      createdAt: now,
      updatedAt: now,
    });
  }

  save(notes);
  render();
});

newBtn.addEventListener("click", () => openEditor());

render();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/service-worker.js").catch(() => {});
  });
}
