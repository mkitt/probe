/*global probe */
describe('probe', function() {

  var el = document.getElementById('fixture')
  var noop = function(e) {}

  var msg_el = document.getElementById('messages')
  var msg_list = msg_el.querySelector('ol')

  var message = function(msg) {
    msg_el.classList.remove('hidden')
    var markup = '<li>' + msg + '</li>'
    msg_list.innerHTML += markup
  }

  describe('@instance', function() {
    it('is accessible in the global namespace', function() {
      expect(probe).not.to.be(null)
    })
  })


  describe('#transitionend', function() {
    it('returns the correct "transitionend" string used by the browser', function() {
      expect(["transitionend", "webkitTransitionEnd", false]).to.contain(probe.transitionend)
      if (!probe.transitionend) message('Browser returned false for "transitionend"')
    })
  })


  describe('#animationend', function() {
    it('returns the correct "animationend" string used by the browser', function() {
      expect(["animationend", "webkitAnimationEnd", false]).to.contain(probe.animationend)
      if (!probe.animationend) message('Browser returned false for "animationend"')
    })
  })

});

