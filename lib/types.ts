
export type IProjectDescriptionProps = {
    value: string[],
    delay?: number,
}

export type IProjectImagesProps = {
    images: string[],
    delay?: number,
}

export type IProjectImageItemProps = {
    src: string,
    delay?: number,
    key: string,
}

export type IHistoryLineProps = {
    links: IHistoryProps[]
    delay?: number
}

export type IHistoryProps = {
    title: string
    url: string
    end?: boolean
}

export type Property = {
    title: string,
    value: any
    key: any
    delay?: number
}
  
export type Url = {
    url: string,
    title: string,
    key: any
    delay?: number
}

export type Data = {
    name: string,
    slug: string,
    title: string,
    cover: string,
    description: string,
    short_description: "",
    properties?: Property[],
    links?: Url[],
    images?: string[],
    videos?: Url[],
}

export type APIData = {
    project: Data[]
}

export type IAnimateSectionProps = {
    delay?: number,
    children?: React.ReactNode
    className?: string,
    whileHover?: any,
    whileTap?: any,
    key?: string | number,
}

export type IBannerLayoutProps = {
    delay?: number
    children?: React.ReactNode
}

export type IIntroductionProps = {
    delay?: number
}

export type IWelcomingProps = {
    delay?: number
}

export type IBioProps = {
	title : string
	description : Array<any>
	delay?: number
}

export type IBioColProps = {
	year : string
	description : string
}

export type IBlogsProps = {
    delay: number,
    blogs?: Array<{
        imglink: string,
        title: string,
        description: string
    }>
}

export type IBlogsLayoutProps = {
    children: React.ReactNode
    delay?: number
}

export type IBlogProps = {
    imglink: string,
    title?: string,
    description?: string
    key: string | number,
    delay?: number
}

export type IButtonLinkProps = {
    text: string,
    url: string,
    delay?: number
}

export type IProjectPropertiesProps = {
    properties: Property[] | any,
    delay?: number
}

export type IProjectLinksProps = {
    url: Url[] | any,
    delay?: number
}

export type ICenterTitleProps = {
    text: string,
    delay?: number
}

export type IDescriptionProps = {
	title: string
	description: Array<string>
	delay?: number
	isindented?: boolean
}

export type IFooterProps = {
    delay: number
}

export type IHeadProps = {
    title: string,
    description?: string,
    image?: string,
    url?: string
}

export type IImageProps = {
    imglink: string,
    title?: string,
    description?: string,
    className?: string
}

export type ILinkProps = {
    link?: string,
    text: string,
    className?: string,
}

export type IProjectsProps = {
    delay: number,
    projects?: Data[]
}

export type IProjectLayoutProps = {
    children: React.ReactNode
    delay?: number
}

export type IProjectProps = {
    context: Data,
    delay?: number
}

export type ISocialsProps = {
    delay: number,
}

export type ISocialItemProps = {
    href: string,
    Icon: any,
    name?: string,
    islast?: boolean,
}