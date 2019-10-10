// Autogenerated by Thrift Compiler (0.12.0)

/* tslint:disable */
/* eslint-disable */

export declare enum TagType {
  CONTRIBUTOR = 'contributor',
  KEYWORD = 'keyword',
  SERIES = 'series',
  NEWSPAPER_BOOK_SECTION = 'newspaper_book_section',
  NEWSPAPER_BOOK = 'newspaper_book',
  BLOG = 'blog',
  TONE = 'tone',
  TYPE = 'type',
  PUBLICATION = 'publication',
  TRACKING = 'tracking',
  PAID_CONTENT = 'paid_content',
  CAMPAIGN = 'campaign',
}

declare enum ContentType {
  ARTICLE = 0,
  LIVEBLOG = 1,
  GALLERY = 2,
  INTERACTIVE = 3,
  PICTURE = 4,
  VIDEO = 5,
  CROSSWORD = 6,
  AUDIO = 7,
}

declare enum ElementType {
  TEXT = 0,
  IMAGE = 1,
  EMBED = 2,
  FORM = 3,
  PULLQUOTE = 4,
  INTERACTIVE = 5,
  COMMENT = 6,
  RICH_LINK = 7,
  TABLE = 8,
  VIDEO = 9,
  TWEET = 10,
  WITNESS = 11,
  CODE = 12,
  AUDIO = 13,
  MAP = 14,
  DOCUMENT = 15,
  MEMBERSHIP = 16,
  INSTAGRAM = 17,
  CONTENTATOM = 18,
  VINE = 19,
}

declare enum CrosswordType {
  QUICK = 0,
  CRYPTIC = 1,
  QUIPTIC = 2,
  SPEEDY = 3,
  PRIZE = 4,
  EVERYMAN = 5,
  DIAN_QUIPTIC_CROSSWORD = 6,
  WEEKEND = 7,
}

declare enum Office {
  UK = 0,
  US = 1,
  AUS = 2,
}

declare enum AssetType {
  IMAGE = 'image',
  VIDEO = 'video',
  AUDIO = 'audio',
  EMBED = 'embed',
  TWEET = 'tweet',
}

declare enum MembershipTier {
  MEMBERS_ONLY = 0,
  PAID_MEMBERS_ONLY = 1,
}

declare enum SponsorshipType {
  SPONSORED = 0,
  FOUNDATION = 1,
  PAID_CONTENT = 2,
}

export declare class CapiDateTime {
  dateTime: number;
  iso8601: string;

    constructor(args?: { dateTime: number; iso8601: string; });
}

declare class Rights {
  syndicatable: boolean;
  subscriptionDatabases: boolean;
  developerCommunity: boolean;

    constructor(args?: { syndicatable?: boolean; subscriptionDatabases?: boolean; developerCommunity?: boolean; });
}

declare class AssetFields {
  aspectRatio: string;
  altText: string;
  isInappropriateForAdverts: boolean;
  caption: string;
  credit: string;
  embeddable: boolean;
  photographer: string;
  source: string;
  stillImageUrl: string;
  width: number;
  height: number;
  name: string;
  secureFile: string;
  isMaster: boolean;
  sizeInBytes: number;
  durationMinutes: number;
  durationSeconds: number;
  displayCredit: boolean;
  thumbnailUrl: string;
  role: string;
  mediaId: string;
  iframeUrl: string;
  scriptName: string;
  scriptUrl: string;
  blockAds: boolean;
  html: string;
  embedType: string;
  explicit: boolean;
  clean: boolean;
  thumbnailImageUrl: string;
  linkText: string;
  linkPrefix: string;
  shortUrl: string;
  imageType: string;
  suppliersReference: string;
  mediaApiUri: string;
  copyright: string;
  mimeType: string;
  url: string;
  originalUrl: string;
  id: string;
  attribution: string;
  description: string;
  title: string;
  contentAuthSystem: string;
  alt: string;
  picdarUrn: string;
  comment: string;
  witnessEmbedType: string;
  authorName: string;
  authorUsername: string;
  authorWitnessProfileUrl: string;
  authorGuardianProfileUrl: string;
  apiUrl: string;
  dateCreated: CapiDateTime;
  youtubeUrl: string;
  youtubeSource: string;
  youtubeTitle: string;
  youtubeDescription: string;
  youtubeAuthorName: string;
  youtubeHtml: string;
  venue: string;
  location: string;
  identifier: string;
  price: string;
  start: CapiDateTime;
  safeEmbedCode: boolean;

