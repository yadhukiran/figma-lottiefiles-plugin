import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
  /** Point scalar type */
  Point: any;
};

export type Animation = {
  __typename?: 'Animation';
  bgColor?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  createdBy: User;
  gifFileSize?: Maybe<Scalars['String']>;
  gifUrl?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  imageFileSize?: Maybe<Scalars['Int']>;
  imageFrame?: Maybe<Scalars['String']>;
  imageUrl?: Maybe<Scalars['String']>;
  lottieFileSize?: Maybe<Scalars['Int']>;
  lottieFileType?: Maybe<Scalars['String']>;
  lottieUrl?: Maybe<Scalars['String']>;
  lottieVersion?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  speed?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedBy: User;
  url?: Maybe<Scalars['String']>;
  videoFileSize?: Maybe<Scalars['Int']>;
  videoUrl?: Maybe<Scalars['String']>;
};

export type AnimationUpload = {
  __typename?: 'AnimationUpload';
  bgColor?: Maybe<Scalars['String']>;
  hash: Scalars['String'];
  message: Scalars['String'];
  signedUrl: Scalars['String'];
  status: Scalars['String'];
};

export type Animator = {
  __typename?: 'Animator';
  avatarUrl?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  url: Scalars['String'];
};

export type AnimatorListing = {
  __typename?: 'AnimatorListing';
  results?: Maybe<Array<Animator>>;
};

export type Authentication = {
  __typename?: 'Authentication';
  accessToken: Scalars['String'];
  expiresAt: Scalars['DateTime'];
  tokenType: Scalars['String'];
};

export type Blog = {
  __typename?: 'Blog';
  category?: Maybe<BlogCategory>;
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  imageUrl: Scalars['String'];
  link: Scalars['String'];
  postedAt: Scalars['DateTime'];
  slug: Scalars['String'];
  title: Scalars['String'];
};

export type BlogCategory = {
  __typename?: 'BlogCategory';
  id: Scalars['String'];
  name: Scalars['String'];
  slug: Scalars['String'];
};

export type BlogListing = {
  __typename?: 'BlogListing';
  currentPage: Scalars['Int'];
  from?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  results?: Maybe<Array<Blog>>;
  to?: Maybe<Scalars['Int']>;
  total: Scalars['Int'];
  totalPages: Scalars['Int'];
};

