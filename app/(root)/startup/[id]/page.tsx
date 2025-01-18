import { formatDate } from '@/lib/utils';
import { client } from '@/sanity/lib/client';
import { STARTUP_BY_ID_QUERY } from '@/sanity/lib/queries';
import { notFound } from 'next/navigation';
import React from 'react';
import Image from 'next/image';
import { Link } from 'lucide-react';

export const experimental_ppr = true;

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
	const id = (await params).id;
	console.log({ id });
	const post = await client.fetch(STARTUP_BY_ID_QUERY, { id });
	console.log({ post });

	if (!post) return notFound();
	return (
		<>
			<section className="pink_container !min-h-[230px">
				<p className="tag">{formatDate(post._createdAt)}</p>
				<h1 className="heading"> {post.title}</h1>
				<p className="sub-heading !max-w-5xl">{post.description}</p>
			</section>

			<section className="section_container">
				<Image
					src={post.image}
					width={800}
					height={400}
					alt="thumbnail"
					className="w-full h-[400px] rounded-[50px] object-cover"
				/>
				<div className="space-y-5 mt-10 max-w-4xl mx-auto">
					<div className="flex-between gap-5">
						<Link
							href={`/user/${post.author?._id}`}
							className="flex gap-2 items-center mb3"
						>
							<Image
								src={post.author.image}
								alt="avatar"
								width={64}
								height={64}
								className="rounded-full drop-shadow-lg"
							></Image>
						</Link>
					</div>
				</div>
			</section>
		</>
	);
};

export default page;