    constructor(args?: { aspectRatio?: string; altText?: string; isInappropriateForAdverts?: boolean; caption?: string; credit?: string; embeddable?: boolean; photographer?: string; source?: string; stillImageUrl?: string; width?: number; height?: number; name?: string; secureFile?: string; isMaster?: boolean; sizeInBytes?: number; durationMinutes?: number; durationSeconds?: number; displayCredit?: boolean; thumbnailUrl?: string; role?: string; mediaId?: string; iframeUrl?: string; scriptName?: string; scriptUrl?: string; blockAds?: boolean; html?: string; embedType?: string; explicit?: boolean; clean?: boolean; thumbnailImageUrl?: string; linkText?: string; linkPrefix?: string; shortUrl?: string; imageType?: string; suppliersReference?: string; mediaApiUri?: string; copyright?: string; mimeType?: string; url?: string; originalUrl?: string; id?: string; attribution?: string; description?: string; title?: string; contentAuthSystem?: string; alt?: string; picdarUrn?: string; comment?: string; witnessEmbedType?: string; authorName?: string; authorUsername?: string; authorWitnessProfileUrl?: string; authorGuardianProfileUrl?: string; apiUrl?: string; dateCreated?: CapiDateTime; youtubeUrl?: string; youtubeSource?: string; youtubeTitle?: string; youtubeDescription?: string; youtubeAuthorName?: string; youtubeHtml?: string; venue?: string; location?: string; identifier?: string; price?: string; start?: CapiDateTime; safeEmbedCode?: boolean; });
}

export declare class Asset {
  type: AssetType;
  mimeType: string;
  file: string;
  typeData: AssetFields;

    constructor(args?: { type: AssetType; mimeType?: string; file?: string; typeData?: AssetFields; });
}

declare class TextElementFields {
  html: string;

    constructor(args?: { html?: string; });
}

declare class PullquoteElementFields {
  html: string;
  attribution: string;
  role: string;

    constructor(args?: { html?: string; attribution?: string; role?: string; });
}

declare class TweetElementFields {
  source: string;
  url: string;
  id: string;
  html: string;
  originalUrl: string;
  role: string;

    constructor(args?: { source?: string; url?: string; id?: string; html?: string; originalUrl?: string; role?: string; });
}

declare class AudioElementFields {
  html: string;
  source: string;
  description: string;
  title: string;
  credit: string;
  caption: string;
  durationMinutes: number;
  durationSeconds: number;
  clean: boolean;
  explicit: boolean;

    constructor(args?: { html?: string; source?: string; description?: string; title?: string; credit?: string; caption?: string; durationMinutes?: number; durationSeconds?: number; clean?: boolean; explicit?: boolean; });
}

declare class VideoElementFields {
  url: string;
  description: string;
  title: string;
  html: string;
  source: string;
  credit: string;
  caption: string;
  height: number;
  width: number;
  duration: number;
  contentAuthSystem: string;
  embeddable: string;
  isInappropriateForAdverts: boolean;
  mediaId: string;
  stillImageUrl: string;
  thumbnailUrl: string;
  shortUrl: string;
  role: string;
  originalUrl: string;

    constructor(args?: { url?: string; description?: string; title?: string; html?: string; source?: string; credit?: string; caption?: string; height?: number; width?: number; duration?: number; contentAuthSystem?: string; embeddable?: string; isInappropriateForAdverts?: boolean; mediaId?: string; stillImageUrl?: string; thumbnailUrl?: string; shortUrl?: string; role?: string; originalUrl?: string; });
}

declare class ImageElementFields {
  caption: string;
  copyright: string;
  displayCredit: boolean;
  credit: string;
  source: string;
  photographer: string;
  alt: string;
  mediaId: string;
  mediaApiUri: string;
  picdarUrn: string;
  suppliersReference: string;
  imageType: string;
  comment: string;
  role: string;

