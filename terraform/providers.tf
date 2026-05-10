terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~> 3.0"
    }
  }
  
  # This is the "Backend" configuration
  backend "azurerm" {
    resource_group_name  = "tfstate-rg"
    storage_account_name = "danetfstate22599"
    container_name       = "tfstate"
    key                  = "resume.terraform.tfstate"
  }
}

provider "azurerm" {
  features {}
}