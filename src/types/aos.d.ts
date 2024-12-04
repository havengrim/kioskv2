declare module 'aos' {
    interface AOS {
      init: (options?: AOSOptions) => void;
    }
  
    interface AOSOptions {
      offset?: number;
      delay?: number;
      duration?: number;
      easing?: string;
      once?: boolean;
      mirror?: boolean;
      anchorPlacement?: string;
    }
  
    const aos: AOS;
    export default aos;
  }
  