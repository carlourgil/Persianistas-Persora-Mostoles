import { useLocation } from 'wouter';
import { buildPageStructuredData, serializeStructuredData } from '@/lib/structuredData';

export default function PageStructuredData() {
  const [location] = useLocation();
  const data = buildPageStructuredData(location);
  return data ? <script id="persora-page-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeStructuredData(data) }} /> : null;
}
