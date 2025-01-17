import SearchForm from '@/components/SearchForm';
import StartupCard from '@/components/StartupCard';

export default async function Home({
	searchParams,
}: {
	searchParams: Promise<{ query?: string }>;
}) {
	const query = (await searchParams).query;

	const posts = [
		{
			_createdAt: `${new Date().toDateString()}`,
			views: 233,
			author: { _id: 1, name: 'Enock Kipkoech' },
			_id: 1,
			description: 'A platform for connecting techpreneurs with startups',
			title: 'Techpreneur Connect',
			image: 'https://placehold.co/48x48/000000/FFFFFF/png',

			category: 'Tech',
		},
	];
	return (
		<>
			<section className="pink_container">
				<h1 className="heading">
					Pictch Your Startup, <br /> Connect with Techpreneurs
				</h1>
				<p className="sub-heading !max-w-3xl">
					Submit Ideas, Pitch, and Get Funded!
				</p>

				<SearchForm query={query} />
			</section>

			<section className="section_container">
				<p className="text-30-semibold">
					{query ? `Search results for "${query}"` : 'All Startups'}
				</p>

				<ul className="mt-7 card_grid">
					{posts?.length > 0 ? (
						posts.map((post: StartupCardType, index: number) => (
							<StartupCard key={post?._id} post={post} />
						))
					) : (
						<p className="no-results">No startups found</p>
					)}
				</ul>
			</section>
		</>
	);
}

// npm install --legacy-peer-deps --save @sanity/vision@3 sanity@3 @sanity/image-url@1 styled-components@6'
// npm warn deprecated @sanity/block-tools@3.70.0: Renamed - use `@portabletext/block-tools` instead. `@sanity/block-tools` will no longer receive updates.
