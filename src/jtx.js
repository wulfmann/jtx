function _jx (item, result, options) {
  const type = Object.prototype.toString.call(item)
  switch (type) {
    case '[object Array]':
      for (var i=0; i<item.length; i++) {
        result.push('<' + i + '>')
        _jx(item[i], result, options)
        result.push('</' + i + '>')
      }
      break
    case '[object Object]':
      var obj = Object.keys(item)
      for (var i=0; i<obj.length;i++) {
        result.push('<' + obj[i] + '>')
        _jx(item[obj[i]], result)
        result.push('</' + obj[i] + '>')
      }
      break
    case '[object Function]':
      break
    default:
      result.push(item)
      break
  }

  return result
}

function jx (json, options) {
  var start = []
  var defaults ={
    header: false,
    indexes: false
  }
  var settings = Object.assign({}, defaults, options)

  if (settings.header) {
    start.push('<?xml version="1.0" encoding="UTF-8" standalone="no" ?>')
  }

  let data
  try {
    data = JSON.parse(json)
  } catch (e) {
    data = json
  }

  var result = _jx(data, start, settings)
  return result.join('')
}

module.exports = jx