export type Collection = {
  __typename?: 'Collection';
  animations: CollectionAnimationListing;
  animationsCount: Scalars['Int'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  imageUrl?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  title: Scalars['String'];
};


export type CollectionAnimationsArgs = {
  page?: InputMaybe<Scalars['Float']>;
  pageSize?: InputMaybe<Scalars['Float']>;
};

export type CollectionAnimationListing = {
  __typename?: 'CollectionAnimationListing';
  currentPage: Scalars['Int'];
  from?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  results: Array<PublicAnimation>;
  to?: Maybe<Scalars['Int']>;
  total: Scalars['Int'];
  totalPages: Scalars['Int'];
};

export type CollectionListing = {
  __typename?: 'CollectionListing';
  currentPage: Scalars['Int'];
  from?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  results?: Maybe<Array<Collection>>;
  to?: Maybe<Scalars['Int']>;
  total: Scalars['Int'];
  totalPages: Scalars['Int'];
};

export type Comment = {
  __typename?: 'Comment';
  animation: ProjectAnimation;
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  frame?: Maybe<Scalars['Float']>;
  id: Scalars['Int'];
  isResolved: Scalars['Boolean'];
  marker?: Maybe<Scalars['Point']>;
  parentId?: Maybe<Scalars['Float']>;
  replies?: Maybe<Array<Comment>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: User;
};

/** Complaint types for report animation */
export enum ComplaintType {
  GuidelinesViolation = 'GUIDELINES_VIOLATION',
  Other = 'OTHER',
  Plagiarism = 'PLAGIARISM'
}

/** Contract types for hire requests */
export enum ContractType {
  Freelance = 'FREELANCE',
  Fulltime = 'FULLTIME'
}

export type HitCountEvent = {
  __typename?: 'HitCountEvent';
  errors: Array<Scalars['String']>;
  message: Scalars['String'];
  status: Scalars['String'];
};

export type LoginToken = {
  __typename?: 'LoginToken';
  loginUrl: Scalars['String'];
  token: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addAnimationToProject: ProjectAnimation;
  addPublicCollectionAnimation: Collection;
  createComment: Comment;
  createCommentReply: Comment;
  createHitCountEvent: HitCountEvent;
  createLoginToken: LoginToken;
  createPublicAnimationComment: Comment;
  createPublicAnimationCommentReply: Comment;
  createPublicCollection: CollectionListing;
  createTestDevice: TestDevice;
  deletePreview: PreviewDeleteResponse;
  deletePublicCollection: Scalars['Boolean'];
  deletePublicCollectionAnimation: Scalars['Boolean'];
  isUsernameAvailable: Scalars['Boolean'];
  keyLogin: Authentication;
  likePublicAnimation: PublicAnimation;
  /** @deprecated Use another login method instead. */
  login: Authentication;
  logout: Scalars['Boolean'];
  otpLogin: Authentication;
  passwordLogin: Authentication;
  processUserProfilePhotoUpload: Scalars['Boolean'];
  register: Authentication;
  reportAnimation: Scalars['Boolean'];
  requestHire: Scalars['Boolean'];
  resetPassword: Scalars['Boolean'];
  resolveComment: Comment;
  setUserSegments: Scalars['Boolean'];
  socialLogin: Authentication;
  test: TestAnimation;
  tokenLogin: Authentication;
  unlikePublicAnimation: PublicAnimation;
  updatePublicCollection: CollectionListing;
  updateUser: User;
  uploadPreviewAnimation: PreviewAnimationUpload;
  uploadPreviewAnimationProgress: Scalars['Boolean'];
  uploadProfilePhoto: UserProfilePhotoUpload;
  uploadProjectAnimation: ProjectAnimationUpload;
  uploadProjectAnimationProgress: Scalars['Boolean'];
};


export type MutationAddAnimationToProjectArgs = {
  animationId: Scalars['Float'];
  projectId: Scalars['Float'];
};


export type MutationAddPublicCollectionAnimationArgs = {
  animationId: Scalars['Float'];
  collectionId: Scalars['Float'];
};


export type MutationCreateCommentArgs = {
  animationId: Scalars['Float'];
  content: Scalars['String'];
  frame: Scalars['Float'];
  marker?: InputMaybe<Scalars['String']>;
};


export type MutationCreateCommentReplyArgs = {
  commentId: Scalars['Float'];
  content: Scalars['String'];
};


export type MutationCreateHitCountEventArgs = {
  ip?: InputMaybe<Scalars['String']>;
  method: Scalars['Float'];
  resourceId: Scalars['Float'];
  source?: InputMaybe<Scalars['Float']>;
  userId?: InputMaybe<Scalars['Float']>;
  visitorId?: InputMaybe<Scalars['Float']>;
};


export type MutationCreateLoginTokenArgs = {
  appKey?: InputMaybe<Scalars['String']>;
};


export type MutationCreatePublicAnimationCommentArgs = {
  animationId: Scalars['Float'];
  content: Scalars['String'];
  frame: Scalars['Float'];
  marker?: InputMaybe<Scalars['String']>;
};


export type MutationCreatePublicAnimationCommentReplyArgs = {
  commentId: Scalars['Float'];
  content: Scalars['String'];
};


export type MutationCreatePublicCollectionArgs = {
  title: Scalars['String'];
};


export type MutationCreateTestDeviceArgs = {
  identifier: Scalars['String'];
  model: Scalars['String'];
  os: Scalars['String'];
};


export type MutationDeletePreviewArgs = {
  id: Scalars['Float'];
};


export type MutationDeletePublicCollectionArgs = {
  collectionId: Scalars['Float'];
};


export type MutationDeletePublicCollectionAnimationArgs = {
  animationIds: Scalars['String'];
  collectionId: Scalars['Float'];
};


export type MutationIsUsernameAvailableArgs = {
  username: Scalars['String'];
};


export type MutationKeyLoginArgs = {
  key: Scalars['String'];
  secret: Scalars['String'];
};


export type MutationLikePublicAnimationArgs = {
  id: Scalars['Float'];
};


export type MutationLoginArgs = {
  code: Scalars['String'];
};


export type MutationOtpLoginArgs = {
  code: Scalars['String'];
};


export type MutationPasswordLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationProcessUserProfilePhotoUploadArgs = {
  filename: Scalars['String'];
  signedUrl: Scalars['String'];
};


export type MutationRegisterArgs = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};