    constructor(args?: { caption?: string; copyright?: string; displayCredit?: boolean; credit?: string; source?: string; photographer?: string; alt?: string; mediaId?: string; mediaApiUri?: string; picdarUrn?: string; suppliersReference?: string; imageType?: string; comment?: string; role?: string; });
}

declare class InteractiveElementFields {
  url: string;
  originalUrl: string;
  source: string;
  caption: string;
  alt: string;
  scriptUrl: string;
  html: string;
  scriptName: string;
  iframeUrl: string;
  role: string;
  isMandatory: boolean;

    constructor(args?: { url?: string; originalUrl?: string; source?: string; caption?: string; alt?: string; scriptUrl?: string; html?: string; scriptName?: string; iframeUrl?: string; role?: string; isMandatory?: boolean; });
}

declare class StandardElementFields {
  url: string;
  originalUrl: string;
  source: string;
  title: string;
  description: string;
  credit: string;
  caption: string;
  width: number;
  height: number;
  html: string;
  role: string;
  isMandatory: boolean;

    constructor(args?: { url?: string; originalUrl?: string; source?: string; title?: string; description?: string; credit?: string; caption?: string; width?: number; height?: number; html?: string; role?: string; isMandatory?: boolean; });
}

declare class WitnessElementFields {
  url: string;
  originalUrl: string;
  witnessEmbedType: string;
  mediaId: string;
  source: string;
  title: string;
  description: string;
  authorName: string;
  authorUsername: string;
  authorWitnessProfileUrl: string;
  authorGuardianProfileUrl: string;
  caption: string;
  alt: string;
  width: number;
  height: number;
  html: string;
  apiUrl: string;
  photographer: string;
  dateCreated: CapiDateTime;
  youtubeUrl: string;
  youtubeSource: string;
  youtubeTitle: string;
  youtubeDescription: string;
  youtubeAuthorName: string;
  youtubeHtml: string;
  role: string;

    constructor(args?: { url?: string; originalUrl?: string; witnessEmbedType?: string; mediaId?: string; source?: string; title?: string; description?: string; authorName?: string; authorUsername?: string; authorWitnessProfileUrl?: string; authorGuardianProfileUrl?: string; caption?: string; alt?: string; width?: number; height?: number; html?: string; apiUrl?: string; photographer?: string; dateCreated?: CapiDateTime; youtubeUrl?: string; youtubeSource?: string; youtubeTitle?: string; youtubeDescription?: string; youtubeAuthorName?: string; youtubeHtml?: string; role?: string; });
}

declare class SponsorshipTargeting {
  publishedSince: CapiDateTime;
  validEditions: string[];

    constructor(args?: { publishedSince?: CapiDateTime; validEditions?: string[]; });
}

declare class SponsorshipLogoDimensions {
  width: number;
  height: number;

    constructor(args?: { width: number; height: number; });
}

declare class Sponsorship {
  sponsorshipType: SponsorshipType;
  sponsorName: string;
  sponsorLogo: string;
  sponsorLink: string;
  targeting: SponsorshipTargeting;
  aboutLink: string;
  sponsorLogoDimensions: SponsorshipLogoDimensions;
  highContrastSponsorLogo: string;
  highContrastSponsorLogoDimensions: SponsorshipLogoDimensions;
  validFrom: CapiDateTime;
  validTo: CapiDateTime;

    constructor(args?: { sponsorshipType: SponsorshipType; sponsorName: string; sponsorLogo: string; sponsorLink: string; targeting?: SponsorshipTargeting; aboutLink?: string; sponsorLogoDimensions?: SponsorshipLogoDimensions; highContrastSponsorLogo?: string; highContrastSponsorLogoDimensions?: SponsorshipLogoDimensions; validFrom?: CapiDateTime; validTo?: CapiDateTime; });
}

declare class RichLinkElementFields {
  url: string;
  originalUrl: string;
  linkText: string;
  linkPrefix: string;
  role: string;
  sponsorship: Sponsorship;

    constructor(args?: { url?: string; originalUrl?: string; linkText?: string; linkPrefix?: string; role?: string; sponsorship?: Sponsorship; });
}

