resource "azurerm_static_web_app" "resume_web" {
  name                = "danecloudresumeweb"
  resource_group_name = azurerm_resource_group.resume_rg.name
  location            = "eastus2" 
  sku_tier            = "Free"
  sku_size            = "Free"

  app_settings = {
    "VITE_COUNTER_ENDPOINT" = "https://viewcounter.azurewebsites.net"
  }
}