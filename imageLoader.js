// Demo: https://static.imgix.net/daisy.png?format=auto&fit=max&w=300
export default function imgixLoader({ src, width, quality }) {
    const url = new URL(`https://example.com${src}`);
    const params = url.searchParams;
    params.set('auto', params.getAll('auto').join(',') || 'format');
    params.set('fit', params.get('fit') || 'max');
    params.set('w', params.get('w') || width.toString());
    params.set('q', quality.toString() || '50');
    return url.href;
  }