declare class MembershipElementFields {
  originalUrl: string;
  linkText: string;
  linkPrefix: string;
  title: string;
  venue: string;
  location: string;
  identifier: string;
  image: string;
  price: string;
  start: CapiDateTime;

    constructor(args?: { originalUrl?: string; linkText?: string; linkPrefix?: string; title?: string; venue?: string; location?: string; identifier?: string; image?: string; price?: string; start?: CapiDateTime; });
}

declare class EmbedElementFields {
  html: string;
  safeEmbedCode: boolean;
  alt: string;
  isMandatory: boolean;

    constructor(args?: { html?: string; safeEmbedCode?: boolean; alt?: string; isMandatory?: boolean; });
}

declare class InstagramElementFields {
  originalUrl: string;
  title: string;
  source: string;
  authorUrl: string;
  authorUsername: string;
  html: string;
  width: number;
  alt: string;
  caption: string;

    constructor(args?: { originalUrl: string; title: string; source: string; authorUrl: string; authorUsername: string; html?: string; width?: number; alt?: string; caption?: string; });
}

declare class CommentElementFields {
  source: string;
  discussionKey: string;
  commentUrl: string;
  originalUrl: string;
  sourceUrl: string;
  discussionUrl: string;
  authorUrl: string;
  html: string;
  authorName: string;
  commentId: number;

    constructor(args?: { source?: string; discussionKey?: string; commentUrl?: string; originalUrl?: string; sourceUrl?: string; discussionUrl?: string; authorUrl?: string; html?: string; authorName?: string; commentId?: number; });
}

declare class VineElementFields {
  originalUrl: string;
  title: string;
  source: string;
  authorUrl: string;
  authorUsername: string;
  html: string;
  width: number;
  height: number;
  alt: string;
  caption: string;

    constructor(args?: { originalUrl: string; title: string; source: string; authorUrl: string; authorUsername: string; html?: string; width?: number; height?: number; alt?: string; caption?: string; });
}

declare class ContentAtomElementFields {
  atomId: string;
  atomType: string;

    constructor(args?: { atomId: string; atomType: string; });
}

declare class BlockElement {
  type: ElementType;
  assets: Asset[];
  textTypeData: TextElementFields;
  videoTypeData: VideoElementFields;
  tweetTypeData: TweetElementFields;
  imageTypeData: ImageElementFields;
  audioTypeData: AudioElementFields;
  pullquoteTypeData: PullquoteElementFields;
  interactiveTypeData: InteractiveElementFields;
  mapTypeData: StandardElementFields;
  documentTypeData: StandardElementFields;
  tableTypeData: StandardElementFields;
  witnessTypeData: WitnessElementFields;
  richLinkTypeData: RichLinkElementFields;
  membershipTypeData: MembershipElementFields;
  embedTypeData: EmbedElementFields;
  instagramTypeData: InstagramElementFields;
  commentTypeData: CommentElementFields;
  vineTypeData: VineElementFields;
  contentAtomTypeData: ContentAtomElementFields;

    constructor(args?: { type: ElementType; assets: Asset[]; textTypeData?: TextElementFields; videoTypeData?: VideoElementFields; tweetTypeData?: TweetElementFields; imageTypeData?: ImageElementFields; audioTypeData?: AudioElementFields; pullquoteTypeData?: PullquoteElementFields; interactiveTypeData?: InteractiveElementFields; mapTypeData?: StandardElementFields; documentTypeData?: StandardElementFields; tableTypeData?: StandardElementFields; witnessTypeData?: WitnessElementFields; richLinkTypeData?: RichLinkElementFields; membershipTypeData?: MembershipElementFields; embedTypeData?: EmbedElementFields; instagramTypeData?: InstagramElementFields; commentTypeData?: CommentElementFields; vineTypeData?: VineElementFields; contentAtomTypeData?: ContentAtomElementFields; });
}

declare class MembershipPlaceholder {
  campaignCode: string;

    constructor(args?: { campaignCode?: string; });
}

declare class BlockAttributes {
  keyEvent: boolean;
  summary: boolean;
  title: string;
  pinned: boolean;
  membershipPlaceholder: MembershipPlaceholder;

