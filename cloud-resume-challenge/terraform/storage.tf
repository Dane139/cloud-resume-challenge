resource "azurerm_storage_account" "backend_storage" {
  name                      = "viewcounter"
  resource_group_name       = "viewcounter" 
  location                  = "eastus2" 
  account_tier              = "Standard"
  account_replication_type  = "LRS"
  shared_access_key_enabled = true
}