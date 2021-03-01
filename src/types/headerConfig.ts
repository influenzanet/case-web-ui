export interface SimpleLogoHeaderConfig {
  image: {
    altText?: string;
    sm: {
      url: string;
      className?: string;
      height?: number;
      width?: number;
    },
    lg: {
      url: string;
      className?: string;
      height?: number;
      width?: number;
    }
  };
  className?: string;
  useLanguageSelector?: boolean;
}
