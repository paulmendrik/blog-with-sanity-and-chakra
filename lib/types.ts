export type Home = {
    title: string;
    quote: string;
    main: string;
}

export type About = {
    title: string;
    main: string;
}

export type Content = {
	publishedAt: string;
	title: string;
	slug: {current: string};
	summary: string;
	main: string;
	readingTime: string;
	count: number;
}

export type Views = {
	count: number;
  }