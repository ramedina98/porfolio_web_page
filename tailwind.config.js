/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", ],
  theme: {
    extend: {
      fontSize: {
        'sizeTitleHeader': '1.7em',
        'lisFooter': '0.97em',
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
        clampHeader: 'clamp(310px, 95%, 1430px)',
        clampFooter: 'clamp(310px, 95%, 1050px)',
      }, 
      width: {
        wfooterNav: '310px',
      },
      height: {
        hFirstView: '750px'
      }
    },
  },
  plugins: [],
}