    constructor(args?: { keyEvent?: boolean; summary?: boolean; title?: string; pinned?: boolean; membershipPlaceholder?: MembershipPlaceholder; });
}

declare class User {
  email: string;
  firstName: string;
  lastName: string;

    constructor(args?: { email: string; firstName?: string; lastName?: string; });
}

export declare class Block {
  id: string;
  bodyHtml: string;
  bodyTextSummary: string;
  title: string;
  attributes: BlockAttributes;
  published: boolean;
  createdDate: Date;
  firstPublishedDate: Date;
  publishedDate: Date;
  lastModifiedDate: Date;
  contributors: string[];
  createdBy: User;
  lastModifiedBy: User;
  elements: BlockElement[];

    constructor(args?: { id: string; bodyHtml: string; bodyTextSummary: string; title?: string; attributes: BlockAttributes; published: boolean; createdDate?: CapiDateTime; firstPublishedDate?: CapiDateTime; publishedDate?: CapiDateTime; lastModifiedDate?: CapiDateTime; contributors: string[]; createdBy?: User; lastModifiedBy?: User; elements?: BlockElement[]; });
}

declare class Blocks {
  main: Block;
  body: Block[];
  totalBodyBlocks: number;
  requestedBodyBlocks: { [k: string]: Block[]; };

    constructor(args?: { main?: Block; body?: Block[]; totalBodyBlocks?: number; requestedBodyBlocks?: { [k: string]: Block[]; }; });
}

declare class CrosswordDimensions {
  cols: number;
  rows: number;

    constructor(args?: { cols: number; rows: number; });
}

declare class CrosswordPosition {
  x: number;
  y: number;

    constructor(args?: { x: number; y: number; });
}

declare class CrosswordCreator {
  name: string;
  webUrl: string;

    constructor(args?: { name: string; webUrl: string; });
}

declare class CrosswordEntry {
  id: string;
  number: number;
  humanNumber: string;
  direction: string;
  position: CrosswordPosition;
  separatorLocations: { [k: string]: number[]; };
  length: number;
  clue: string;
  group: string[];
  solution: string;
  format: string;

    constructor(args?: { id: string; number?: number; humanNumber?: string; direction?: string; position?: CrosswordPosition; separatorLocations?: { [k: string]: number[]; }; length?: number; clue?: string; group?: string[]; solution?: string; format?: string; });
}

declare class Crossword {
  name: string;
  type: CrosswordType;
  number: number;
  date: CapiDateTime;
  dimensions: CrosswordDimensions;
  entries: CrosswordEntry[];
  solutionAvailable: boolean;
  hasNumbers: boolean;
  randomCluesOrdering: boolean;
  instructions: string;
  creator: CrosswordCreator;
  pdf: string;
  annotatedSolution: string;
  dateSolutionAvailable: CapiDateTime;

    constructor(args?: { name: string; type: CrosswordType; number: number; date: CapiDateTime; dimensions: CrosswordDimensions; entries: CrosswordEntry[]; solutionAvailable: boolean; hasNumbers: boolean; randomCluesOrdering: boolean; instructions?: string; creator?: CrosswordCreator; pdf?: string; annotatedSolution?: string; dateSolutionAvailable?: CapiDateTime; });
}

declare class Element {
  id: string;
  relation: string;
  type: ElementType;
  galleryIndex: number;
  assets: Asset[];

    constructor(args?: { id: string; relation: string; type: ElementType; galleryIndex?: number; assets: Asset[]; });
}

