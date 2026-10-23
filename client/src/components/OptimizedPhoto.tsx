import type { ImgHTMLAttributes } from 'react';
import { optimizedImages } from '@/lib/optimized-images.generated';

type Props = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> & { src: string; alt: string };

/** Conserva el elemento img y sus estilos, con selección de tamaño nativa del navegador. */
export default function OptimizedPhoto({ src, sizes = '100vw', width, height, ...props }: Props) {
  const image = optimizedImages[src];
  return <img {...props} src={image?.src || src} srcSet={image?.srcSet} sizes={image ? sizes : undefined} width={width ?? image?.width} height={height ?? image?.height} decoding="async" />;
}
