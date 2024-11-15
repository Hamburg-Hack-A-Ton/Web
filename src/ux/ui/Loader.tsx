/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect } from "react";

interface loaderProps {
  type:
    | "ring"
    | "ring2"
    | "tailSpin"
    | "lineSpinner"
    | "squircle"
    | "square"
    | "reuleaux"
    | "tailChase"
    | "dotSpinner"
    | "spiral"
    | "bouncy"
    | "treadmill"
    | "bouncyArc"
    | "waveform"
    | "hatch"
    | "hourglass"
    | "zoomies"
    | "lineWobble"
    | "infinity"
    | "trefoil"
    | "cardio"
    | "helix"
    | "grid"
    | "quantum"
    | "wobble"
    | "orbit"
    | "chaoticOrbit"
    | "superballs"
    | "trio"
    | "momentum"
    | "dotWave"
    | "leapfrog"
    | "newton"
    | "dotStream"
    | "dotPulse"
    | "metronome"
    | "jelly"
    | "jellyTriangle"
    | "mirage"
    | "ping"
    | "pulsar"
    | "ripples"
    | "miyagi"
    | "pinwheel";
  size?: number; // Jeder Hatt eigenen Default
  speed?: number; // same nach unten
  stroke?: number;
  strokeLength?: number;
  bgOpacity?: number;
  color?: string; // das kann ich defaulten
}

