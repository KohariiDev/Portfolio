export default function VideoInView({ src, className }) {
  return <video muted autoPlay playsInline className={className} src={src} />;
}