declare class ContentFields {
  headline: string;
  standfirst: string;
  trailText: string;
  byline: string;
  main: string;
  body: string;
  newspaperPageNumber: number;
  starRating: number;
  contributorBio: string;
  membershipAccess: MembershipTier;
  wordcount: number;
  commentCloseDate: CapiDateTime;
  commentable: boolean;
  creationDate: CapiDateTime;
  displayHint: string;
  firstPublicationDate: CapiDateTime;
  hasStoryPackage: boolean;
  internalComposerCode: string;
  internalOctopusCode: string;
  internalPageCode: number;
  internalStoryPackageCode: number;
  isInappropriateForSponsorship: boolean;
  isPremoderated: boolean;
  lastModified: CapiDateTime;
  liveBloggingNow: boolean;
  newspaperEditionDate: CapiDateTime;
  productionOffice: Office;
  publication: string;
  scheduledPublicationDate: CapiDateTime;
  secureThumbnail: string;
  shortUrl: string;
  shouldHideAdverts: boolean;
  showInRelatedContent: boolean;
  thumbnail: string;
  legallySensitive: boolean;
  allowUgc: boolean;
  sensitive: boolean;
  lang: string;
  internalRevision: number;
  internalContentCode: number;
  isLive: boolean;
  internalShortId: string;
  shortSocialShareText: string;
  socialShareText: string;
  bodyText: string;
  charCount: number;
  internalVideoCode: string;
  shouldHideReaderRevenue: boolean;
  internalCommissionedWordcount: number;
  showAffiliateLinks: boolean;
  bylineHtml: string;

    constructor(args?: { headline?: string; standfirst?: string; trailText?: string; byline?: string; main?: string; body?: string; newspaperPageNumber?: number; starRating?: number; contributorBio?: string; membershipAccess?: MembershipTier; wordcount?: number; commentCloseDate?: CapiDateTime; commentable?: boolean; creationDate?: CapiDateTime; displayHint?: string; firstPublicationDate?: CapiDateTime; hasStoryPackage?: boolean; internalComposerCode?: string; internalOctopusCode?: string; internalPageCode?: number; internalStoryPackageCode?: number; isInappropriateForSponsorship?: boolean; isPremoderated?: boolean; lastModified?: CapiDateTime; liveBloggingNow?: boolean; newspaperEditionDate?: CapiDateTime; productionOffice?: Office; publication?: string; scheduledPublicationDate?: CapiDateTime; secureThumbnail?: string; shortUrl?: string; shouldHideAdverts?: boolean; showInRelatedContent?: boolean; thumbnail?: string; legallySensitive?: boolean; allowUgc?: boolean; sensitive?: boolean; lang?: string; internalRevision?: number; internalContentCode?: number; isLive?: boolean; internalShortId?: string; shortSocialShareText?: string; socialShareText?: string; bodyText?: string; charCount?: number; internalVideoCode?: string; shouldHideReaderRevenue?: boolean; internalCommissionedWordcount?: number; showAffiliateLinks?: boolean; bylineHtml?: string; });
}

declare class Reference {
  id: string;
  type: string;

    constructor(args?: { id: string; type: string; });
}

declare class PodcastCategory {
  main: string;
  sub: string;

    constructor(args?: { main: string; sub?: string; });
}

declare class Podcast {
  linkUrl: string;
  copyright: string;
  author: string;
  subscriptionUrl: string;
  explicit: boolean;
  image: string;
  categories: PodcastCategory[];
  podcastType: string;
  googlePodcastsUrl: string;
  spotifyUrl: string;

    constructor(args?: { linkUrl: string; copyright: string; author: string; subscriptionUrl?: string; explicit: boolean; image?: string; categories?: PodcastCategory[]; podcastType?: string; googlePodcastsUrl?: string; spotifyUrl?: string; });
}

export declare class Tag {
  id: string;
  type: TagType;
  sectionId: string;
  sectionName: string;
  webTitle: string;
  webUrl: string;
  apiUrl: string;
  references: Reference[];
  description: string;
  bio: string;
  bylineImageUrl: string;
  bylineLargeImageUrl: string;
  podcast: Podcast;
  firstName: string;
  lastName: string;
  emailAddress: string;
  twitterHandle: string;
  activeSponsorships: Sponsorship[];
  paidContentType: string;
  paidContentCampaignColour: string;
  rcsId: string;
  r2ContributorId: string;
  tagCategories: string[];
  entityIds: string[];
  campaignInformationType: string;
  internalName: string;

    constructor(args?: { id: string; type: TagType; sectionId?: string; sectionName?: string; webTitle: string; webUrl: string; apiUrl: string; references: Reference[]; description?: string; bio?: string; bylineImageUrl?: string; bylineLargeImageUrl?: string; podcast?: Podcast; firstName?: string; lastName?: string; emailAddress?: string; twitterHandle?: string; activeSponsorships?: Sponsorship[]; paidContentType?: string; paidContentCampaignColour?: string; rcsId?: string; r2ContributorId?: string; tagCategories?: string[]; entityIds?: string[]; campaignInformationType?: string; internalName?: string; });
}

