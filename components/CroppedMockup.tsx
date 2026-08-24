import type { CSSProperties } from "react";

/**
 * Renders an image cropped to the visible (non-transparent) content of the
 * source PNG, scaled to an exact width x height box. The source mockups have
 * uneven transparent padding around the rotated object, so a plain <img
 * width height> would squash the padding along with the subject.
 */
export function CroppedMockup({
  src,
  alt,
  width,
  height,
  naturalWidth,
  naturalHeight,
  bbox: [bx, by, bw, bh],
  className,
  style,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  naturalWidth: number;
  naturalHeight: number;
  bbox: [number, number, number, number];
  className?: string;
  style?: CSSProperties;
}) {
  const scaleX = width / bw;
  const scaleY = height / bh;
  return (
    <div className={className} style={{ width, height, overflow: "hidden", ...style }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        style={{
          width: naturalWidth * scaleX,
          height: naturalHeight * scaleY,
          maxWidth: "none",
          transform: `translate(${-bx * scaleX}px, ${-by * scaleY}px)`,
        }}
      />
    </div>
  );
}
