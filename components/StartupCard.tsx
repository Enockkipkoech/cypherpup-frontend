import { formatDate } from '@/lib/utils';
import { Coins } from 'lucide-react';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button';
import { Author, Startup } from '@/sanity/types';

export type StartupTypeCard = Omit<Startup, 'author'> & { author: Author };

const StartupCard = ({ post }: { post: StartupTypeCard }) => {
	const {
		_createdAt,
		views,
		author: { _id: authorId, name },
		description,
		title,
		image,
		category,
		_id,
	} = post;
	console.log({ description, title, image, category, _id });
	return (
		<li className="startup-card">
			<div className="flex-between">
				<p className="startup_card_date">{formatDate(_createdAt)}</p>
				<div className="flex gap-1.5">
					<Coins className="size-6 text-primary" size={20} />
					<span className="text-16-medium">{views} Tokens</span>
				</div>
			</div>

			<div className="flex-between mt-5 gap-5">
				<div className="flex-1">
					<Link href={`/user/${authorId}`}>
						<p className="text-16-medium line-clamp-1">{name}</p>
					</Link>
					<Link href={`/startup/${_id}`}>
						<h3 className="text-26-semibold"> {title}</h3>
					</Link>
				</div>
				<Link href={`/user/${authorId}`}>
					<Image
						src={image!}
						alt="https://placehold.co/600x400"
						width={48}
						height={48}
						className="rounded-full"
					></Image>
				</Link>
			</div>
			<Link href={`/startup/${_id}`}>
				<p className="start-up-card_desc">{description}</p>
				<Image
					src={image!}
					alt="https://placehold.co/600x400"
					width={600}
					height={400}
					className="startup-card_img"
				/>
			</Link>
			<div className="flex-between gap-3 mt-5">
				<Link href={`/?query=${category?.toLowerCase()}`}>
					<p className="text-16-medium">{category}</p>
				</Link>
				<Button className="startup-card_btn" asChild>
					<Link href={`/startup/${_id}`}>Rewards</Link>
				</Button>
			</div>
		</li>
	);
};

export default StartupCard;