export type MutationReportAnimationArgs = {
  input: ReportAnimationInput;
};


export type MutationRequestHireArgs = {
  input: RequestHireInput;
};


export type MutationResetPasswordArgs = {
  email: Scalars['String'];
};


export type MutationResolveCommentArgs = {
  id: Scalars['Float'];
};


export type MutationSetUserSegmentsArgs = {
  segmentIds: Scalars['String'];
  segmentOtherDescription?: InputMaybe<Scalars['String']>;
};


export type MutationSocialLoginArgs = {
  accessSecret?: InputMaybe<Scalars['String']>;
  accessToken?: InputMaybe<Scalars['String']>;
  clientId: Scalars['String'];
  clientSecret: Scalars['String'];
  idToken?: InputMaybe<Scalars['String']>;
  provider: Scalars['String'];
};


export type MutationTestArgs = {
  data: Scalars['String'];
  deviceId: Scalars['String'];
};


export type MutationTokenLoginArgs = {
  token: Scalars['String'];
};


export type MutationUnlikePublicAnimationArgs = {
  id: Scalars['Float'];
};


export type MutationUpdatePublicCollectionArgs = {
  collectionId: Scalars['Float'];
  title: Scalars['String'];
};


export type MutationUpdateUserArgs = {
  behanceUsername?: InputMaybe<Scalars['String']>;
  bio?: InputMaybe<Scalars['String']>;
  dribbbleUsername?: InputMaybe<Scalars['String']>;
  instagramUsername?: InputMaybe<Scalars['String']>;
  isHireable?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  twitterUsername?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};


export type MutationUploadPreviewAnimationArgs = {
  bgColor: Scalars['String'];
  extension: Scalars['String'];
};


export type MutationUploadPreviewAnimationProgressArgs = {
  hash: Scalars['String'];
  progress: Scalars['Float'];
  signedUrl: Scalars['String'];
};


export type MutationUploadProfilePhotoArgs = {
  extension: Scalars['String'];
};


export type MutationUploadProjectAnimationArgs = {
  animationId?: InputMaybe<Scalars['Float']>;
  bgColor: Scalars['String'];
  extension: Scalars['String'];
  projectId: Scalars['Float'];
  title: Scalars['String'];
};


export type MutationUploadProjectAnimationProgressArgs = {
  animationId: Scalars['Float'];
  progress: Scalars['Float'];
  signedUrl: Scalars['String'];
};

export type Notification = {
  __typename?: 'Notification';
  link?: Maybe<Scalars['String']>;
  message: Scalars['String'];
  theme?: Maybe<Theme>;
};

export type PreviewAnimation = {
  __typename?: 'PreviewAnimation';
  bgColor?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  createdBy: User;
  gifFileSize?: Maybe<Scalars['String']>;
  gifUrl?: Maybe<Scalars['String']>;
  handoffEnabled?: Maybe<Scalars['Boolean']>;
  id: Scalars['Int'];
  imageFileSize?: Maybe<Scalars['Int']>;
  imageFrame?: Maybe<Scalars['String']>;
  imageUrl?: Maybe<Scalars['String']>;
  lottieFileSize?: Maybe<Scalars['Int']>;
  lottieFileType?: Maybe<Scalars['String']>;
  lottieUrl?: Maybe<Scalars['String']>;
  lottieVersion?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  settings?: Maybe<Scalars['String']>;
  speed?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedBy: User;
  uploadProgress?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
  videoFileSize?: Maybe<Scalars['Int']>;
  videoUrl?: Maybe<Scalars['String']>;
};