const Loader: React.FC<loaderProps> = ({
  type = "helix",
  size,
  speed,
  stroke,
  strokeLength,
  bgOpacity,
  color = "#CDAE23",
  ...props
}) => {
  useEffect(() => {
    import("ldrs").then((ldr) => {
      switch (type) {
        case "ring":
          ldr.ring.register();
          break;
        case "ring2":
          ldr.ring2.register();
          break;
        case "tailSpin":
          ldr.tailspin.register();
          break;
        case "lineSpinner":
          ldr.lineSpinner.register();
          break;
        case "squircle":
          ldr.squircle.register();
          break;
        case "square":
          ldr.square.register();
          break;
        case "reuleaux":
          ldr.reuleaux.register();
          break;
        case "tailChase":
          ldr.tailChase.register();
          break;
        case "dotSpinner":
          ldr.dotSpinner.register();
          break;
        case "spiral":
          ldr.spiral.register();
          break;
        case "bouncy":
          ldr.bouncy.register();
          break;
        case "treadmill":
          ldr.treadmill.register();
          break;
        case "bouncyArc":
          ldr.bouncyArc.register();
          break;
        case "waveform":
          ldr.waveform.register();
          break;
        case "hatch":
          ldr.hatch.register();
          break;
        case "hourglass":
          ldr.hourglass.register();
          break;
        case "zoomies":
          ldr.zoomies.register();
          break;
        case "lineWobble":
          ldr.lineWobble.register();
          break;
        case "infinity":
          ldr.infinity.register();
          break;
        case "trefoil":
          ldr.trefoil.register();
          break;
        case "cardio":
          ldr.cardio.register();
          break;
        case "helix":
          ldr.helix.register();
          break;
        case "grid":
          ldr.grid.register();
          break;
        case "quantum":
          ldr.quantum.register();
          break;
        case "wobble":
          ldr.wobble.register();
          break;
        case "orbit":
          ldr.orbit.register();
          break;
        case "chaoticOrbit":
          ldr.chaoticOrbit.register();
          break;
        case "superballs":
          ldr.superballs.register();
          break;
        case "trio":
          ldr.trio.register();
          break;
        case "momentum":
          ldr.momentum.register();
          break;
        case "dotWave":
          ldr.dotWave.register();
          break;
        case "leapfrog":
          ldr.leapfrog.register();
          break;
        case "newton": // 's cradle
          ldr.newtonsCradle.register();
          break;
        case "dotStream":
          ldr.dotStream.register();
          break;
        case "dotPulse":
          ldr.dotPulse.register();
          break;
        case "metronome":
          ldr.metronome.register();
          break;
        case "jelly":
          ldr.jelly.register();
          break;
        case "jellyTriangle":
          ldr.jellyTriangle.register();
          break;
        case "mirage":
          ldr.mirage.register();
          break;
        case "ping":
          ldr.ping.register();
          break;
        case "pulsar":
          ldr.pulsar.register();
          break;
        case "ripples":
          ldr.ripples.register();
          break;
        case "miyagi":
          ldr.miyagi.register();
          break;
        case "pinwheel":
          ldr.pinwheel.register();
          break;
      }
    });
  }, [type]);
  switch (type) {
    case "ring":
      return (
        <l-ring
          size={(size = 50)}
          speed={(speed = 2)}
          stroke={(stroke = 6)}
          bg-opacity={bgOpacity}
          color={color}
          {...props}
        />
      );
    case "ring2":
      return (
        <l-ring-2
          size={(size = 50)}
          speed={(speed = 0.8)}
          stroke={(stroke = 6)}
          stroke-length={(strokeLength = 0.25)}
          bg-opacity={(bgOpacity = 0.1)}
          color={color}
          {...props}
        />
      );
    case "tailSpin":
      return (
        <l-tailspin
          size={(size = 50)}
          speed={(speed = 0.9)}
          stroke={(stroke = 6)}
          color={color}
          {...props}
        />
      );
    case "lineSpinner":
      return (
        <l-line-spinner
          size={(size = 50)}
          speed={(speed = 1)}
          stroke={(stroke = 3.5)}
          color={color}
          {...props}
        />
      );
    case "squircle":
      return (
        <l-squircle
          size={(size = 50)}
          speed={(speed = 0.9)}
          stroke={(stroke = 6)}
          stroke-length={(strokeLength = 0.15)}
          bg-opacity={(bgOpacity = 0.1)}
          color={color}
          {...props}
        />
      );
    case "square":
      return (
        <l-square
          size={(size = 45)}
          speed={(speed = 1.2)}
          stroke={(stroke = 6)}
          stroke-length={(strokeLength = 0.25)}
          bg-opacity={(bgOpacity = 0.1)}
          color={color}
          {...props}
        />
      );
    case "reuleaux":
      return (
        <l-reuleaux
          size={(size = 50)}
          speed={(speed = 1.2)}
          stroke={(stroke = 6)}
          stroke-length={(strokeLength = 0.15)}
          bg-opacity={(bgOpacity = 0.1)}
          color={color}
          {...props}
        />
      );
    case "tailChase":
      return (
        <l-tail-chase
          size={(size = 50)}
          speed={(speed = 1.8)}
          color={color}
          {...props}
        />
      );
    case "dotSpinner":
      return (
        <l-dot-spinner
          size={(size = 50)}
          speed={(speed = 0.9)}
          color={color}
          {...props}
        />
      );
    case "spiral":
      return (
        <l-spiral
          size={(size = 50)}
          speed={(speed = 0.9)}
          color={color}
          {...props}
        />
      );
    case "bouncy":
      return (
        <l-bouncy
          size={(size = 55)}
          speed={(speed = 1.8)}
          color={color}
          {...props}
        />
      );
    case "treadmill":
      return (
        <l-treadmill
          size={(size = 85)}
          speed={(speed = 1.3)}
          color={color}
          {...props}
        />
      );
    case "bouncyArc":
      return (
        <l-bouncy-arc
          size={(size = 85)}
          speed={(speed = 1.6)}
          color={color}
          {...props}
        />
      );
    case "waveform":
      return (
        <l-waveform
          size={(size = 45)}
          speed={(speed = 1)}
          stroke={(stroke = 4)}
          color={color}
          {...props}
        />
      );
    case "hatch":
      return (
        <l-hatch
          size={(size = 35)}
          speed={(speed = 3.5)}
          stroke={(stroke = 4.5)}
          color={color}
          {...props}
        />
      );
    case "hourglass":
      return (
        <l-hourglass
          size={(size = 50)}
          speed={(speed = 1.8)}
          bg-opacity={(bgOpacity = 0.1)}
          color={color}
          {...props}
        />
      );
    case "zoomies":
      return (
        <l-zoomies
          size={(size = 100)}
          speed={(speed = 1.4)}
          stroke={(stroke = 6)}
          bg-opacity={(bgOpacity = 0.1)}
          color={color}
          {...props}
        />
      );
    case "lineWobble":
      return (
        <l-line-wobble
          size={(size = 100)}
          speed={(speed = 1.8)}
          stroke={(stroke = 6)}
          bg-opacity={(bgOpacity = 0.1)}
          color={color}
          {...props}
        />
      );
    case "infinity":
      return (
        <l-infinity
          size={(size = 65)}
          speed={(speed = 1.3)}
          stroke={(stroke = 5)}
          stroke-length={(strokeLength = 0.15)}
          bg-opacity={(bgOpacity = 0.1)}
          color={color}
          {...props}
        />
      );
    case "trefoil":
      // eslint-disable-next-line no-unused-vars
      return (
        <l-trefoil
          size={(size = 50)}
          speed={(speed = 1.4)}
          stroke={(stroke = 5)}
          stroke-length={(strokeLength = 0.15)}
          bg-opacity={(bgOpacity = 0.1)}
          color={color}
          {...props}
        />
      );
    case "cardio":
      return (
        <l-cardio
          size={(size = 60)}
          speed={(speed = 2)}
          stroke={(stroke = 5)}
          color={color}
          {...props}
        />
      );
    case "helix":
      return (
        <l-helix
          size={(size = 60)}
          speed={(speed = 2.5)}
          color={color}
          {...props}
        />
      );
    case "grid":
      return (
        <l-grid
          size={(size = 75)}
          speed={(speed = 1.5)}
          color={color}
          {...props}
        />
      );
    case "quantum":
      return (
        <l-quantum
          size={(size = 60)}
          speed={(speed = 1.8)}
          color={color}
          {...props}
        />
      );
    case "wobble":
      return (
        <l-wobble
          size={(size = 60)}
          speed={(speed = 0.9)}
          color={color}
          {...props}
        />
      );
    case "orbit":
      return (
        <l-orbit
          size={(size = 45)}
          speed={(speed = 1.5)}
          color={color}
          {...props}
        />
      );
    case "chaoticOrbit":
      return (
        <l-chaotic-orbit
          size={(size = 45)}
          speed={(speed = 1.5)}
          color={color}
          {...props}
        />
      );
    case "superballs":
      return (
        <l-superballs
          size={(size = 50)}
          speed={(speed = 1.4)}
          color={color}
          {...props}
        />
      );
    case "trio":
      return (
        <l-trio
          size={(size = 50)}
          speed={(speed = 1.3)}
          color={color}
          {...props}
        />
      );
    case "momentum":
      return (
        <l-momentum
          size={(size = 50)}
          speed={(speed = 1.1)}
          color={color}
          {...props}
        />
      );
    case "dotWave":
      return (
        <l-dot-wave
          size={(size = 65)}
          speed={(speed = 1)}
          color={color}
          {...props}
        />
      );
    case "leapfrog":
      return (
        <l-leapfrog
          size={(size = 50)}
          speed={(speed = 2.5)}
          color={color}
          {...props}
        />
      );
    case "newton": // 's cradle
      return (
        <l-newtons-cradle
          size={(size = 100)}
          speed={(speed = 1.4)}
          color={color}
          {...props}
        />
      );
    case "dotStream":
      return (
        <l-dot-stream
          size={(size = 75)}
          speed={(speed = 2.5)}
          color={color}
          {...props}
        />
      );
    case "dotPulse":
      return (
        <l-dot-pulse
          size={(size = 50)}
          speed={(speed = 1.3)}
          color={color}
          {...props}
        />
      );
    case "metronome":
      return (
        <l-metronome
          size={(size = 50)}
          speed={(speed = 1.6)}
          color={color}
          {...props}
        />
      );
    case "jelly":
      return (
        <l-jelly
          size={(size = 50)}
          speed={(speed = 0.9)}
          color={color}
          {...props}
        />
      );
    case "jellyTriangle":
      return (
        <l-jelly-triangle
          size={(size = 40)}
          speed={(speed = 1.8)}
          color={color}
          {...props}
        />
      );
    case "mirage":
      return (
        <l-mirage
          size={(size = 75)}
          speed={(speed = 2.5)}
          color={color}
          {...props}
        />
      );
    case "ping":
      return (
        <l-ping
          size={(size = 60)}
          speed={(speed = 2)}
          color={color}
          {...props}
        />
      );
    case "pulsar":
      return (
        <l-pulsar
          size={(size = 50)}
          speed={(speed = 1.8)}
          color={color}
          {...props}
        />
      );
    case "ripples":
      return (
        <l-ripples
          size={(size = 60)}
          speed={(speed = 2)}
          color={color}
          {...props}
        />
      );
    case "miyagi":
      return (
        <l-miyagi
          size={(size = 50)}
          speed={(speed = 0.9)}
          stroke={(stroke = 5)}
          color={color}
          {...props}
        />
      );
    case "pinwheel":
      // eslint-disable-next-line no-unused-vars
      return (
        <l-pinwheel
          size={(size = 50)}
          speed={(speed = 0.9)}
          stroke={(stroke = 5)}
          color={color}
          {...props}
        />
      );
  }
};

export default Loader;
