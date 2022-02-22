export type Home = {
    title: string;
    quote: string;
	intro: any;
    main: string;
}

export type About = {
    title: string;
	intro: any;
    main: string;
}

export type Content = {
	publishedAt: string;
	title: string;
	slug: {current: any};
	intro: any;
	summary: string;
	main: any;
	readingTime: string;
	count: number;
}

export type Views = {
	count: number;
}