export type PreviewAnimationListing = {
  __typename?: 'PreviewAnimationListing';
  currentPage: Scalars['Int'];
  from?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  results?: Maybe<Array<PreviewAnimation>>;
  to?: Maybe<Scalars['Int']>;
  total: Scalars['Int'];
  totalPages: Scalars['Int'];
};

export type PreviewAnimationUpload = {
  __typename?: 'PreviewAnimationUpload';
  animation: PreviewAnimation;
  bgColor?: Maybe<Scalars['String']>;
  hash: Scalars['String'];
  message: Scalars['String'];
  signedUrl: Scalars['String'];
  status: Scalars['String'];
};

export type PreviewDeleteResponse = {
  __typename?: 'PreviewDeleteResponse';
  message: Scalars['String'];
  success: Scalars['Boolean'];
};

export type Project = {
  __typename?: 'Project';
  animations: Array<ProjectAnimation>;
  animationsCount: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  createdBy: User;
  id: Scalars['Int'];
  name: Scalars['String'];
  slug: Scalars['String'];
  thumbnailColor: Scalars['String'];
  thumbnailIcon: Scalars['String'];
  type: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedBy: User;
  url: Scalars['String'];
};

export type ProjectAnimation = {
  __typename?: 'ProjectAnimation';
  bgColor?: Maybe<Scalars['String']>;
  comments?: Maybe<Array<Comment>>;
  createdAt: Scalars['DateTime'];
  createdBy: User;
  description?: Maybe<Scalars['String']>;
  gifFileSize?: Maybe<Scalars['String']>;
  gifUrl?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  imageFileSize?: Maybe<Scalars['Int']>;
  imageFrame?: Maybe<Scalars['String']>;
  imageUrl?: Maybe<Scalars['String']>;
  lottieFileSize?: Maybe<Scalars['Int']>;
  lottieFileType?: Maybe<Scalars['String']>;
  lottieUrl?: Maybe<Scalars['String']>;
  lottieVersion?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  nextVersion: ProjectAnimation;
  previousVersion: ProjectAnimation;
  project: Project;
  publishedAt?: Maybe<Scalars['DateTime']>;
  settings?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  sourceFileName?: Maybe<Scalars['String']>;
  sourceFileSize?: Maybe<Scalars['Int']>;
  sourceFileType?: Maybe<Scalars['String']>;
  sourceFileUrl?: Maybe<Scalars['String']>;
  sourceName?: Maybe<Scalars['String']>;
  sourceVersion?: Maybe<Scalars['String']>;
  speed?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedBy: User;
  uploadProgress?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
  versionId: Scalars['Int'];
  versions?: Maybe<Array<ProjectAnimation>>;
  videoFileSize?: Maybe<Scalars['Int']>;
  videoUrl?: Maybe<Scalars['String']>;
};

export type ProjectAnimationUpload = {
  __typename?: 'ProjectAnimationUpload';
  animation: ProjectAnimation;
  bgColor?: Maybe<Scalars['String']>;
  hash: Scalars['String'];
  message: Scalars['String'];
  project: Project;
  signedUrl: Scalars['String'];
  status: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  versionId: Scalars['Int'];
};

