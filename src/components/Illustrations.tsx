/**
 * Simple brand-coloured drawings used where the sister sites use photos.
 * Swap any of these for a real photograph when one is available.
 */

const NAVY = "#041E42";
const BLUE = "#004C97";
const RED = "#AC162C";
const PALE = "#DCEAF7";

function Frame({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <div className="bg-white p-2 shadow-lg shadow-black/20">
      <svg viewBox="0 0 400 260" role="img" aria-label={label} className="h-auto w-full bg-silver-100">
        {children}
      </svg>
    </div>
  );
}

function Key({ x, y, color }: { x: number; y: number; color: string }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <circle cx="0" cy="0" r="11" fill={color} />
      <circle cx="0" cy="-3" r="3" fill="#fff" />
      <path d="M-3 9h6v22h-3v-4h-3v-4h3v-3h-3Z" fill={color} />
    </g>
  );
}

function DoorShape({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect x="0" y="0" width="22" height="38" fill="none" stroke={NAVY} strokeWidth="2" />
      <path d="M3 3l13 4v31l-13-4Z" fill={RED} />
      <circle cx="13" cy="22" r="1.5" fill="#fff" />
    </g>
  );
}

/** Master key hierarchy: one key at the top opens everything below it. */
export function MasterKeyDiagram() {
  const cols = [90, 200, 310];
  return (
    <Frame label="Diagram of a master key system: one master key above three department keys, each opening its own doors">
      <Key x={200} y={34} color={RED} />
      <path d="M200 70v22M90 92h220M90 92v14M200 92v14M310 92v14" stroke="#8E9090" strokeWidth="2" fill="none" />
      {cols.map((c) => (
        <g key={c}>
          <Key x={c} y={122} color={BLUE} />
          <path d={`M${c} 158v14M${c - 26} 172h52M${c - 26} 172v10M${c + 26} 172v10`} stroke="#8E9090" strokeWidth="2" fill="none" />
          <DoorShape x={c - 37} y={186} />
          <DoorShape x={c + 15} y={186} />
        </g>
      ))}
    </Frame>
  );
}

/** Sliding automatic entrance with a push-button accessibility plate. */
export function AutomaticDoorDrawing() {
  return (
    <Frame label="Drawing of an automatic sliding entrance with an accessibility push button">
      {/* wall + header */}
      <rect x="40" y="40" width="320" height="180" fill="#fff" stroke={NAVY} strokeWidth="3" />
      <rect x="40" y="40" width="320" height="26" fill={NAVY} />
      <rect x="182" y="48" width="36" height="10" rx="5" fill={PALE} />
      {/* fixed side panels */}
      <rect x="52" y="76" width="70" height="144" fill={PALE} stroke={BLUE} strokeWidth="2" />
      <rect x="278" y="76" width="70" height="144" fill={PALE} stroke={BLUE} strokeWidth="2" />
      {/* sliding leaves, part open */}
      <rect x="126" y="76" width="56" height="144" fill={PALE} stroke={BLUE} strokeWidth="2" />
      <rect x="218" y="76" width="56" height="144" fill={PALE} stroke={BLUE} strokeWidth="2" />
      {/* motion arrows */}
      <path d="M176 150h-28m8-8-8 8 8 8M224 150h28m-8-8 8 8-8 8" stroke={RED} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      {/* ground */}
      <path d="M20 221h360" stroke="#8E9090" strokeWidth="3" strokeLinecap="round" />
      {/* push plate on a post */}
      <rect x="372" y="150" width="6" height="70" fill="#8E9090" />
      <rect x="360" y="126" width="30" height="30" rx="3" fill={BLUE} />
      <circle cx="373" cy="134" r="2.4" fill="#fff" />
      <path d="M373 138v7h5l2 5M371 141a5 5 0 1 0 6 7" stroke="#fff" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </Frame>
  );
}
