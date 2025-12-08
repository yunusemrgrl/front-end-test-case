export interface FooterLinkType {
    label: string;
    url: string;
}

export interface FooterSectionType {
    title: string;
    links: FooterLinkType[];
}

export interface SocialMediaType {
    name: string;
    url: string;
    icon: string;
}

export interface ContactInfoType {
    address: string;
    phone: string;
    email: string;
}

export interface FooterDataType {
    sections: FooterSectionType[];
    contactInfo: ContactInfoType;
    socialMedia: SocialMediaType[];
    copyright: string;
}

