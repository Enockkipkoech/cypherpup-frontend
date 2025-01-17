import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { auth, signOut, signIn } from '@/auth';
import { WalletConnect } from '@/components/walletConnect';

const navbar = async () => {
	const session = await auth();
	console.log({ session });
	return (
		<header className="px-5 py-3 bg-gray-200 shadow-sm font-work-sans">
			<nav className="flex justify-between items-center">
				<Link href="/">
					<Image src="/logo.png" alt="logo" width={143} height={30} />
				</Link>

				<div className="flex items-center gap-5 text-black">
					{session && session?.user ? (
						<>
							<Link href="/startup/create" className="font-semibold">
								<span className="max-sm:hidden" {...WalletConnect}>
									Connect
								</span>
							</Link>

							<form
								action={async () => {
									'use server';
									await signOut({ redirectTo: '/', redirect: true });
								}}
							>
								<button type="submit">
									<span className="max-sm:hidden">Logout</span>
								</button>
							</form>
							<Link href={`/user/${session?.user.id}`}>
								<span>{session?.user?.name}</span>
							</Link>
						</>
					) : (
						<form
							action={async () => {
								'use server';

								await signIn('github');
							}}
						>
							<button type="submit" className="text-black">
								Login
							</button>
						</form>
					)}
				</div>
			</nav>
		</header>
	);
};

export default navbar;
