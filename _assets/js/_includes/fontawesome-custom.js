const icons = {% include_relative _includes/fontawesome/used-icons.json %};
const faElements = document.querySelectorAll('i[class*="fa-"]')
faElements.forEach(i => {
  // get icon name
  const faIconName = i.classList.value.match(/fa-(\w|-){3,}/g).toString().replace('fa-', '')
  // change main fa class name
  i.classList.add('svg-inline--fa')
  // save all classes
  const faIconClasses = i.classList.value
  // create svg
  let svgIcon = document.createElement('SVG')
  // add attribute viewBox
  svgIcon.setAttribute('viewBox', `0 0 ${icons[faIconName][0]} ${icons[faIconName][1]}`)
  // add attribute xmlns
  svgIcon.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
  // recoveri classes
  svgIcon.classList.value = faIconClasses
  // add fa width class
  svgIcon.classList.add(`fa-w-${icons[faIconName][0]/icons[faIconName][1]*16}`)
  // create path clid
  let pathSvgIcon = document.createElement('PATH')
  // add d path attribute
  pathSvgIcon.setAttribute('d', icons[faIconName][4])
  // add fill path attribute
  pathSvgIcon.setAttribute('fill', 'currentColor')
  // add child path to svg
  svgIcon.appendChild(pathSvgIcon)
  // add svg near i.fa element
  i.after(svgIcon)
  // remove i.fa element
  i.remove()
})