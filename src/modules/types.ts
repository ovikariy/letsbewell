export interface Section {
    id: string,
    menuText: string,
    component: React.ReactNode
}

export interface SectionProps 
{ 
    id: string 
}

export interface MediaProps {
    heading: string,
    body: string,
    leftIcon: string,
    leftIconAlt: string
}