export type PublicAnimation = {
  __typename?: 'PublicAnimation';
  bgColor?: Maybe<Scalars['String']>;
  comments?: Maybe<Array<Comment>>;
  commentsCount: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  createdBy: User;
  description?: Maybe<Scalars['String']>;
  downloads?: Maybe<Scalars['Float']>;
  gifFileSize?: Maybe<Scalars['String']>;
  gifUrl?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  imageFileSize?: Maybe<Scalars['Int']>;
  imageFrame?: Maybe<Scalars['String']>;
  imageUrl?: Maybe<Scalars['String']>;
  isLiked: Scalars['Boolean'];
  likesCount: Scalars['Int'];
  lottieFileSize?: Maybe<Scalars['Int']>;
  lottieFileType?: Maybe<Scalars['String']>;
  lottieUrl?: Maybe<Scalars['String']>;
  lottieVersion?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  slug: Scalars['String'];
  sourceFileName?: Maybe<Scalars['String']>;
  sourceFileSize?: Maybe<Scalars['Int']>;
  sourceFileType?: Maybe<Scalars['String']>;
  sourceFileUrl?: Maybe<Scalars['String']>;
  sourceName?: Maybe<Scalars['String']>;
  sourceVersion?: Maybe<Scalars['String']>;
  speed?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedBy: User;
  url?: Maybe<Scalars['String']>;
  videoFileSize?: Maybe<Scalars['Int']>;
  videoUrl?: Maybe<Scalars['String']>;
};

export type PublicAnimationListing = {
  __typename?: 'PublicAnimationListing';
  currentPage: Scalars['Int'];
  from?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  query?: Maybe<Scalars['String']>;
  results?: Maybe<Array<PublicAnimation>>;
  to?: Maybe<Scalars['Int']>;
  total: Scalars['Int'];
  totalPages: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  blogs: BlogListing;
  contributions: PublicAnimationListing;
  downloads: PublicAnimationListing;
  featured: PublicAnimationListing;
  featuredAnimators: AnimatorListing;
  featuredToday: PublicAnimation;
  likes: PublicAnimationListing;
  notifications?: Maybe<Array<Notification>>;
  popular: PublicAnimationListing;
  previewAnimation?: Maybe<PreviewAnimation>;
  previews: PreviewAnimationListing;
  project?: Maybe<Project>;
  projectAnimation?: Maybe<ProjectAnimation>;
  projects: Array<Project>;
  publicAnimation?: Maybe<PublicAnimation>;
  publicCollection: Collection;
  publicCollections: CollectionListing;
  purchases: PublicAnimationListing;
  recent: PublicAnimationListing;
  search: PublicAnimationListing;
  softwareUpdates: SoftwareUpdate;
  testDevices: Array<TestDevice>;
  testStatus: TestAnimation;
  trendingSearches: Array<TrendingItem>;
  user?: Maybe<User>;
  userSegments?: Maybe<UserSegmentListing>;
  viewer: User;
};


export type QueryBlogsArgs = {
  page?: InputMaybe<Scalars['Float']>;
  pageSize?: InputMaybe<Scalars['Float']>;
};


export type QueryContributionsArgs = {
  page?: InputMaybe<Scalars['Float']>;
};


export type QueryDownloadsArgs = {
  page?: InputMaybe<Scalars['Float']>;
  pageSize?: InputMaybe<Scalars['Float']>;
};


export type QueryFeaturedArgs = {
  page?: InputMaybe<Scalars['Float']>;
};


export type QueryLikesArgs = {
  page?: InputMaybe<Scalars['Float']>;
  pageSize?: InputMaybe<Scalars['Float']>;
};


export type QueryPopularArgs = {
  page?: InputMaybe<Scalars['Float']>;
};


export type QueryPreviewAnimationArgs = {
  id: Scalars['Float'];
};


export type QueryPreviewsArgs = {
  page?: InputMaybe<Scalars['Float']>;
  pageSize?: InputMaybe<Scalars['Float']>;
};


export type QueryProjectArgs = {
  id: Scalars['Float'];
};


export type QueryProjectAnimationArgs = {
  id: Scalars['Float'];
  version?: InputMaybe<Scalars['Float']>;
};


export type QueryPublicAnimationArgs = {
  id: Scalars['Float'];
};


export type QueryPublicCollectionArgs = {
  id: Scalars['Float'];
};


export type QueryPublicCollectionsArgs = {
  page?: InputMaybe<Scalars['Float']>;
  pageSize?: InputMaybe<Scalars['Float']>;
};


export type QueryPurchasesArgs = {
  page?: InputMaybe<Scalars['Float']>;
  pageSize?: InputMaybe<Scalars['Float']>;
};


