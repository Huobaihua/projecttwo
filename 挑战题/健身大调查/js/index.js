const myForm = document.querySelector('#myForm');
const quescontent = document.querySelector('#quescontent')

const result = document.querySelector('#result')

const males = ['男','女']

const placeValueMap = new Map([
  ['1','公园'],
  ['2','健身房'],
  ['3','户外']
])
function formSubmit(){
  let formData = new FormData(myForm)
  let height = formData.get('height')
  let weight = formData.get('weight')
  let male = formData.get('male')
  let place = formData.getAll('place')
  places = place.map(index=>placeValueMap.get(index))
  let placeStr = places.join('、')
  quescontent.style.display = 'none'
  result.style.display='block'
  result.innerText+=`\n身高 ${height}cm，体重 ${weight}kg，性别${males[male]}，会在${placeStr}锻炼`
}