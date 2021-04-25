"""
Blueprints to help separate routes.

Each route should be in it's own module. You can put multiple HTTP methods in the same
module.

Keep this package flat, no nesting.

Each module should make a Blueprint with the same name as the module with variable name
bp.

Remember to import every module in walterego.app and register it in create_app.
"""