export type QueryRecentArgs = {
  page?: InputMaybe<Scalars['Float']>;
};


export type QuerySearchArgs = {
  page?: InputMaybe<Scalars['Float']>;
  pageSize?: InputMaybe<Scalars['Float']>;
  query: Scalars['String'];
  withAep?: InputMaybe<Scalars['Boolean']>;
};


export type QuerySoftwareUpdatesArgs = {
  app: Scalars['String'];
  version?: InputMaybe<Scalars['String']>;
};


export type QueryTestStatusArgs = {
  testId: Scalars['String'];
};


export type QueryUserArgs = {
  id: Scalars['Float'];
};

export type ReportAnimationInput = {
  animationId: Scalars['Float'];
  body?: InputMaybe<Scalars['String']>;
  complaintType: ComplaintType;
  url?: InputMaybe<Scalars['String']>;
};

export type RequestHireInput = {
  brief: Scalars['String'];
  contractType: ContractType;
  deadlineAt: Scalars['DateTime'];
  shouldCopyEmail: Scalars['Boolean'];
  subject: Scalars['String'];
  userId: Scalars['Float'];
};

export type SoftwareUpdate = {
  __typename?: 'SoftwareUpdate';
  autoUpdate: Scalars['Boolean'];
  changelog?: Maybe<Scalars['String']>;
  downloadUrl?: Maybe<Scalars['String']>;
  forceUpdate: Scalars['Boolean'];
  infoUrl?: Maybe<Scalars['String']>;
  version: Scalars['String'];
};

export type TestAnimation = {
  __typename?: 'TestAnimation';
  animationUrl: Scalars['String'];
  completedAt?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deviceId: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  status: Scalars['Int'];
};

export type TestDevice = {
  __typename?: 'TestDevice';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  model: Scalars['String'];
  name: Scalars['String'];
  os: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  user: User;
};

export type Theme = {
  __typename?: 'Theme';
  dark?: Maybe<ThemeColor>;
  light?: Maybe<ThemeColor>;
};

export type ThemeColor = {
  __typename?: 'ThemeColor';
  bgColor?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  textColor?: Maybe<Scalars['String']>;
};

export type TrendingItem = {
  __typename?: 'TrendingItem';
  link: Scalars['String'];
  rank: Scalars['Float'];
  title: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  animations: PublicAnimationListing;
  avatarUrl?: Maybe<Scalars['String']>;
  behanceUsername?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  dribbbleUsername?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  instagramUsername?: Maybe<Scalars['String']>;
  isHireable: Scalars['Boolean'];
  isPro: Scalars['Boolean'];
  location?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  projects?: Maybe<Array<Project>>;
  stats?: Maybe<UserStats>;
  twitterUsername?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** @deprecated Use `username` instead */
  url: Scalars['String'];
  username: Scalars['String'];
};


export type UserAnimationsArgs = {
  page?: InputMaybe<Scalars['Float']>;
  pageSize?: InputMaybe<Scalars['Float']>;
};

export type UserProfilePhotoUpload = {
  __typename?: 'UserProfilePhotoUpload';
  filename: Scalars['String'];
  signedUrl: Scalars['String'];
  status: Scalars['String'];
};

export type UserSegment = {
  __typename?: 'UserSegment';
  description: Scalars['String'];
  id: Scalars['Int'];
  title: Scalars['String'];
};

export type UserSegmentListing = {
  __typename?: 'UserSegmentListing';
  segments?: Maybe<Array<UserSegment>>;
};

export type UserStats = {
  __typename?: 'UserStats';
  downloads: Scalars['Int'];
  downloadsLastMonth: Scalars['Int'];
  likes: Scalars['Int'];
  likesLastMonth: Scalars['Int'];
  profileViews: Scalars['Int'];
  profileViewsLastMonth: Scalars['Int'];
};

export type CreateLoginTokenMutationVariables = Exact<{
  appKey: Scalars['String'];
}>;


export type CreateLoginTokenMutation = { __typename?: 'Mutation', createLoginToken: { __typename?: 'LoginToken', token: string, loginUrl: string } };

