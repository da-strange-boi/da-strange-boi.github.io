
const feetToMeters = (feet) => {
  return Math.round(feet / 3.2808399)
}

const formatNumber = (int) => {
  return int.toLocaleString(undefined)
}
const formatNumber2 = (int) => {
  return int.toLocaleString(undefined, {})
}

/**
 * D = 1100 * t
 */
const lightingIsFromYou = () => {
  let value = parseInt($(".lighting input[type='number']").val())
  let D = 1100 * value

  $(".lighting .result p").html(`The distance the storm is from you is:<br><b>${formatNumber(D)} Feet</b><br><b>${formatNumber(feetToMeters(D))} Meters</b>`)
  $(".lighting .result").css('display', 'block')
}

/**
 * t = sqrt(d^3 / 216)
 */
const lengthOfStormTime = () => {
  let value = parseInt($(".stormLength input[type='number']").val())
  let t = Math.round(Math.sqrt(Math.pow(value, 3) / 216))

  $(".stormLength .result p").html(`The storm will last:<br><b>~${t} Hours</b>`)
  $(".stormLength .result").css('display', 'block')
}

/**
 * 
 */
const heatIndex = () => {
  let T = parseInt($(".heatIndex input[type='number']")[0].value)
  let rh = parseInt($(".heatIndex input[type='number']")[1].value)

  let heatIndex = - 42.379 + (2.04901523 * T) + (10.14333127 * rh)
                  - (0.22475541 * T * rh) - (6.83783 * Math.pow(10, -3) * Math.pow(T, 2))
                  - (5.481717 * Math.pow(10, -2) * Math.pow(rh, 2)) + (1.22874 * Math.pow(10, -3) * Math.pow(T, 2) * rh)
                  + (8.5282 * Math.pow(10, -4) * T * Math.pow(rh, 2)) - (1.99 * Math.pow(10, -6) * Math.pow(T, 2) * Math.pow(rh, 2))
              
  $(".heatIndex .result p").html(`The heat index is:<br><b>${Math.round(heatIndex)} F</b>`)
  $(".heatIndex .result").css('display', 'block')
}