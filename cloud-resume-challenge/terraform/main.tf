resource "azurerm_resource_group" "resume_rg" {
  name     = "cloud-resume-challenge"
  location = "eastus2"
}

output "resource_group_id" {
  value = azurerm_resource_group.resume_rg.id
}