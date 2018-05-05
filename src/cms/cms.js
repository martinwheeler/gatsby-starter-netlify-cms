import AboutPagePreview from 'cms/preview-templates/AboutPagePreview';
import BlogPostPreview from 'cms/preview-templates/BlogPostPreview';
import ProductPagePreview from 'cms/preview-templates/ProductPagePreview';
import CMS from 'netlify-cms';

CMS.registerPreviewStyle('/styles.css');
CMS.registerPreviewTemplate('about', AboutPagePreview);
CMS.registerPreviewTemplate('products', ProductPagePreview);
CMS.registerPreviewTemplate('blog', BlogPostPreview);
