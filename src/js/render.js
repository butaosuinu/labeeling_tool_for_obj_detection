window.jQuery = require('jquery')
const riot    = require('riot')
window.UIkit  = require('uikit')

// tags
require('../tag/labeling.tag')

// routing
const Router = require('riot-router')

const Route         = Router.Route
const DefaultRoute  = Router.DefaultRoute
const NotFoundRoute = Router.NotFoundRoute
const RedirectRoute = Router.RedirectRoute

router.routes([
	new DefaultRoute({tag: 'labeling'}),
	new NotFoundRoute({tag: 'labeling'})
])


riot.mount('*')
router.start()