declare class Edition {
  id: string;
  webTitle: string;
  webUrl: string;
  apiUrl: string;
  code: string;

    constructor(args?: { id: string; webTitle: string; webUrl: string; apiUrl: string; code: string; });
}

declare class Section {
  id: string;
  webTitle: string;
  webUrl: string;
  apiUrl: string;
  editions: Edition[];
  activeSponsorships: Sponsorship[];

    constructor(args?: { id: string; webTitle: string; webUrl: string; apiUrl: string; editions: Edition[]; activeSponsorships?: Sponsorship[]; });
}

declare class ContentStats {
  videos: number;
  images: number;
  text: number;
  tweets: number;
  pullquotes: number;
  audio: number;
  interactives: number;
  witness: number;
  richlinks: number;
  membership: number;
  embeds: number;
  comments: number;
  instagram: number;
  vines: number;

    constructor(args?: { videos: number; images: number; text: number; tweets: number; pullquotes: number; audio: number; interactives: number; witness: number; richlinks: number; membership: number; embeds: number; comments: number; instagram: number; vines: number; });
}

declare class Debug {
  lastSeenByPorterAt: CapiDateTime;
  revisionSeenByPorter: number;
  contentSource: string;
  originatingSystem: string;

    constructor(args?: { lastSeenByPorterAt?: CapiDateTime; revisionSeenByPorter?: number; contentSource?: string; originatingSystem?: string; });
}

export declare class Content {
  id: string;
  type: ContentType;
  sectionId: string;
  sectionName: string;
  webPublicationDate: CapiDateTime;
  webTitle: string;
  webUrl: string;
  apiUrl: string;
  fields: ContentFields;
  tags: Tag[];
  elements: Element[];
  references: Reference[];
  isExpired: boolean;
  blocks: Blocks;
  rights: Rights;
  crossword: Crossword;
  stats: ContentStats;
  section: Section;
  debug: Debug;
  isGone: boolean;
  isHosted: boolean;
  pillarId: string;
  pillarName: string;

    constructor(args?: { id: string; type?: ContentType; sectionId?: string; sectionName?: string; webPublicationDate?: CapiDateTime; webTitle: string; webUrl: string; apiUrl: string; fields?: ContentFields; tags?: Tag[]; elements?: Element[]; references?: Reference[]; isExpired?: boolean; blocks?: Blocks; rights?: Rights; crossword?: Crossword; stats?: ContentStats; section?: Section; debug?: Debug; isGone?: boolean; isHosted?: boolean; pillarId?: string; pillarName?: string; });
}

/* declare class NetworkFront {
  id: string;
  path: string;
  edition: string;
  webTitle: string;
  webUrl: string;
  apiUrl: string;

    constructor(args?: { id: string; path: string; edition: string; webTitle: string; webUrl: string; apiUrl: string; });
} */

/* declare class Package {
  packageId: string;
  packageName: string;
  lastModified: CapiDateTime;

    constructor(args?: { packageId: string; packageName: string; lastModified: CapiDateTime; });
} */

/* declare class MostViewedVideo {
  id: string;
  count: number;

    constructor(args?: { id: string; count: number; });
} */

/* declare class Pillar {
  id: string;
  name: string;
  sectionIds: string[];

    constructor(args?: { id: string; name: string; sectionIds: string[]; });
} */

/* declare class RemovedContent {
  id: string;
  lastModified: CapiDateTime;

    constructor(args?: { id: string; lastModified: CapiDateTime; });
} */

/* declare class SearchResponse {
  status: string;
  userTier: string;
  total: number;
  startIndex: number;
  pageSize: number;
  currentPage: number;
  pages: number;
  orderBy: string;
  results: Content[];

    constructor(args?: { status: string; userTier: string; total: number; startIndex: number; pageSize: number; currentPage: number; pages: number; orderBy: string; results: Content[]; });
} */

