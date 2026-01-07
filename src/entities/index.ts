/**
 * Auto-generated entity types
 * Contains all CMS collection interfaces in a single file 
 */

/**
 * Collection ID: icecreamproducts
 * Interface for IceCreamProducts
 */
export interface IceCreamProducts {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  productName?: string;
  /** @wixFieldType text */
  packSize?: string;
  /** @wixFieldType number */
  price?: number;
  /** @wixFieldType image */
  mainImage?: string;
  /** @wixFieldType image */
  textureImage?: string;
  /** @wixFieldType text */
  description?: string;
}


/**
 * Collection ID: wholesaleinquiries
 * Interface for WholesaleInquiries
 */
export interface WholesaleInquiries {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  inquirerName?: string;
  /** @wixFieldType text */
  inquirerEmail?: string;
  /** @wixFieldType text */
  inquirerPhone?: string;
  /** @wixFieldType text */
  inquiryType?: string;
  /** @wixFieldType text */
  companyName?: string;
  /** @wixFieldType text */
  messageContent?: string;
}