export type TokenLoginMutationVariables = Exact<{
  token: Scalars['String'];
}>;


export type TokenLoginMutation = { __typename?: 'Mutation', tokenLogin: { __typename?: 'Authentication', accessToken: string, expiresAt: any } };

export type FeaturedQueryVariables = Exact<{
  page: Scalars['Float'];
}>;


export type FeaturedQuery = { __typename?: 'Query', featured: { __typename: 'PublicAnimationListing', totalPages: number, currentPage: number, results?: Array<{ __typename: 'PublicAnimation', id: number, name: string, downloads?: number | null, lottieVersion?: string | null, lottieUrl?: string | null, slug: string, gifUrl?: string | null, bgColor?: string | null, imageUrl?: string | null, videoUrl?: string | null, createdAt: any, updatedAt?: any | null, createdBy: { __typename: 'User', id: number, name: string, avatarUrl?: string | null, url: string } }> | null } };

export type SearchResultsQueryVariables = Exact<{
  query: Scalars['String'];
  page: Scalars['Float'];
  pageSize: Scalars['Float'];
}>;


export type SearchResultsQuery = { __typename?: 'Query', search: { __typename: 'PublicAnimationListing', from?: number | null, to?: number | null, total: number, totalPages: number, currentPage: number, results?: Array<{ __typename: 'PublicAnimation', id: number, name: string, downloads?: number | null, lottieVersion?: string | null, sourceFileUrl?: string | null, url?: string | null, slug: string, lottieUrl?: string | null, gifUrl?: string | null, bgColor?: string | null, imageUrl?: string | null, videoUrl?: string | null, createdAt: any, updatedAt?: any | null, createdBy: { __typename: 'User', id: number, name: string, avatarUrl?: string | null } }> | null } };


export const CreateLoginTokenDocument = gql`
    mutation CreateLoginToken($appKey: String!) {
  createLoginToken(appKey: $appKey) {
    token
    loginUrl
  }
}
    `;

export function useCreateLoginTokenMutation() {
  return Urql.useMutation<CreateLoginTokenMutation, CreateLoginTokenMutationVariables>(CreateLoginTokenDocument);
};
export const TokenLoginDocument = gql`
    mutation TokenLogin($token: String!) {
  tokenLogin(token: $token) {
    accessToken
    expiresAt
  }
}
    `;

export function useTokenLoginMutation() {
  return Urql.useMutation<TokenLoginMutation, TokenLoginMutationVariables>(TokenLoginDocument);
};
export const FeaturedDocument = gql`
    query Featured($page: Float!) {
  featured(page: $page) {
    totalPages
    currentPage
    results {
      id
      name
      downloads
      lottieVersion
      lottieUrl
      slug
      gifUrl
      bgColor
      imageUrl
      videoUrl
      createdAt
      updatedAt
      createdBy {
        id
        name
        avatarUrl
        url
        __typename
      }
      __typename
    }
    __typename
  }
}
    `;

export function useFeaturedQuery(options: Omit<Urql.UseQueryArgs<FeaturedQueryVariables>, 'query'>) {
  return Urql.useQuery<FeaturedQuery>({ query: FeaturedDocument, ...options });
};
export const SearchResultsDocument = gql`
    query SearchResults($query: String!, $page: Float!, $pageSize: Float!) {
  search(query: $query, page: $page, pageSize: $pageSize, withAep: false) {
    from
    to
    total
    totalPages
    currentPage
    results {
      id
      name
      downloads
      lottieVersion
      sourceFileUrl
      url
      slug
      lottieUrl
      gifUrl
      bgColor
      imageUrl
      videoUrl
      createdAt
      updatedAt
      createdBy {
        id
        name
        avatarUrl
        __typename
      }
      __typename
    }
    __typename
  }
}
    `;

export function useSearchResultsQuery(options: Omit<Urql.UseQueryArgs<SearchResultsQueryVariables>, 'query'>) {
  return Urql.useQuery<SearchResultsQuery>({ query: SearchResultsDocument, ...options });
};