/* declare class ItemResponse {
  status: string;
  userTier: string;
  total: number;
  startIndex: number;
  pageSize: number;
  currentPage: number;
  pages: number;
  orderBy: string;
  content: Content;
  tag: Tag;
  edition: Edition;
  section: Section;
  results: Content[];
  relatedContent: Content[];
  storyPackage: Content[];
  editorsPicks: Content[];
  mostViewed: Content[];
  leadContent: Content[];
  packages: Package[];

    constructor(args?: { status: string; userTier: string; total?: number; startIndex?: number; pageSize?: number; currentPage?: number; pages?: number; orderBy?: string; content?: Content; tag?: Tag; edition?: Edition; section?: Section; results?: Content[]; relatedContent?: Content[]; storyPackage?: Content[]; editorsPicks?: Content[]; mostViewed?: Content[]; leadContent?: Content[]; packages?: Package[]; });
} */ 

/**
 * Viewpoints are deprecated
 */
/* declare class TagsResponse {
  status: string;
  userTier: string;
  total: number;
  startIndex: number;
  pageSize: number;
  currentPage: number;
  pages: number;
  results: Tag[];

    constructor(args?: { status: string; userTier: string; total: number; startIndex: number; pageSize: number; currentPage: number; pages: number; results: Tag[]; });
} */

/* declare class SectionsResponse {
  status: string;
  userTier: string;
  total: number;
  results: Section[];

    constructor(args?: { status: string; userTier: string; total: number; results: Section[]; });
} */

/* declare class EditionsResponse {
  status: string;
  userTier: string;
  total: number;
  results: NetworkFront[];

    constructor(args?: { status: string; userTier: string; total: number; results: NetworkFront[]; });
} */

/* declare class AtomsResponse {
  status: string;
  userTier: string;
  total: number;
  startIndex: number;
  pageSize: number;
  currentPage: number;
  pages: number;

    constructor(args?: { status: string; userTier: string; total: number; startIndex: number; pageSize: number; currentPage: number; pages: number; });
} */

/* declare class PackagesResponse {
  status: string;
  userTier: string;
  total: number;
  startIndex: number;
  pageSize: number;
  currentPage: number;
  pages: number;
  orderBy: string;
  results: Package[];

    constructor(args?: { status: string; userTier: string; total: number; startIndex: number; pageSize: number; currentPage: number; pages: number; orderBy: string; results: Package[]; });
} */

/* declare class RemovedContentResponse {
  status: string;
  userTier: string;
  total: number;
  startIndex: number;
  pageSize: number;
  currentPage: number;
  pages: number;
  orderBy: string;
  results: string[];
  resultsWithLastModified: RemovedContent[];

    constructor(args?: { status: string; userTier: string; total: number; startIndex: number; pageSize: number; currentPage: number; pages: number; orderBy: string; results: string[]; resultsWithLastModified?: RemovedContent[]; });
} */

/* declare class ErrorResponse {
  status: string;
  message: string;

    constructor(args?: { status: string; message: string; });
} */

/* declare class VideoStatsResponse {
  status: string;
  mostViewedVideos: MostViewedVideo[];

    constructor(args?: { status: string; mostViewedVideos: MostViewedVideo[]; });
} */

/* declare class AtomUsageResponse {
  status: string;
  userTier: string;
  total: number;
  startIndex: number;
  pageSize: number;
  currentPage: number;
  pages: number;
  results: string[];

    constructor(args?: { status: string; userTier: string; total: number; startIndex: number; pageSize: number; currentPage: number; pages: number; results: string[]; });
} */

/* declare class EntitiesResponse {
  status: string;
  total: number;

    constructor(args?: { status: string; total: number; });
} */

/* declare class PathAndStoryQuestionsAtomId {
  path: string;
  storyQuestionsAtomId: string;

    constructor(args?: { path: string; storyQuestionsAtomId: string; });
} */

/* declare class OphanStoryQuestionsResponse {
  status: string;
  pathToAtomIds: PathAndStoryQuestionsAtomId[];

    constructor(args?: { status: string; pathToAtomIds: PathAndStoryQuestionsAtomId[]; });
} */

/* declare class PillarsResponse {
  status: string;
  total: number;
  results: Pillar[];

    constructor(args?: { status: string; total: number; results: Pillar[]; });
} */
