const html = require('choo/html')
const css = require('sheetify')

const slides = {
  headline: function ({ title, subtitle }) {
    return html`
      <style scoped>
        .slide {
          width: 100%;
          height: 100%;

          background: rgba(0, 43, 85);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
          pointer-events: none;
          user-select: none;
        }
        h1 {
          color: white;
          font-size: 50px;
          max-width: 90%;
          text-align: center;
        }

        p {
          font-size: 24px;
          color: #80C565;
          font-weight: bold;
        }
      </style>
      <div class="slide">
        <h1>${title}</h1>
        <p>${subtitle}</p>
      </div>
    `
  },
  title: function ({ title }) {
    return html`
      <style>
        .slide {
          width: 100%;
          height: 100%;

          background: rgba(0, 43, 85);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
          pointer-events: none;
          user-select: none;
        }
        h1 {
          color: white;
          font-size: 50px;
          max-width: 90%;
          text-align: center;
        }
      </style>
      <div class="slide">
        <h1>${title}</h1>
      </div>
    `
  },
  menu: function ({ items, number }) {
    return html`
      <style>
        .slide {
          width: 40%;
          height: 100%;

          background: rgba(0, 43, 85);
          display: flex;
          align-items: left;
          padding-left: 60%;
          justify-content: space-around;
          flex-direction: column;
          box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
          pointer-events: none;
          user-select: none;
        }
        .slide:before {
          content: "";
          position: absolute;
          left: calc(60% - 33px);
          top: 10%;
          height: calc(80% - 8px);
          width: 2px;
          background: white;
        }


        section {
          position: relative;
          color: white;
          font-size: 32px;
          font-weight: bold;
        }

        section:before {
          content: "";
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #80C565;
          position: absolute;
          top: 50%;
          transform: translate(-48px, -50%);
        }
        section.pasive:before {
          background: white;
          width: 16px;
          height: 16px;
          transform: translate(-40px, -50%);
        }

        img {
          width: 35%;
          position: absolute;
          left: 28%;
          top: 50%;
          transform: translate(-50%, -50%);
        }
        
      </style>
      <div class="slide">
        <img src="assets/circleImage.png" />
        ${items.map((item, idx) => html`<section
          class=${idx >= number ? 'pasive' : ''}
          >${item}</section>`)}
      </div>
    `
  },
  listWithImage: function ({ image, items }) {
    return html`
      <style>
        .slide {
          width: 40%;
          height: 100%;

          background: rgba(255, 255, 255, 0.5);
          display: flex;
          align-items: left;
          padding-left: 60%;
          justify-content: space-around;
          flex-direction: column;
        }

        img {
          width: 35%;
          position: absolute;
          left: 28%;
          top: 50%;
          transform: translate(-50%, -50%);
        }
        .list {
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: left;
          justify-content: space-around;
        }
        .item {
          font-size: 28px;
        }
      </style>
      <div class="slide">
        <img src=${image} />
        <div class="list">
          ${items.map(item => html`<div class="item">${item}</div>`)}
        </div>
      </div>
    `
  },
  image: function ({ image, portrait, background }) {
    return html`
      <style scoped>
        .slide {
          width: 100%;
          height: 100%;
          ${background && `background: ${background};`}
          pointer-events: none;
          user-select: none;
        }

        img {
          width: 100%;
          max-width: 100%;
          max-height: 100%;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          ${background && `
            width: 80%;
            max-width: 80%;
            max-height: 80%;
          `}
        }
        img.portrait {
          width: auto;
          height: 100%;
          ${background && `
            height: 80%;
          `}
        }
      </style>
      <div class="slide">
        <img src=${image} class=${portrait && 'portrait'} />
      </div>
    `
  },
  survey: function ({ options, background, name, question }, state, emit) {
    return html`
      <style scoped>
        .slide {
          width: 100%;
          height: 100%;
          ${background && `background: ${background};`}
          user-select: none;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .options {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .option {
          margin: 16px;
        }
        .option .title {
          font-size: 24px;
          font-weight: bold;
          padding-top: 16px;
          text-align: center;
          width: 100%;
        }
        .option .indicator-container {
          height: 50vh;
          width: 100px;
          background: #E9F6F6;
          position: relative;
        }
        .option .indicator {
          width: 100%;
          height: 2%;
          background: #002B55;
          position: absolute;
          bottom: 0;
          transform-origin: 50% 100%;
          transition: transform 0.3s ease-in;
          transform: scaleY(0);
        }
        .option .indicator.odd {
          background: #80C565;
        }
        .option-button {
          padding: 16px;
          border: none;
          outline: none;
          margin: 16px;
          background: #80C565;
          color: white;
          font-weight: bold; 
          font-size: 24px;
        }
        .option-button:nth-child(even) {
          background: #002B55;
        }
        .question {
          font-size: 32px;
          font-weight: bold;
          text-align: center;
          color: #80C565;
          width: 80%;
        }
      </style>
      <div class="slide">
        <div class="question">${question}</div>
        <div class="options">
          ${(state.name === 'klemen_presentation' || state.doneSurveys[name]) && options.map((option, id) => html`
            <div class="option">
              <div class="indicator-container">
                <div class="indicator ${id % 2 === 0 ? 'odd' : ''}" style=${`transform: scaleY(${getAnswers(name, option)})`}></div>
              </div>
              <div class="title">${option}</div>
            </div>
          `) || ''}
          ${!(state.name === 'klemen_presentation' || state.doneSurveys[name]) && options.map(option => html`
            <button class="option-button" onclick=${answer(name, option)}>${option}</button>
          `) || ''}
        </div>
      </div>
    `

    function answer (survey, answer) {
      return function () {
        emit('survey:answer', { survey, answer })
      }
    }

    function getAnswers (survey, answer) {
      if (state.surveyResults[survey]) {
        return state.surveyResults[survey][answer] || 0
      }
      return 0
    }
  }
}



function view (state, emit) {
  const currentSlide = state.slideNr
  const slide = state.slide
  const totalSlides = state.totalSlides
  return html`
    <div>
      <style scoped>
        .container {
          font-family: sans-serif;
          font-family: Gotham; 

          position: fixed;
          width: 80vw;
          height: 80vh;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .page {
          position: absolute;
          left: 50%;
          bottom: 16px;

          font-family: sans-serif;
          font-family: gotham;
          color: grey;
        }
        .page span {
          color: black;
        }
      </style>
      <div class="container">
        ${slide && slides[slide.type](slide, state, emit)}
      </div>
      <div class="page">
        <span>_${currentSlide + 1}</span>
        /
        ${totalSlides}
      </div>
    </div>
  `
}

module.exports = view
