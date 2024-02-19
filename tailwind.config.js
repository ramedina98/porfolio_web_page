/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", ],
  theme: {
    extend: {
      fontSize: {
        'sizeTitleHeader': '1.7em',
        'lisFooter': '0.97em',
        'iconBtnX':'1.9em',
        'fontSnavMB': '3.3em',
      },
      colors: {
        'CTW': '#FFFFFF',
        'CBS':'#252A2D',
        'CST':'#5D5FEF',
        'CGS':'#6C0BDF', 
        'COTF':'#f8ffff',
        'CSTO': '#4ECCCF',
        'CSH': '#FFFAEB',
      }, 
      spacing: {
        'clampHeader': 'clamp(310px, 85%, 1430px)',
        'clampFooter': 'clamp(310px, 95%, 1050px)',
        'clampLiNavBM': 'clamp(310px, 95%, 450px)',
      }, 
      width: {
        'wfooterNav': '310px',
        'wHiremeDiv': '280px', 
        'wCloseBtn': '150px',
        'wSocialMBM': '315px',
        'wLeftLineBM': '100px',
      },
      height: {
        'hFirstView': '750px', 
        'hUlBMnav': '100%',
      }, 
      screens: {
        'mobileBM': '507px',
        'screenSapnBM': '598px',
        'NavmenuMobile': '384px',
      },
    },
  },
  plugins: [],
}

