import plugin from 'tailwindcss';

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
        'fontTitleWork': '3.3em',
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
        'clampFirstPartHome': 'clamp(310px, 100%, 960px)',
        'clampSecondPartHome': 'clamp(310px, 90%, 1250px)', 
        'clampTextDivExp': 'clamp(310px, 95%, 650px)',
        'clampToSection': 'clamp(350px, 47%, 550px)',
        'clampArticle': 'clamp(310px, 95%, 700px)',
        'clampTableContents': 'clamp(310px, 95%, 325px)', 
        'clampFooterForm': 'clamp(310px, 95%, 600px)',
        'clampwResumeInfo': 'clamp(310px, 100%, 760px)',
      }, 
      width: {
        'wHeaderLogoCont': '100px',
        'wfooterNav': '310px',
        'wHiremeDiv': '280px', 
        'wCloseBtn': '150px',
        'wSocialMBM': '315px',
        'wLeftLineBM': '100px',
        'wTitleBrief': '550px',
        'wMyPhoto': '350px',
        'inputsCf': '355px',
        'inputsPJ': '250px',
        'wHomeSecondPartDivSkill': '500px',
        'wtopSectionImg': '480px',
        'wResumeCore': '310px',
      },
      height: {
        'hFirstView': '700px',
        'hFirstView2': '500px', 
        'hUlBMnav': '100%',
        'htopSectionImg': '480px',
        'htopsectiondiv': '550px'
      }, 
      screens: {
        'screenLogoCont':'412px',
        'mobileBM': '507px',
        'screenSapnBM': '598px',
        'NavmenuMobile': '384px',
        'firstPartHome': '926px',
        'secondPartHome': '1129px',
        'screenProjectsSection': '846px',
        'inputsCF': '840px',
        'screenTopSection': '830px',
        'screenArticle': '1089px',
        'screenFooterForm': '955px',
        'screenRM': '790px',
      },
    },
  },
  plugins: [],
}

