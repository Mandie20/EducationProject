/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {

      screens:{
        'tablet': '640px',
      // => @media (min-width: 640px) { ... }
        'tel': '600px',
      // => @media (min-width: 600px) { ... }

      'mobil': '300px',
      // => @media (min-width: 300px) { ... }

      'mobile-phone': '200px',
      // => @media (min-width: 200px) { ... }


        'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

        'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
      },
      colors: {
        primary: '#6c63FF',
        success: '#00bf8e',
        danger: '#f75842',
        warning: '#f7c84b',
        info: '#17a2b8',
        danger_variant: 'rgba(247,88,66,0.4)',
        color_white: '#fff',
        color_light: 'rgba(255,255,255,0.7)',
        color_black: '#000',
        color_bg: '#1f2641',
        color_bg1: '#2e3267',
        color_bg2: '#424890',
      },
      gap:{
        g:'1.2rem',
        G:'1.4rem',
        G2:'1.5rem',
        gap_g:'0.7rem',
        gap_g2:'0.8rem',
      },
      fontSize: {
        h1: '2.4rem',
        h2: '2rem',
        h3: '1.6rem',
        h4: '1.3rem',
        nav_a: '0.9rem',
        cat: '0.85rem',
        faq_h4:'1rem',
        faq_icon: '1.2rem',
        queries: '2.2rem',
        queries2: '1.7rem',
        'font': '2rem',
        queries3: '1.4rem',
      },
      borderRadius:{
        round: '2rem',
        roun23: '3rem',
        round1: '0.9rem',
        round2:'1rem',
        round3:'1rem 0 0 1rem',
      },
      translate: {
        '50': '-50%',
      },
      container: {
        screens: {
          lg: '80%',
          sm: '94%',
          md: '90%',
        },
      },
      top: {
        t: '1.5rem',
      },
      padding:{
        padding1: '0.7rem',
        padding2: '0.6rem',
        pad: '1.2rem',
        padd: '1.6rem',
      },
      content:{
        cont: '',
      },
      boxShadow: {
        boxShadow: '0 3rem 3rem rgba(0, 0, 0, 0.3)',
        boxShadow2: '-2rem 0 2rem rgba(0, 0, 0, 0.3)',
        box: '0 1rem 2rem rgba(0, 0, 0, 0.2)',
        box_shad: ' inset 0 0 3rem rgba(0, 0, 0, 0.5)',
        box_shad1: ' -4rem 6rem 10rem rgba(0, 0,0,0.6)',
      },
      transitionDuration: {
        duration_400: '400ms',
        duration: '1s',
      },
      borderWidth:{
        bd:'1rem',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      lineHeight: {
        loose: '1.7',
        all_h: '1.2',
        cat_h1: '1',
        line_h4:'2.2',
        line_re:'2'
      },
      height:{
        "70v": '70vh',
        "29": '29rem',
        "32": '32rem',
        "repspons_container": '52vh',
        "repspons_cont": '60vh',
        "repspons_containe": '58vh',
        "li_responsive":'5.8rem',
        "responses":'80vh',
        "respn_container":'33rem',
      },
      width:{
        large:'80%',
        small: '94%',
        medium: '90%',
      },
      zIndex: {
        '1': '1',
      },
      keyframes: {
        wiggle: {
          '0%': { transform: 'rotateZ(-90deg) rotateX(90deg) scale(0.1)'},
          '100%': { transform: 'rotateZ(0) rotateX(0) scale(1)',opacity: 1 },
        },
      },
      animation:{
        wiggle: 'wiggle 400ms linear forwards',
      },
      columns:{
        'fiv':'5%'
      },
      
      right: {
        pos: '5%',
      },
      margin:{
        mb: '2.4rem',
        marj:'2rem 0 1rem',
        marj2:'0 1.5rem 3rem',
        mar: '1.2rem',
        top:'0.8rem',
        sous: '0.7rem',
        bottom:'1.3rem',
        marge2:'2.5rem',
        marge:'1.6rem',
        'marge_1.4':'1.4rem',
        margeRes:'0 auto',
        margeRes2:'7rem auto',
      },
    },
  },
  plugins: [],
  utilities: {
    p6v: 'pt-0 pb-0 pl-24',
  },
}
