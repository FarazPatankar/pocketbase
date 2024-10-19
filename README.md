# Pocketbase on Railway

Open Source backend for your next SaaS and Mobile app in 1 file.

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/template/73ofk1?referralCode=HKQvZr)

<p align="center">
    <a href="https://pocketbase.io" target="_blank" rel="noopener">
        <img src="https://i.imgur.com/5qimnm5.png" alt="PocketBase - open source backend in 1 file" />
    </a>
</p>

<p align="center">
    <a href="https://github.com/pocketbase/pocketbase/actions/workflows/release.yaml" target="_blank" rel="noopener"><img src="https://github.com/pocketbase/pocketbase/actions/workflows/release.yaml/badge.svg" alt="build" /></a>
    <a href="https://github.com/pocketbase/pocketbase/releases" target="_blank" rel="noopener"><img src="https://img.shields.io/github/release/pocketbase/pocketbase.svg" alt="Latest releases" /></a>
    <a href="https://pkg.go.dev/github.com/pocketbase/pocketbase" target="_blank" rel="noopener"><img src="https://godoc.org/github.com/pocketbase/pocketbase?status.svg" alt="Go package documentation" /></a>
</p>

[PocketBase](https://pocketbase.io) is an open source Go backend, consisting of:

- embedded database (_SQLite_) with **realtime subscriptions**
- built-in **files and users management**
- convenient **Admin dashboard UI**
- and simple **REST-ish API**

**For documentation and examples, please visit https://pocketbase.io/docs.**

> [!WARNING]
> Please keep in mind that PocketBase is still under active development
> and therefore full backward compatibility is not guaranteed before reaching v1.0.0.

## API SDK clients

The easiest way to interact with the API is to use one of the official SDK clients:

- **JavaScript - [pocketbase/js-sdk](https://github.com/pocketbase/js-sdk)** (_browser and node_)
- **Dart - [pocketbase/dart-sdk](https://github.com/pocketbase/dart-sdk)** (_web, mobile, desktop_)

## Overview

### Use as standalone app

You could download the prebuilt executable for your platform from the [Releases page](https://github.com/pocketbase/pocketbase/releases).
Once downloaded, extract the archive and run `./pocketbase serve` in the extracted directory.

The prebuilt executables are based on the [`examples/base/main.go` file](https://github.com/pocketbase/pocketbase/blob/master/examples/base/main.go) and comes with the JS VM plugin enabled by default which allows to extend PocketBase with JavaScript (_for more details please refer to [Extend with JavaScript](https://pocketbase.io/docs/js-overview/)_).

## Security

If you discover a security vulnerability within PocketBase, please send an e-mail to **support at pocketbase.io**.

All reports will be promptly addressed, and you'll be credited accordingly.

## Contributing

PocketBase is free and open source project licensed under the [MIT License](LICENSE.md).
You are free to do whatever you want with it, even offering it as a paid service.

You could help continuing its development by:

- [Contribute to the source code](CONTRIBUTING.md)
- [Suggest new features and report issues](https://github.com/pocketbase/pocketbase/issues)

PRs for new OAuth2 providers, bug fixes, code optimizations and documentation improvements are more than welcome.

But please refrain creating PRs for _new features_ without previously discussing the implementation details.
PocketBase has a [roadmap](https://github.com/orgs/pocketbase/projects/2) and I try to work on issues in specific order and such PRs often come in out of nowhere and skew all initial planning with tedious back-and-forth communication.

Don't get upset if I close your PR, even if it is well executed and tested. This doesn't mean that it will never be merged.
Later we can always refer to it and/or take pieces of your implementation when the time comes to work on the issue (don't worry you'll be credited in the release notes).
