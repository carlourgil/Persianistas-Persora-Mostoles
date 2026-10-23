export function setSocialMetadata(title: string, description: string, url: string) {
  const previous = [['og:title', title], ['og:description', description], ['og:url', url]].map(([property, value]) => {
    const element = document.querySelector(`meta[property="${property}"]`);
    const content = element?.getAttribute('content');
    element?.setAttribute('content', value);
    return { element, content };
  });
  return () => previous.forEach(({ element, content }) => {
    if (content != null) element?.setAttribute('content', content);
  });
}
