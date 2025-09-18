declare global {
  namespace JSX {
    interface IntrinsicElements {
      "wistia-player": {
        "media-id": string;
        aspect: string;
        className?: string;
        children?: React.ReactNode;
      };
    }
  }
}

export {};
