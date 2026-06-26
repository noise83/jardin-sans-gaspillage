interface AffiliateConfig {
  amazon?: {
    enabled?: boolean;
    storeId?: string;
  };
}

interface AffiliateProduct {
  asin?: string;
  links?: {
    fallback?: string;
  };
}

export function generateAmazonProductUrl(asin: string, storeId: string) {
  return `https://www.amazon.fr/dp/${encodeURIComponent(asin)}?tag=${encodeURIComponent(storeId)}`;
}

export function getBestAffiliateUrl(product: AffiliateProduct, config: AffiliateConfig) {
  const asin = product.asin?.trim();
  const storeId = config.amazon?.storeId?.trim();

  if (config.amazon?.enabled && asin && storeId) {
    return generateAmazonProductUrl(asin, storeId);
  }

  if (product.links?.fallback) {
    return product.links.fallback;
  }

  return "#";
}
