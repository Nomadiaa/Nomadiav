
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Destination
 * 
 */
export type Destination = $Result.DefaultSelection<Prisma.$DestinationPayload>
/**
 * Model Section
 * 
 */
export type Section = $Result.DefaultSelection<Prisma.$SectionPayload>
/**
 * Model BulletPoint
 * 
 */
export type BulletPoint = $Result.DefaultSelection<Prisma.$BulletPointPayload>
/**
 * Model GroupedBulletPoint
 * 
 */
export type GroupedBulletPoint = $Result.DefaultSelection<Prisma.$GroupedBulletPointPayload>
/**
 * Model BulletPointContent
 * 
 */
export type BulletPointContent = $Result.DefaultSelection<Prisma.$BulletPointContentPayload>
/**
 * Model Image
 * 
 */
export type Image = $Result.DefaultSelection<Prisma.$ImagePayload>
/**
 * Model Checklist
 * 
 */
export type Checklist = $Result.DefaultSelection<Prisma.$ChecklistPayload>
/**
 * Model ChecklistCategory
 * 
 */
export type ChecklistCategory = $Result.DefaultSelection<Prisma.$ChecklistCategoryPayload>
/**
 * Model ChecklistItem
 * 
 */
export type ChecklistItem = $Result.DefaultSelection<Prisma.$ChecklistItemPayload>
/**
 * Model Review
 * 
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>
/**
 * Model ReviewLike
 * 
 */
export type ReviewLike = $Result.DefaultSelection<Prisma.$ReviewLikePayload>
/**
 * Model UserVoyage
 * 
 */
export type UserVoyage = $Result.DefaultSelection<Prisma.$UserVoyagePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  user: 'user',
  admin: 'admin'
};

export type Role = (typeof Role)[keyof typeof Role]


export const SectionType: {
  GUIDE: 'GUIDE',
  PRESENTATION: 'PRESENTATION',
  ACCES: 'ACCES',
  FORMALITES: 'FORMALITES',
  CONSEILS: 'CONSEILS',
  POURQUOI: 'POURQUOI'
};

export type SectionType = (typeof SectionType)[keyof typeof SectionType]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type SectionType = $Enums.SectionType

export const SectionType: typeof $Enums.SectionType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.destination`: Exposes CRUD operations for the **Destination** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Destinations
    * const destinations = await prisma.destination.findMany()
    * ```
    */
  get destination(): Prisma.DestinationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.section`: Exposes CRUD operations for the **Section** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sections
    * const sections = await prisma.section.findMany()
    * ```
    */
  get section(): Prisma.SectionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bulletPoint`: Exposes CRUD operations for the **BulletPoint** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BulletPoints
    * const bulletPoints = await prisma.bulletPoint.findMany()
    * ```
    */
  get bulletPoint(): Prisma.BulletPointDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.groupedBulletPoint`: Exposes CRUD operations for the **GroupedBulletPoint** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GroupedBulletPoints
    * const groupedBulletPoints = await prisma.groupedBulletPoint.findMany()
    * ```
    */
  get groupedBulletPoint(): Prisma.GroupedBulletPointDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bulletPointContent`: Exposes CRUD operations for the **BulletPointContent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BulletPointContents
    * const bulletPointContents = await prisma.bulletPointContent.findMany()
    * ```
    */
  get bulletPointContent(): Prisma.BulletPointContentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.image`: Exposes CRUD operations for the **Image** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Images
    * const images = await prisma.image.findMany()
    * ```
    */
  get image(): Prisma.ImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.checklist`: Exposes CRUD operations for the **Checklist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Checklists
    * const checklists = await prisma.checklist.findMany()
    * ```
    */
  get checklist(): Prisma.ChecklistDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.checklistCategory`: Exposes CRUD operations for the **ChecklistCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChecklistCategories
    * const checklistCategories = await prisma.checklistCategory.findMany()
    * ```
    */
  get checklistCategory(): Prisma.ChecklistCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.checklistItem`: Exposes CRUD operations for the **ChecklistItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChecklistItems
    * const checklistItems = await prisma.checklistItem.findMany()
    * ```
    */
  get checklistItem(): Prisma.ChecklistItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reviewLike`: Exposes CRUD operations for the **ReviewLike** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReviewLikes
    * const reviewLikes = await prisma.reviewLike.findMany()
    * ```
    */
  get reviewLike(): Prisma.ReviewLikeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userVoyage`: Exposes CRUD operations for the **UserVoyage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserVoyages
    * const userVoyages = await prisma.userVoyage.findMany()
    * ```
    */
  get userVoyage(): Prisma.UserVoyageDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.9.0
   * Query Engine version: 81e4af48011447c3cc503a190e86995b66d2a28e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Destination: 'Destination',
    Section: 'Section',
    BulletPoint: 'BulletPoint',
    GroupedBulletPoint: 'GroupedBulletPoint',
    BulletPointContent: 'BulletPointContent',
    Image: 'Image',
    Checklist: 'Checklist',
    ChecklistCategory: 'ChecklistCategory',
    ChecklistItem: 'ChecklistItem',
    Review: 'Review',
    ReviewLike: 'ReviewLike',
    UserVoyage: 'UserVoyage'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "destination" | "section" | "bulletPoint" | "groupedBulletPoint" | "bulletPointContent" | "image" | "checklist" | "checklistCategory" | "checklistItem" | "review" | "reviewLike" | "userVoyage"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Destination: {
        payload: Prisma.$DestinationPayload<ExtArgs>
        fields: Prisma.DestinationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DestinationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DestinationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload>
          }
          findFirst: {
            args: Prisma.DestinationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DestinationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload>
          }
          findMany: {
            args: Prisma.DestinationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload>[]
          }
          create: {
            args: Prisma.DestinationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload>
          }
          createMany: {
            args: Prisma.DestinationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DestinationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload>
          }
          update: {
            args: Prisma.DestinationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload>
          }
          deleteMany: {
            args: Prisma.DestinationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DestinationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DestinationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload>
          }
          aggregate: {
            args: Prisma.DestinationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDestination>
          }
          groupBy: {
            args: Prisma.DestinationGroupByArgs<ExtArgs>
            result: $Utils.Optional<DestinationGroupByOutputType>[]
          }
          count: {
            args: Prisma.DestinationCountArgs<ExtArgs>
            result: $Utils.Optional<DestinationCountAggregateOutputType> | number
          }
        }
      }
      Section: {
        payload: Prisma.$SectionPayload<ExtArgs>
        fields: Prisma.SectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          findFirst: {
            args: Prisma.SectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          findMany: {
            args: Prisma.SectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>[]
          }
          create: {
            args: Prisma.SectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          createMany: {
            args: Prisma.SectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          update: {
            args: Prisma.SectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          deleteMany: {
            args: Prisma.SectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          aggregate: {
            args: Prisma.SectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSection>
          }
          groupBy: {
            args: Prisma.SectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SectionCountArgs<ExtArgs>
            result: $Utils.Optional<SectionCountAggregateOutputType> | number
          }
        }
      }
      BulletPoint: {
        payload: Prisma.$BulletPointPayload<ExtArgs>
        fields: Prisma.BulletPointFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BulletPointFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulletPointPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BulletPointFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulletPointPayload>
          }
          findFirst: {
            args: Prisma.BulletPointFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulletPointPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BulletPointFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulletPointPayload>
          }
          findMany: {
            args: Prisma.BulletPointFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulletPointPayload>[]
          }
          create: {
            args: Prisma.BulletPointCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulletPointPayload>
          }
          createMany: {
            args: Prisma.BulletPointCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BulletPointDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulletPointPayload>
          }
          update: {
            args: Prisma.BulletPointUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulletPointPayload>
          }
          deleteMany: {
            args: Prisma.BulletPointDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BulletPointUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BulletPointUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulletPointPayload>
          }
          aggregate: {
            args: Prisma.BulletPointAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBulletPoint>
          }
          groupBy: {
            args: Prisma.BulletPointGroupByArgs<ExtArgs>
            result: $Utils.Optional<BulletPointGroupByOutputType>[]
          }
          count: {
            args: Prisma.BulletPointCountArgs<ExtArgs>
            result: $Utils.Optional<BulletPointCountAggregateOutputType> | number
          }
        }
      }
      GroupedBulletPoint: {
        payload: Prisma.$GroupedBulletPointPayload<ExtArgs>
        fields: Prisma.GroupedBulletPointFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroupedBulletPointFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupedBulletPointPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroupedBulletPointFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupedBulletPointPayload>
          }
          findFirst: {
            args: Prisma.GroupedBulletPointFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupedBulletPointPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroupedBulletPointFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupedBulletPointPayload>
          }
          findMany: {
            args: Prisma.GroupedBulletPointFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupedBulletPointPayload>[]
          }
          create: {
            args: Prisma.GroupedBulletPointCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupedBulletPointPayload>
          }
          createMany: {
            args: Prisma.GroupedBulletPointCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.GroupedBulletPointDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupedBulletPointPayload>
          }
          update: {
            args: Prisma.GroupedBulletPointUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupedBulletPointPayload>
          }
          deleteMany: {
            args: Prisma.GroupedBulletPointDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GroupedBulletPointUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GroupedBulletPointUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupedBulletPointPayload>
          }
          aggregate: {
            args: Prisma.GroupedBulletPointAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroupedBulletPoint>
          }
          groupBy: {
            args: Prisma.GroupedBulletPointGroupByArgs<ExtArgs>
            result: $Utils.Optional<GroupedBulletPointGroupByOutputType>[]
          }
          count: {
            args: Prisma.GroupedBulletPointCountArgs<ExtArgs>
            result: $Utils.Optional<GroupedBulletPointCountAggregateOutputType> | number
          }
        }
      }
      BulletPointContent: {
        payload: Prisma.$BulletPointContentPayload<ExtArgs>
        fields: Prisma.BulletPointContentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BulletPointContentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulletPointContentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BulletPointContentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulletPointContentPayload>
          }
          findFirst: {
            args: Prisma.BulletPointContentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulletPointContentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BulletPointContentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulletPointContentPayload>
          }
          findMany: {
            args: Prisma.BulletPointContentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulletPointContentPayload>[]
          }
          create: {
            args: Prisma.BulletPointContentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulletPointContentPayload>
          }
          createMany: {
            args: Prisma.BulletPointContentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BulletPointContentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulletPointContentPayload>
          }
          update: {
            args: Prisma.BulletPointContentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulletPointContentPayload>
          }
          deleteMany: {
            args: Prisma.BulletPointContentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BulletPointContentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BulletPointContentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BulletPointContentPayload>
          }
          aggregate: {
            args: Prisma.BulletPointContentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBulletPointContent>
          }
          groupBy: {
            args: Prisma.BulletPointContentGroupByArgs<ExtArgs>
            result: $Utils.Optional<BulletPointContentGroupByOutputType>[]
          }
          count: {
            args: Prisma.BulletPointContentCountArgs<ExtArgs>
            result: $Utils.Optional<BulletPointContentCountAggregateOutputType> | number
          }
        }
      }
      Image: {
        payload: Prisma.$ImagePayload<ExtArgs>
        fields: Prisma.ImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          findFirst: {
            args: Prisma.ImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          findMany: {
            args: Prisma.ImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          create: {
            args: Prisma.ImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          createMany: {
            args: Prisma.ImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          update: {
            args: Prisma.ImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          deleteMany: {
            args: Prisma.ImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          aggregate: {
            args: Prisma.ImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImage>
          }
          groupBy: {
            args: Prisma.ImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImageCountArgs<ExtArgs>
            result: $Utils.Optional<ImageCountAggregateOutputType> | number
          }
        }
      }
      Checklist: {
        payload: Prisma.$ChecklistPayload<ExtArgs>
        fields: Prisma.ChecklistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChecklistFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChecklistFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistPayload>
          }
          findFirst: {
            args: Prisma.ChecklistFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChecklistFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistPayload>
          }
          findMany: {
            args: Prisma.ChecklistFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistPayload>[]
          }
          create: {
            args: Prisma.ChecklistCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistPayload>
          }
          createMany: {
            args: Prisma.ChecklistCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ChecklistDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistPayload>
          }
          update: {
            args: Prisma.ChecklistUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistPayload>
          }
          deleteMany: {
            args: Prisma.ChecklistDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChecklistUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ChecklistUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistPayload>
          }
          aggregate: {
            args: Prisma.ChecklistAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChecklist>
          }
          groupBy: {
            args: Prisma.ChecklistGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChecklistGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChecklistCountArgs<ExtArgs>
            result: $Utils.Optional<ChecklistCountAggregateOutputType> | number
          }
        }
      }
      ChecklistCategory: {
        payload: Prisma.$ChecklistCategoryPayload<ExtArgs>
        fields: Prisma.ChecklistCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChecklistCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChecklistCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistCategoryPayload>
          }
          findFirst: {
            args: Prisma.ChecklistCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChecklistCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistCategoryPayload>
          }
          findMany: {
            args: Prisma.ChecklistCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistCategoryPayload>[]
          }
          create: {
            args: Prisma.ChecklistCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistCategoryPayload>
          }
          createMany: {
            args: Prisma.ChecklistCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ChecklistCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistCategoryPayload>
          }
          update: {
            args: Prisma.ChecklistCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistCategoryPayload>
          }
          deleteMany: {
            args: Prisma.ChecklistCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChecklistCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ChecklistCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistCategoryPayload>
          }
          aggregate: {
            args: Prisma.ChecklistCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChecklistCategory>
          }
          groupBy: {
            args: Prisma.ChecklistCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChecklistCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChecklistCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<ChecklistCategoryCountAggregateOutputType> | number
          }
        }
      }
      ChecklistItem: {
        payload: Prisma.$ChecklistItemPayload<ExtArgs>
        fields: Prisma.ChecklistItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChecklistItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChecklistItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistItemPayload>
          }
          findFirst: {
            args: Prisma.ChecklistItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChecklistItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistItemPayload>
          }
          findMany: {
            args: Prisma.ChecklistItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistItemPayload>[]
          }
          create: {
            args: Prisma.ChecklistItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistItemPayload>
          }
          createMany: {
            args: Prisma.ChecklistItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ChecklistItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistItemPayload>
          }
          update: {
            args: Prisma.ChecklistItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistItemPayload>
          }
          deleteMany: {
            args: Prisma.ChecklistItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChecklistItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ChecklistItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChecklistItemPayload>
          }
          aggregate: {
            args: Prisma.ChecklistItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChecklistItem>
          }
          groupBy: {
            args: Prisma.ChecklistItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChecklistItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChecklistItemCountArgs<ExtArgs>
            result: $Utils.Optional<ChecklistItemCountAggregateOutputType> | number
          }
        }
      }
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>
        fields: Prisma.ReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
      ReviewLike: {
        payload: Prisma.$ReviewLikePayload<ExtArgs>
        fields: Prisma.ReviewLikeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewLikeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewLikePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewLikeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewLikePayload>
          }
          findFirst: {
            args: Prisma.ReviewLikeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewLikePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewLikeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewLikePayload>
          }
          findMany: {
            args: Prisma.ReviewLikeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewLikePayload>[]
          }
          create: {
            args: Prisma.ReviewLikeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewLikePayload>
          }
          createMany: {
            args: Prisma.ReviewLikeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ReviewLikeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewLikePayload>
          }
          update: {
            args: Prisma.ReviewLikeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewLikePayload>
          }
          deleteMany: {
            args: Prisma.ReviewLikeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewLikeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReviewLikeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewLikePayload>
          }
          aggregate: {
            args: Prisma.ReviewLikeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReviewLike>
          }
          groupBy: {
            args: Prisma.ReviewLikeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewLikeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewLikeCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewLikeCountAggregateOutputType> | number
          }
        }
      }
      UserVoyage: {
        payload: Prisma.$UserVoyagePayload<ExtArgs>
        fields: Prisma.UserVoyageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserVoyageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVoyagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserVoyageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVoyagePayload>
          }
          findFirst: {
            args: Prisma.UserVoyageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVoyagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserVoyageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVoyagePayload>
          }
          findMany: {
            args: Prisma.UserVoyageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVoyagePayload>[]
          }
          create: {
            args: Prisma.UserVoyageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVoyagePayload>
          }
          createMany: {
            args: Prisma.UserVoyageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserVoyageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVoyagePayload>
          }
          update: {
            args: Prisma.UserVoyageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVoyagePayload>
          }
          deleteMany: {
            args: Prisma.UserVoyageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserVoyageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserVoyageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVoyagePayload>
          }
          aggregate: {
            args: Prisma.UserVoyageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserVoyage>
          }
          groupBy: {
            args: Prisma.UserVoyageGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserVoyageGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserVoyageCountArgs<ExtArgs>
            result: $Utils.Optional<UserVoyageCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    destination?: DestinationOmit
    section?: SectionOmit
    bulletPoint?: BulletPointOmit
    groupedBulletPoint?: GroupedBulletPointOmit
    bulletPointContent?: BulletPointContentOmit
    image?: ImageOmit
    checklist?: ChecklistOmit
    checklistCategory?: ChecklistCategoryOmit
    checklistItem?: ChecklistItemOmit
    review?: ReviewOmit
    reviewLike?: ReviewLikeOmit
    userVoyage?: UserVoyageOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    voyages: number
    checklists: number
    reviews: number
    reviewLikes: number
    userVoyages: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    voyages?: boolean | UserCountOutputTypeCountVoyagesArgs
    checklists?: boolean | UserCountOutputTypeCountChecklistsArgs
    reviews?: boolean | UserCountOutputTypeCountReviewsArgs
    reviewLikes?: boolean | UserCountOutputTypeCountReviewLikesArgs
    userVoyages?: boolean | UserCountOutputTypeCountUserVoyagesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVoyagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DestinationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChecklistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChecklistWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewLikeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserVoyagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserVoyageWhereInput
  }


  /**
   * Count Type DestinationCountOutputType
   */

  export type DestinationCountOutputType = {
    sections: number
    checklists: number
    reviews: number
    userVoyages: number
  }

  export type DestinationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sections?: boolean | DestinationCountOutputTypeCountSectionsArgs
    checklists?: boolean | DestinationCountOutputTypeCountChecklistsArgs
    reviews?: boolean | DestinationCountOutputTypeCountReviewsArgs
    userVoyages?: boolean | DestinationCountOutputTypeCountUserVoyagesArgs
  }

  // Custom InputTypes
  /**
   * DestinationCountOutputType without action
   */
  export type DestinationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinationCountOutputType
     */
    select?: DestinationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DestinationCountOutputType without action
   */
  export type DestinationCountOutputTypeCountSectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SectionWhereInput
  }

  /**
   * DestinationCountOutputType without action
   */
  export type DestinationCountOutputTypeCountChecklistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChecklistWhereInput
  }

  /**
   * DestinationCountOutputType without action
   */
  export type DestinationCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * DestinationCountOutputType without action
   */
  export type DestinationCountOutputTypeCountUserVoyagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserVoyageWhereInput
  }


  /**
   * Count Type SectionCountOutputType
   */

  export type SectionCountOutputType = {
    bulletPoints: number
    groupedPoints: number
    images: number
  }

  export type SectionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bulletPoints?: boolean | SectionCountOutputTypeCountBulletPointsArgs
    groupedPoints?: boolean | SectionCountOutputTypeCountGroupedPointsArgs
    images?: boolean | SectionCountOutputTypeCountImagesArgs
  }

  // Custom InputTypes
  /**
   * SectionCountOutputType without action
   */
  export type SectionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionCountOutputType
     */
    select?: SectionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SectionCountOutputType without action
   */
  export type SectionCountOutputTypeCountBulletPointsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BulletPointWhereInput
  }

  /**
   * SectionCountOutputType without action
   */
  export type SectionCountOutputTypeCountGroupedPointsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupedBulletPointWhereInput
  }

  /**
   * SectionCountOutputType without action
   */
  export type SectionCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput
  }


  /**
   * Count Type GroupedBulletPointCountOutputType
   */

  export type GroupedBulletPointCountOutputType = {
    contents: number
  }

  export type GroupedBulletPointCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contents?: boolean | GroupedBulletPointCountOutputTypeCountContentsArgs
  }

  // Custom InputTypes
  /**
   * GroupedBulletPointCountOutputType without action
   */
  export type GroupedBulletPointCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupedBulletPointCountOutputType
     */
    select?: GroupedBulletPointCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GroupedBulletPointCountOutputType without action
   */
  export type GroupedBulletPointCountOutputTypeCountContentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BulletPointContentWhereInput
  }


  /**
   * Count Type ChecklistCountOutputType
   */

  export type ChecklistCountOutputType = {
    categories: number
  }

  export type ChecklistCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | ChecklistCountOutputTypeCountCategoriesArgs
  }

  // Custom InputTypes
  /**
   * ChecklistCountOutputType without action
   */
  export type ChecklistCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChecklistCountOutputType
     */
    select?: ChecklistCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChecklistCountOutputType without action
   */
  export type ChecklistCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChecklistCategoryWhereInput
  }


  /**
   * Count Type ChecklistCategoryCountOutputType
   */

  export type ChecklistCategoryCountOutputType = {
    items: number
  }

  export type ChecklistCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | ChecklistCategoryCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * ChecklistCategoryCountOutputType without action
   */
  export type ChecklistCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChecklistCategoryCountOutputType
     */
    select?: ChecklistCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChecklistCategoryCountOutputType without action
   */
  export type ChecklistCategoryCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChecklistItemWhereInput
  }


  /**
   * Count Type ReviewCountOutputType
   */

  export type ReviewCountOutputType = {
    likes: number
  }

  export type ReviewCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    likes?: boolean | ReviewCountOutputTypeCountLikesArgs
  }

  // Custom InputTypes
  /**
   * ReviewCountOutputType without action
   */
  export type ReviewCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewCountOutputType
     */
    select?: ReviewCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ReviewCountOutputType without action
   */
  export type ReviewCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewLikeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    nom: string | null
    prenom: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    bio: string | null
    instagram: string | null
    facebook: string | null
    youtube: string | null
    isPublic: boolean | null
    adventurerType: string | null
    avatar: string | null
    coverImage: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    nom: string | null
    prenom: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    bio: string | null
    instagram: string | null
    facebook: string | null
    youtube: string | null
    isPublic: boolean | null
    adventurerType: string | null
    avatar: string | null
    coverImage: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    nom: number
    prenom: number
    email: number
    password: number
    role: number
    createdAt: number
    bio: number
    instagram: number
    facebook: number
    youtube: number
    isPublic: number
    adventurerType: number
    avatar: number
    coverImage: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    nom?: true
    prenom?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    bio?: true
    instagram?: true
    facebook?: true
    youtube?: true
    isPublic?: true
    adventurerType?: true
    avatar?: true
    coverImage?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    nom?: true
    prenom?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    bio?: true
    instagram?: true
    facebook?: true
    youtube?: true
    isPublic?: true
    adventurerType?: true
    avatar?: true
    coverImage?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    nom?: true
    prenom?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    bio?: true
    instagram?: true
    facebook?: true
    youtube?: true
    isPublic?: true
    adventurerType?: true
    avatar?: true
    coverImage?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    nom: string
    prenom: string
    email: string
    password: string
    role: $Enums.Role
    createdAt: Date
    bio: string | null
    instagram: string | null
    facebook: string | null
    youtube: string | null
    isPublic: boolean
    adventurerType: string | null
    avatar: string | null
    coverImage: string | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    prenom?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    bio?: boolean
    instagram?: boolean
    facebook?: boolean
    youtube?: boolean
    isPublic?: boolean
    adventurerType?: boolean
    avatar?: boolean
    coverImage?: boolean
    voyages?: boolean | User$voyagesArgs<ExtArgs>
    checklists?: boolean | User$checklistsArgs<ExtArgs>
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    reviewLikes?: boolean | User$reviewLikesArgs<ExtArgs>
    userVoyages?: boolean | User$userVoyagesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    nom?: boolean
    prenom?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    bio?: boolean
    instagram?: boolean
    facebook?: boolean
    youtube?: boolean
    isPublic?: boolean
    adventurerType?: boolean
    avatar?: boolean
    coverImage?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nom" | "prenom" | "email" | "password" | "role" | "createdAt" | "bio" | "instagram" | "facebook" | "youtube" | "isPublic" | "adventurerType" | "avatar" | "coverImage", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    voyages?: boolean | User$voyagesArgs<ExtArgs>
    checklists?: boolean | User$checklistsArgs<ExtArgs>
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    reviewLikes?: boolean | User$reviewLikesArgs<ExtArgs>
    userVoyages?: boolean | User$userVoyagesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      voyages: Prisma.$DestinationPayload<ExtArgs>[]
      checklists: Prisma.$ChecklistPayload<ExtArgs>[]
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
      reviewLikes: Prisma.$ReviewLikePayload<ExtArgs>[]
      userVoyages: Prisma.$UserVoyagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nom: string
      prenom: string
      email: string
      password: string
      role: $Enums.Role
      createdAt: Date
      bio: string | null
      instagram: string | null
      facebook: string | null
      youtube: string | null
      isPublic: boolean
      adventurerType: string | null
      avatar: string | null
      coverImage: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    voyages<T extends User$voyagesArgs<ExtArgs> = {}>(args?: Subset<T, User$voyagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    checklists<T extends User$checklistsArgs<ExtArgs> = {}>(args?: Subset<T, User$checklistsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChecklistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends User$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, User$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviewLikes<T extends User$reviewLikesArgs<ExtArgs> = {}>(args?: Subset<T, User$reviewLikesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewLikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userVoyages<T extends User$userVoyagesArgs<ExtArgs> = {}>(args?: Subset<T, User$userVoyagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserVoyagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly nom: FieldRef<"User", 'String'>
    readonly prenom: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly bio: FieldRef<"User", 'String'>
    readonly instagram: FieldRef<"User", 'String'>
    readonly facebook: FieldRef<"User", 'String'>
    readonly youtube: FieldRef<"User", 'String'>
    readonly isPublic: FieldRef<"User", 'Boolean'>
    readonly adventurerType: FieldRef<"User", 'String'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly coverImage: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.voyages
   */
  export type User$voyagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
    where?: DestinationWhereInput
    orderBy?: DestinationOrderByWithRelationInput | DestinationOrderByWithRelationInput[]
    cursor?: DestinationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DestinationScalarFieldEnum | DestinationScalarFieldEnum[]
  }

  /**
   * User.checklists
   */
  export type User$checklistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checklist
     */
    select?: ChecklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checklist
     */
    omit?: ChecklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistInclude<ExtArgs> | null
    where?: ChecklistWhereInput
    orderBy?: ChecklistOrderByWithRelationInput | ChecklistOrderByWithRelationInput[]
    cursor?: ChecklistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChecklistScalarFieldEnum | ChecklistScalarFieldEnum[]
  }

  /**
   * User.reviews
   */
  export type User$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * User.reviewLikes
   */
  export type User$reviewLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewLike
     */
    select?: ReviewLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewLike
     */
    omit?: ReviewLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewLikeInclude<ExtArgs> | null
    where?: ReviewLikeWhereInput
    orderBy?: ReviewLikeOrderByWithRelationInput | ReviewLikeOrderByWithRelationInput[]
    cursor?: ReviewLikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewLikeScalarFieldEnum | ReviewLikeScalarFieldEnum[]
  }

  /**
   * User.userVoyages
   */
  export type User$userVoyagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVoyage
     */
    select?: UserVoyageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserVoyage
     */
    omit?: UserVoyageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVoyageInclude<ExtArgs> | null
    where?: UserVoyageWhereInput
    orderBy?: UserVoyageOrderByWithRelationInput | UserVoyageOrderByWithRelationInput[]
    cursor?: UserVoyageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserVoyageScalarFieldEnum | UserVoyageScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Destination
   */

  export type AggregateDestination = {
    _count: DestinationCountAggregateOutputType | null
    _avg: DestinationAvgAggregateOutputType | null
    _sum: DestinationSumAggregateOutputType | null
    _min: DestinationMinAggregateOutputType | null
    _max: DestinationMaxAggregateOutputType | null
  }

  export type DestinationAvgAggregateOutputType = {
    utilisateurId: number | null
  }

  export type DestinationSumAggregateOutputType = {
    utilisateurId: number | null
  }

  export type DestinationMinAggregateOutputType = {
    id: string | null
    titre: string | null
    pays: string | null
    continent: string | null
    description: string | null
    imagePrincipale: string | null
    createdAt: Date | null
    updatedAt: Date | null
    utilisateurId: number | null
  }

  export type DestinationMaxAggregateOutputType = {
    id: string | null
    titre: string | null
    pays: string | null
    continent: string | null
    description: string | null
    imagePrincipale: string | null
    createdAt: Date | null
    updatedAt: Date | null
    utilisateurId: number | null
  }

  export type DestinationCountAggregateOutputType = {
    id: number
    titre: number
    pays: number
    continent: number
    description: number
    imagePrincipale: number
    createdAt: number
    updatedAt: number
    utilisateurId: number
    _all: number
  }


  export type DestinationAvgAggregateInputType = {
    utilisateurId?: true
  }

  export type DestinationSumAggregateInputType = {
    utilisateurId?: true
  }

  export type DestinationMinAggregateInputType = {
    id?: true
    titre?: true
    pays?: true
    continent?: true
    description?: true
    imagePrincipale?: true
    createdAt?: true
    updatedAt?: true
    utilisateurId?: true
  }

  export type DestinationMaxAggregateInputType = {
    id?: true
    titre?: true
    pays?: true
    continent?: true
    description?: true
    imagePrincipale?: true
    createdAt?: true
    updatedAt?: true
    utilisateurId?: true
  }

  export type DestinationCountAggregateInputType = {
    id?: true
    titre?: true
    pays?: true
    continent?: true
    description?: true
    imagePrincipale?: true
    createdAt?: true
    updatedAt?: true
    utilisateurId?: true
    _all?: true
  }

  export type DestinationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Destination to aggregate.
     */
    where?: DestinationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Destinations to fetch.
     */
    orderBy?: DestinationOrderByWithRelationInput | DestinationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DestinationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Destinations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Destinations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Destinations
    **/
    _count?: true | DestinationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DestinationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DestinationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DestinationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DestinationMaxAggregateInputType
  }

  export type GetDestinationAggregateType<T extends DestinationAggregateArgs> = {
        [P in keyof T & keyof AggregateDestination]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDestination[P]>
      : GetScalarType<T[P], AggregateDestination[P]>
  }




  export type DestinationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DestinationWhereInput
    orderBy?: DestinationOrderByWithAggregationInput | DestinationOrderByWithAggregationInput[]
    by: DestinationScalarFieldEnum[] | DestinationScalarFieldEnum
    having?: DestinationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DestinationCountAggregateInputType | true
    _avg?: DestinationAvgAggregateInputType
    _sum?: DestinationSumAggregateInputType
    _min?: DestinationMinAggregateInputType
    _max?: DestinationMaxAggregateInputType
  }

  export type DestinationGroupByOutputType = {
    id: string
    titre: string
    pays: string
    continent: string | null
    description: string | null
    imagePrincipale: string | null
    createdAt: Date
    updatedAt: Date
    utilisateurId: number | null
    _count: DestinationCountAggregateOutputType | null
    _avg: DestinationAvgAggregateOutputType | null
    _sum: DestinationSumAggregateOutputType | null
    _min: DestinationMinAggregateOutputType | null
    _max: DestinationMaxAggregateOutputType | null
  }

  type GetDestinationGroupByPayload<T extends DestinationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DestinationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DestinationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DestinationGroupByOutputType[P]>
            : GetScalarType<T[P], DestinationGroupByOutputType[P]>
        }
      >
    >


  export type DestinationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titre?: boolean
    pays?: boolean
    continent?: boolean
    description?: boolean
    imagePrincipale?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    utilisateurId?: boolean
    sections?: boolean | Destination$sectionsArgs<ExtArgs>
    utilisateur?: boolean | Destination$utilisateurArgs<ExtArgs>
    checklists?: boolean | Destination$checklistsArgs<ExtArgs>
    reviews?: boolean | Destination$reviewsArgs<ExtArgs>
    userVoyages?: boolean | Destination$userVoyagesArgs<ExtArgs>
    _count?: boolean | DestinationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["destination"]>



  export type DestinationSelectScalar = {
    id?: boolean
    titre?: boolean
    pays?: boolean
    continent?: boolean
    description?: boolean
    imagePrincipale?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    utilisateurId?: boolean
  }

  export type DestinationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titre" | "pays" | "continent" | "description" | "imagePrincipale" | "createdAt" | "updatedAt" | "utilisateurId", ExtArgs["result"]["destination"]>
  export type DestinationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sections?: boolean | Destination$sectionsArgs<ExtArgs>
    utilisateur?: boolean | Destination$utilisateurArgs<ExtArgs>
    checklists?: boolean | Destination$checklistsArgs<ExtArgs>
    reviews?: boolean | Destination$reviewsArgs<ExtArgs>
    userVoyages?: boolean | Destination$userVoyagesArgs<ExtArgs>
    _count?: boolean | DestinationCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $DestinationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Destination"
    objects: {
      sections: Prisma.$SectionPayload<ExtArgs>[]
      utilisateur: Prisma.$UserPayload<ExtArgs> | null
      checklists: Prisma.$ChecklistPayload<ExtArgs>[]
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
      userVoyages: Prisma.$UserVoyagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      titre: string
      pays: string
      continent: string | null
      description: string | null
      imagePrincipale: string | null
      createdAt: Date
      updatedAt: Date
      utilisateurId: number | null
    }, ExtArgs["result"]["destination"]>
    composites: {}
  }

  type DestinationGetPayload<S extends boolean | null | undefined | DestinationDefaultArgs> = $Result.GetResult<Prisma.$DestinationPayload, S>

  type DestinationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DestinationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DestinationCountAggregateInputType | true
    }

  export interface DestinationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Destination'], meta: { name: 'Destination' } }
    /**
     * Find zero or one Destination that matches the filter.
     * @param {DestinationFindUniqueArgs} args - Arguments to find a Destination
     * @example
     * // Get one Destination
     * const destination = await prisma.destination.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DestinationFindUniqueArgs>(args: SelectSubset<T, DestinationFindUniqueArgs<ExtArgs>>): Prisma__DestinationClient<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Destination that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DestinationFindUniqueOrThrowArgs} args - Arguments to find a Destination
     * @example
     * // Get one Destination
     * const destination = await prisma.destination.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DestinationFindUniqueOrThrowArgs>(args: SelectSubset<T, DestinationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DestinationClient<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Destination that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationFindFirstArgs} args - Arguments to find a Destination
     * @example
     * // Get one Destination
     * const destination = await prisma.destination.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DestinationFindFirstArgs>(args?: SelectSubset<T, DestinationFindFirstArgs<ExtArgs>>): Prisma__DestinationClient<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Destination that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationFindFirstOrThrowArgs} args - Arguments to find a Destination
     * @example
     * // Get one Destination
     * const destination = await prisma.destination.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DestinationFindFirstOrThrowArgs>(args?: SelectSubset<T, DestinationFindFirstOrThrowArgs<ExtArgs>>): Prisma__DestinationClient<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Destinations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Destinations
     * const destinations = await prisma.destination.findMany()
     * 
     * // Get first 10 Destinations
     * const destinations = await prisma.destination.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const destinationWithIdOnly = await prisma.destination.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DestinationFindManyArgs>(args?: SelectSubset<T, DestinationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Destination.
     * @param {DestinationCreateArgs} args - Arguments to create a Destination.
     * @example
     * // Create one Destination
     * const Destination = await prisma.destination.create({
     *   data: {
     *     // ... data to create a Destination
     *   }
     * })
     * 
     */
    create<T extends DestinationCreateArgs>(args: SelectSubset<T, DestinationCreateArgs<ExtArgs>>): Prisma__DestinationClient<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Destinations.
     * @param {DestinationCreateManyArgs} args - Arguments to create many Destinations.
     * @example
     * // Create many Destinations
     * const destination = await prisma.destination.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DestinationCreateManyArgs>(args?: SelectSubset<T, DestinationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Destination.
     * @param {DestinationDeleteArgs} args - Arguments to delete one Destination.
     * @example
     * // Delete one Destination
     * const Destination = await prisma.destination.delete({
     *   where: {
     *     // ... filter to delete one Destination
     *   }
     * })
     * 
     */
    delete<T extends DestinationDeleteArgs>(args: SelectSubset<T, DestinationDeleteArgs<ExtArgs>>): Prisma__DestinationClient<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Destination.
     * @param {DestinationUpdateArgs} args - Arguments to update one Destination.
     * @example
     * // Update one Destination
     * const destination = await prisma.destination.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DestinationUpdateArgs>(args: SelectSubset<T, DestinationUpdateArgs<ExtArgs>>): Prisma__DestinationClient<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Destinations.
     * @param {DestinationDeleteManyArgs} args - Arguments to filter Destinations to delete.
     * @example
     * // Delete a few Destinations
     * const { count } = await prisma.destination.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DestinationDeleteManyArgs>(args?: SelectSubset<T, DestinationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Destinations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Destinations
     * const destination = await prisma.destination.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DestinationUpdateManyArgs>(args: SelectSubset<T, DestinationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Destination.
     * @param {DestinationUpsertArgs} args - Arguments to update or create a Destination.
     * @example
     * // Update or create a Destination
     * const destination = await prisma.destination.upsert({
     *   create: {
     *     // ... data to create a Destination
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Destination we want to update
     *   }
     * })
     */
    upsert<T extends DestinationUpsertArgs>(args: SelectSubset<T, DestinationUpsertArgs<ExtArgs>>): Prisma__DestinationClient<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Destinations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationCountArgs} args - Arguments to filter Destinations to count.
     * @example
     * // Count the number of Destinations
     * const count = await prisma.destination.count({
     *   where: {
     *     // ... the filter for the Destinations we want to count
     *   }
     * })
    **/
    count<T extends DestinationCountArgs>(
      args?: Subset<T, DestinationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DestinationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Destination.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DestinationAggregateArgs>(args: Subset<T, DestinationAggregateArgs>): Prisma.PrismaPromise<GetDestinationAggregateType<T>>

    /**
     * Group by Destination.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DestinationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DestinationGroupByArgs['orderBy'] }
        : { orderBy?: DestinationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DestinationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDestinationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Destination model
   */
  readonly fields: DestinationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Destination.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DestinationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sections<T extends Destination$sectionsArgs<ExtArgs> = {}>(args?: Subset<T, Destination$sectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    utilisateur<T extends Destination$utilisateurArgs<ExtArgs> = {}>(args?: Subset<T, Destination$utilisateurArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    checklists<T extends Destination$checklistsArgs<ExtArgs> = {}>(args?: Subset<T, Destination$checklistsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChecklistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends Destination$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, Destination$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userVoyages<T extends Destination$userVoyagesArgs<ExtArgs> = {}>(args?: Subset<T, Destination$userVoyagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserVoyagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Destination model
   */
  interface DestinationFieldRefs {
    readonly id: FieldRef<"Destination", 'String'>
    readonly titre: FieldRef<"Destination", 'String'>
    readonly pays: FieldRef<"Destination", 'String'>
    readonly continent: FieldRef<"Destination", 'String'>
    readonly description: FieldRef<"Destination", 'String'>
    readonly imagePrincipale: FieldRef<"Destination", 'String'>
    readonly createdAt: FieldRef<"Destination", 'DateTime'>
    readonly updatedAt: FieldRef<"Destination", 'DateTime'>
    readonly utilisateurId: FieldRef<"Destination", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Destination findUnique
   */
  export type DestinationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
    /**
     * Filter, which Destination to fetch.
     */
    where: DestinationWhereUniqueInput
  }

  /**
   * Destination findUniqueOrThrow
   */
  export type DestinationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
    /**
     * Filter, which Destination to fetch.
     */
    where: DestinationWhereUniqueInput
  }

  /**
   * Destination findFirst
   */
  export type DestinationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
    /**
     * Filter, which Destination to fetch.
     */
    where?: DestinationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Destinations to fetch.
     */
    orderBy?: DestinationOrderByWithRelationInput | DestinationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Destinations.
     */
    cursor?: DestinationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Destinations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Destinations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Destinations.
     */
    distinct?: DestinationScalarFieldEnum | DestinationScalarFieldEnum[]
  }

  /**
   * Destination findFirstOrThrow
   */
  export type DestinationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
    /**
     * Filter, which Destination to fetch.
     */
    where?: DestinationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Destinations to fetch.
     */
    orderBy?: DestinationOrderByWithRelationInput | DestinationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Destinations.
     */
    cursor?: DestinationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Destinations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Destinations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Destinations.
     */
    distinct?: DestinationScalarFieldEnum | DestinationScalarFieldEnum[]
  }

  /**
   * Destination findMany
   */
  export type DestinationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
    /**
     * Filter, which Destinations to fetch.
     */
    where?: DestinationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Destinations to fetch.
     */
    orderBy?: DestinationOrderByWithRelationInput | DestinationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Destinations.
     */
    cursor?: DestinationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Destinations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Destinations.
     */
    skip?: number
    distinct?: DestinationScalarFieldEnum | DestinationScalarFieldEnum[]
  }

  /**
   * Destination create
   */
  export type DestinationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
    /**
     * The data needed to create a Destination.
     */
    data: XOR<DestinationCreateInput, DestinationUncheckedCreateInput>
  }

  /**
   * Destination createMany
   */
  export type DestinationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Destinations.
     */
    data: DestinationCreateManyInput | DestinationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Destination update
   */
  export type DestinationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
    /**
     * The data needed to update a Destination.
     */
    data: XOR<DestinationUpdateInput, DestinationUncheckedUpdateInput>
    /**
     * Choose, which Destination to update.
     */
    where: DestinationWhereUniqueInput
  }

  /**
   * Destination updateMany
   */
  export type DestinationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Destinations.
     */
    data: XOR<DestinationUpdateManyMutationInput, DestinationUncheckedUpdateManyInput>
    /**
     * Filter which Destinations to update
     */
    where?: DestinationWhereInput
    /**
     * Limit how many Destinations to update.
     */
    limit?: number
  }

  /**
   * Destination upsert
   */
  export type DestinationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
    /**
     * The filter to search for the Destination to update in case it exists.
     */
    where: DestinationWhereUniqueInput
    /**
     * In case the Destination found by the `where` argument doesn't exist, create a new Destination with this data.
     */
    create: XOR<DestinationCreateInput, DestinationUncheckedCreateInput>
    /**
     * In case the Destination was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DestinationUpdateInput, DestinationUncheckedUpdateInput>
  }

  /**
   * Destination delete
   */
  export type DestinationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
    /**
     * Filter which Destination to delete.
     */
    where: DestinationWhereUniqueInput
  }

  /**
   * Destination deleteMany
   */
  export type DestinationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Destinations to delete
     */
    where?: DestinationWhereInput
    /**
     * Limit how many Destinations to delete.
     */
    limit?: number
  }

  /**
   * Destination.sections
   */
  export type Destination$sectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    where?: SectionWhereInput
    orderBy?: SectionOrderByWithRelationInput | SectionOrderByWithRelationInput[]
    cursor?: SectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SectionScalarFieldEnum | SectionScalarFieldEnum[]
  }

  /**
   * Destination.utilisateur
   */
  export type Destination$utilisateurArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Destination.checklists
   */
  export type Destination$checklistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checklist
     */
    select?: ChecklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checklist
     */
    omit?: ChecklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistInclude<ExtArgs> | null
    where?: ChecklistWhereInput
    orderBy?: ChecklistOrderByWithRelationInput | ChecklistOrderByWithRelationInput[]
    cursor?: ChecklistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChecklistScalarFieldEnum | ChecklistScalarFieldEnum[]
  }

  /**
   * Destination.reviews
   */
  export type Destination$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Destination.userVoyages
   */
  export type Destination$userVoyagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVoyage
     */
    select?: UserVoyageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserVoyage
     */
    omit?: UserVoyageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVoyageInclude<ExtArgs> | null
    where?: UserVoyageWhereInput
    orderBy?: UserVoyageOrderByWithRelationInput | UserVoyageOrderByWithRelationInput[]
    cursor?: UserVoyageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserVoyageScalarFieldEnum | UserVoyageScalarFieldEnum[]
  }

  /**
   * Destination without action
   */
  export type DestinationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
  }


  /**
   * Model Section
   */

  export type AggregateSection = {
    _count: SectionCountAggregateOutputType | null
    _avg: SectionAvgAggregateOutputType | null
    _sum: SectionSumAggregateOutputType | null
    _min: SectionMinAggregateOutputType | null
    _max: SectionMaxAggregateOutputType | null
  }

  export type SectionAvgAggregateOutputType = {
    ordre: number | null
  }

  export type SectionSumAggregateOutputType = {
    ordre: number | null
  }

  export type SectionMinAggregateOutputType = {
    id: string | null
    titre: string | null
    contenu: string | null
    ordre: number | null
    type: $Enums.SectionType | null
    destinationId: string | null
    updatedAt: Date | null
  }

  export type SectionMaxAggregateOutputType = {
    id: string | null
    titre: string | null
    contenu: string | null
    ordre: number | null
    type: $Enums.SectionType | null
    destinationId: string | null
    updatedAt: Date | null
  }

  export type SectionCountAggregateOutputType = {
    id: number
    titre: number
    contenu: number
    ordre: number
    type: number
    destinationId: number
    updatedAt: number
    _all: number
  }


  export type SectionAvgAggregateInputType = {
    ordre?: true
  }

  export type SectionSumAggregateInputType = {
    ordre?: true
  }

  export type SectionMinAggregateInputType = {
    id?: true
    titre?: true
    contenu?: true
    ordre?: true
    type?: true
    destinationId?: true
    updatedAt?: true
  }

  export type SectionMaxAggregateInputType = {
    id?: true
    titre?: true
    contenu?: true
    ordre?: true
    type?: true
    destinationId?: true
    updatedAt?: true
  }

  export type SectionCountAggregateInputType = {
    id?: true
    titre?: true
    contenu?: true
    ordre?: true
    type?: true
    destinationId?: true
    updatedAt?: true
    _all?: true
  }

  export type SectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Section to aggregate.
     */
    where?: SectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sections to fetch.
     */
    orderBy?: SectionOrderByWithRelationInput | SectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sections
    **/
    _count?: true | SectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SectionMaxAggregateInputType
  }

  export type GetSectionAggregateType<T extends SectionAggregateArgs> = {
        [P in keyof T & keyof AggregateSection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSection[P]>
      : GetScalarType<T[P], AggregateSection[P]>
  }




  export type SectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SectionWhereInput
    orderBy?: SectionOrderByWithAggregationInput | SectionOrderByWithAggregationInput[]
    by: SectionScalarFieldEnum[] | SectionScalarFieldEnum
    having?: SectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SectionCountAggregateInputType | true
    _avg?: SectionAvgAggregateInputType
    _sum?: SectionSumAggregateInputType
    _min?: SectionMinAggregateInputType
    _max?: SectionMaxAggregateInputType
  }

  export type SectionGroupByOutputType = {
    id: string
    titre: string
    contenu: string | null
    ordre: number
    type: $Enums.SectionType
    destinationId: string
    updatedAt: Date
    _count: SectionCountAggregateOutputType | null
    _avg: SectionAvgAggregateOutputType | null
    _sum: SectionSumAggregateOutputType | null
    _min: SectionMinAggregateOutputType | null
    _max: SectionMaxAggregateOutputType | null
  }

  type GetSectionGroupByPayload<T extends SectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SectionGroupByOutputType[P]>
            : GetScalarType<T[P], SectionGroupByOutputType[P]>
        }
      >
    >


  export type SectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titre?: boolean
    contenu?: boolean
    ordre?: boolean
    type?: boolean
    destinationId?: boolean
    updatedAt?: boolean
    bulletPoints?: boolean | Section$bulletPointsArgs<ExtArgs>
    groupedPoints?: boolean | Section$groupedPointsArgs<ExtArgs>
    images?: boolean | Section$imagesArgs<ExtArgs>
    destination?: boolean | DestinationDefaultArgs<ExtArgs>
    _count?: boolean | SectionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["section"]>



  export type SectionSelectScalar = {
    id?: boolean
    titre?: boolean
    contenu?: boolean
    ordre?: boolean
    type?: boolean
    destinationId?: boolean
    updatedAt?: boolean
  }

  export type SectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titre" | "contenu" | "ordre" | "type" | "destinationId" | "updatedAt", ExtArgs["result"]["section"]>
  export type SectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bulletPoints?: boolean | Section$bulletPointsArgs<ExtArgs>
    groupedPoints?: boolean | Section$groupedPointsArgs<ExtArgs>
    images?: boolean | Section$imagesArgs<ExtArgs>
    destination?: boolean | DestinationDefaultArgs<ExtArgs>
    _count?: boolean | SectionCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $SectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Section"
    objects: {
      bulletPoints: Prisma.$BulletPointPayload<ExtArgs>[]
      groupedPoints: Prisma.$GroupedBulletPointPayload<ExtArgs>[]
      images: Prisma.$ImagePayload<ExtArgs>[]
      destination: Prisma.$DestinationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      titre: string
      contenu: string | null
      ordre: number
      type: $Enums.SectionType
      destinationId: string
      updatedAt: Date
    }, ExtArgs["result"]["section"]>
    composites: {}
  }

  type SectionGetPayload<S extends boolean | null | undefined | SectionDefaultArgs> = $Result.GetResult<Prisma.$SectionPayload, S>

  type SectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SectionCountAggregateInputType | true
    }

  export interface SectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Section'], meta: { name: 'Section' } }
    /**
     * Find zero or one Section that matches the filter.
     * @param {SectionFindUniqueArgs} args - Arguments to find a Section
     * @example
     * // Get one Section
     * const section = await prisma.section.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SectionFindUniqueArgs>(args: SelectSubset<T, SectionFindUniqueArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Section that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SectionFindUniqueOrThrowArgs} args - Arguments to find a Section
     * @example
     * // Get one Section
     * const section = await prisma.section.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SectionFindUniqueOrThrowArgs>(args: SelectSubset<T, SectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Section that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionFindFirstArgs} args - Arguments to find a Section
     * @example
     * // Get one Section
     * const section = await prisma.section.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SectionFindFirstArgs>(args?: SelectSubset<T, SectionFindFirstArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Section that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionFindFirstOrThrowArgs} args - Arguments to find a Section
     * @example
     * // Get one Section
     * const section = await prisma.section.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SectionFindFirstOrThrowArgs>(args?: SelectSubset<T, SectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sections
     * const sections = await prisma.section.findMany()
     * 
     * // Get first 10 Sections
     * const sections = await prisma.section.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sectionWithIdOnly = await prisma.section.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SectionFindManyArgs>(args?: SelectSubset<T, SectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Section.
     * @param {SectionCreateArgs} args - Arguments to create a Section.
     * @example
     * // Create one Section
     * const Section = await prisma.section.create({
     *   data: {
     *     // ... data to create a Section
     *   }
     * })
     * 
     */
    create<T extends SectionCreateArgs>(args: SelectSubset<T, SectionCreateArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sections.
     * @param {SectionCreateManyArgs} args - Arguments to create many Sections.
     * @example
     * // Create many Sections
     * const section = await prisma.section.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SectionCreateManyArgs>(args?: SelectSubset<T, SectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Section.
     * @param {SectionDeleteArgs} args - Arguments to delete one Section.
     * @example
     * // Delete one Section
     * const Section = await prisma.section.delete({
     *   where: {
     *     // ... filter to delete one Section
     *   }
     * })
     * 
     */
    delete<T extends SectionDeleteArgs>(args: SelectSubset<T, SectionDeleteArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Section.
     * @param {SectionUpdateArgs} args - Arguments to update one Section.
     * @example
     * // Update one Section
     * const section = await prisma.section.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SectionUpdateArgs>(args: SelectSubset<T, SectionUpdateArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sections.
     * @param {SectionDeleteManyArgs} args - Arguments to filter Sections to delete.
     * @example
     * // Delete a few Sections
     * const { count } = await prisma.section.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SectionDeleteManyArgs>(args?: SelectSubset<T, SectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sections
     * const section = await prisma.section.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SectionUpdateManyArgs>(args: SelectSubset<T, SectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Section.
     * @param {SectionUpsertArgs} args - Arguments to update or create a Section.
     * @example
     * // Update or create a Section
     * const section = await prisma.section.upsert({
     *   create: {
     *     // ... data to create a Section
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Section we want to update
     *   }
     * })
     */
    upsert<T extends SectionUpsertArgs>(args: SelectSubset<T, SectionUpsertArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionCountArgs} args - Arguments to filter Sections to count.
     * @example
     * // Count the number of Sections
     * const count = await prisma.section.count({
     *   where: {
     *     // ... the filter for the Sections we want to count
     *   }
     * })
    **/
    count<T extends SectionCountArgs>(
      args?: Subset<T, SectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Section.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SectionAggregateArgs>(args: Subset<T, SectionAggregateArgs>): Prisma.PrismaPromise<GetSectionAggregateType<T>>

    /**
     * Group by Section.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SectionGroupByArgs['orderBy'] }
        : { orderBy?: SectionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Section model
   */
  readonly fields: SectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Section.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bulletPoints<T extends Section$bulletPointsArgs<ExtArgs> = {}>(args?: Subset<T, Section$bulletPointsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BulletPointPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    groupedPoints<T extends Section$groupedPointsArgs<ExtArgs> = {}>(args?: Subset<T, Section$groupedPointsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupedBulletPointPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    images<T extends Section$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Section$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    destination<T extends DestinationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DestinationDefaultArgs<ExtArgs>>): Prisma__DestinationClient<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Section model
   */
  interface SectionFieldRefs {
    readonly id: FieldRef<"Section", 'String'>
    readonly titre: FieldRef<"Section", 'String'>
    readonly contenu: FieldRef<"Section", 'String'>
    readonly ordre: FieldRef<"Section", 'Int'>
    readonly type: FieldRef<"Section", 'SectionType'>
    readonly destinationId: FieldRef<"Section", 'String'>
    readonly updatedAt: FieldRef<"Section", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Section findUnique
   */
  export type SectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter, which Section to fetch.
     */
    where: SectionWhereUniqueInput
  }

  /**
   * Section findUniqueOrThrow
   */
  export type SectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter, which Section to fetch.
     */
    where: SectionWhereUniqueInput
  }

  /**
   * Section findFirst
   */
  export type SectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter, which Section to fetch.
     */
    where?: SectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sections to fetch.
     */
    orderBy?: SectionOrderByWithRelationInput | SectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sections.
     */
    cursor?: SectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sections.
     */
    distinct?: SectionScalarFieldEnum | SectionScalarFieldEnum[]
  }

  /**
   * Section findFirstOrThrow
   */
  export type SectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter, which Section to fetch.
     */
    where?: SectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sections to fetch.
     */
    orderBy?: SectionOrderByWithRelationInput | SectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sections.
     */
    cursor?: SectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sections.
     */
    distinct?: SectionScalarFieldEnum | SectionScalarFieldEnum[]
  }

  /**
   * Section findMany
   */
  export type SectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter, which Sections to fetch.
     */
    where?: SectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sections to fetch.
     */
    orderBy?: SectionOrderByWithRelationInput | SectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sections.
     */
    cursor?: SectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sections.
     */
    skip?: number
    distinct?: SectionScalarFieldEnum | SectionScalarFieldEnum[]
  }

  /**
   * Section create
   */
  export type SectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * The data needed to create a Section.
     */
    data: XOR<SectionCreateInput, SectionUncheckedCreateInput>
  }

  /**
   * Section createMany
   */
  export type SectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sections.
     */
    data: SectionCreateManyInput | SectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Section update
   */
  export type SectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * The data needed to update a Section.
     */
    data: XOR<SectionUpdateInput, SectionUncheckedUpdateInput>
    /**
     * Choose, which Section to update.
     */
    where: SectionWhereUniqueInput
  }

  /**
   * Section updateMany
   */
  export type SectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sections.
     */
    data: XOR<SectionUpdateManyMutationInput, SectionUncheckedUpdateManyInput>
    /**
     * Filter which Sections to update
     */
    where?: SectionWhereInput
    /**
     * Limit how many Sections to update.
     */
    limit?: number
  }

  /**
   * Section upsert
   */
  export type SectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * The filter to search for the Section to update in case it exists.
     */
    where: SectionWhereUniqueInput
    /**
     * In case the Section found by the `where` argument doesn't exist, create a new Section with this data.
     */
    create: XOR<SectionCreateInput, SectionUncheckedCreateInput>
    /**
     * In case the Section was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SectionUpdateInput, SectionUncheckedUpdateInput>
  }

  /**
   * Section delete
   */
  export type SectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter which Section to delete.
     */
    where: SectionWhereUniqueInput
  }

  /**
   * Section deleteMany
   */
  export type SectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sections to delete
     */
    where?: SectionWhereInput
    /**
     * Limit how many Sections to delete.
     */
    limit?: number
  }

  /**
   * Section.bulletPoints
   */
  export type Section$bulletPointsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulletPoint
     */
    select?: BulletPointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BulletPoint
     */
    omit?: BulletPointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulletPointInclude<ExtArgs> | null
    where?: BulletPointWhereInput
    orderBy?: BulletPointOrderByWithRelationInput | BulletPointOrderByWithRelationInput[]
    cursor?: BulletPointWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BulletPointScalarFieldEnum | BulletPointScalarFieldEnum[]
  }

  /**
   * Section.groupedPoints
   */
  export type Section$groupedPointsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupedBulletPoint
     */
    select?: GroupedBulletPointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupedBulletPoint
     */
    omit?: GroupedBulletPointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupedBulletPointInclude<ExtArgs> | null
    where?: GroupedBulletPointWhereInput
    orderBy?: GroupedBulletPointOrderByWithRelationInput | GroupedBulletPointOrderByWithRelationInput[]
    cursor?: GroupedBulletPointWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupedBulletPointScalarFieldEnum | GroupedBulletPointScalarFieldEnum[]
  }

  /**
   * Section.images
   */
  export type Section$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    where?: ImageWhereInput
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    cursor?: ImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Section without action
   */
  export type SectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
  }


  /**
   * Model BulletPoint
   */

  export type AggregateBulletPoint = {
    _count: BulletPointCountAggregateOutputType | null
    _avg: BulletPointAvgAggregateOutputType | null
    _sum: BulletPointSumAggregateOutputType | null
    _min: BulletPointMinAggregateOutputType | null
    _max: BulletPointMaxAggregateOutputType | null
  }

  export type BulletPointAvgAggregateOutputType = {
    ordre: number | null
  }

  export type BulletPointSumAggregateOutputType = {
    ordre: number | null
  }

  export type BulletPointMinAggregateOutputType = {
    id: string | null
    contenu: string | null
    ordre: number | null
    sectionId: string | null
  }

  export type BulletPointMaxAggregateOutputType = {
    id: string | null
    contenu: string | null
    ordre: number | null
    sectionId: string | null
  }

  export type BulletPointCountAggregateOutputType = {
    id: number
    contenu: number
    ordre: number
    sectionId: number
    _all: number
  }


  export type BulletPointAvgAggregateInputType = {
    ordre?: true
  }

  export type BulletPointSumAggregateInputType = {
    ordre?: true
  }

  export type BulletPointMinAggregateInputType = {
    id?: true
    contenu?: true
    ordre?: true
    sectionId?: true
  }

  export type BulletPointMaxAggregateInputType = {
    id?: true
    contenu?: true
    ordre?: true
    sectionId?: true
  }

  export type BulletPointCountAggregateInputType = {
    id?: true
    contenu?: true
    ordre?: true
    sectionId?: true
    _all?: true
  }

  export type BulletPointAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BulletPoint to aggregate.
     */
    where?: BulletPointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BulletPoints to fetch.
     */
    orderBy?: BulletPointOrderByWithRelationInput | BulletPointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BulletPointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BulletPoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BulletPoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BulletPoints
    **/
    _count?: true | BulletPointCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BulletPointAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BulletPointSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BulletPointMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BulletPointMaxAggregateInputType
  }

  export type GetBulletPointAggregateType<T extends BulletPointAggregateArgs> = {
        [P in keyof T & keyof AggregateBulletPoint]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBulletPoint[P]>
      : GetScalarType<T[P], AggregateBulletPoint[P]>
  }




  export type BulletPointGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BulletPointWhereInput
    orderBy?: BulletPointOrderByWithAggregationInput | BulletPointOrderByWithAggregationInput[]
    by: BulletPointScalarFieldEnum[] | BulletPointScalarFieldEnum
    having?: BulletPointScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BulletPointCountAggregateInputType | true
    _avg?: BulletPointAvgAggregateInputType
    _sum?: BulletPointSumAggregateInputType
    _min?: BulletPointMinAggregateInputType
    _max?: BulletPointMaxAggregateInputType
  }

  export type BulletPointGroupByOutputType = {
    id: string
    contenu: string | null
    ordre: number
    sectionId: string
    _count: BulletPointCountAggregateOutputType | null
    _avg: BulletPointAvgAggregateOutputType | null
    _sum: BulletPointSumAggregateOutputType | null
    _min: BulletPointMinAggregateOutputType | null
    _max: BulletPointMaxAggregateOutputType | null
  }

  type GetBulletPointGroupByPayload<T extends BulletPointGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BulletPointGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BulletPointGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BulletPointGroupByOutputType[P]>
            : GetScalarType<T[P], BulletPointGroupByOutputType[P]>
        }
      >
    >


  export type BulletPointSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contenu?: boolean
    ordre?: boolean
    sectionId?: boolean
    section?: boolean | SectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bulletPoint"]>



  export type BulletPointSelectScalar = {
    id?: boolean
    contenu?: boolean
    ordre?: boolean
    sectionId?: boolean
  }

  export type BulletPointOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "contenu" | "ordre" | "sectionId", ExtArgs["result"]["bulletPoint"]>
  export type BulletPointInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    section?: boolean | SectionDefaultArgs<ExtArgs>
  }

  export type $BulletPointPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BulletPoint"
    objects: {
      section: Prisma.$SectionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      contenu: string | null
      ordre: number
      sectionId: string
    }, ExtArgs["result"]["bulletPoint"]>
    composites: {}
  }

  type BulletPointGetPayload<S extends boolean | null | undefined | BulletPointDefaultArgs> = $Result.GetResult<Prisma.$BulletPointPayload, S>

  type BulletPointCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BulletPointFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BulletPointCountAggregateInputType | true
    }

  export interface BulletPointDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BulletPoint'], meta: { name: 'BulletPoint' } }
    /**
     * Find zero or one BulletPoint that matches the filter.
     * @param {BulletPointFindUniqueArgs} args - Arguments to find a BulletPoint
     * @example
     * // Get one BulletPoint
     * const bulletPoint = await prisma.bulletPoint.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BulletPointFindUniqueArgs>(args: SelectSubset<T, BulletPointFindUniqueArgs<ExtArgs>>): Prisma__BulletPointClient<$Result.GetResult<Prisma.$BulletPointPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BulletPoint that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BulletPointFindUniqueOrThrowArgs} args - Arguments to find a BulletPoint
     * @example
     * // Get one BulletPoint
     * const bulletPoint = await prisma.bulletPoint.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BulletPointFindUniqueOrThrowArgs>(args: SelectSubset<T, BulletPointFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BulletPointClient<$Result.GetResult<Prisma.$BulletPointPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BulletPoint that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BulletPointFindFirstArgs} args - Arguments to find a BulletPoint
     * @example
     * // Get one BulletPoint
     * const bulletPoint = await prisma.bulletPoint.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BulletPointFindFirstArgs>(args?: SelectSubset<T, BulletPointFindFirstArgs<ExtArgs>>): Prisma__BulletPointClient<$Result.GetResult<Prisma.$BulletPointPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BulletPoint that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BulletPointFindFirstOrThrowArgs} args - Arguments to find a BulletPoint
     * @example
     * // Get one BulletPoint
     * const bulletPoint = await prisma.bulletPoint.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BulletPointFindFirstOrThrowArgs>(args?: SelectSubset<T, BulletPointFindFirstOrThrowArgs<ExtArgs>>): Prisma__BulletPointClient<$Result.GetResult<Prisma.$BulletPointPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BulletPoints that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BulletPointFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BulletPoints
     * const bulletPoints = await prisma.bulletPoint.findMany()
     * 
     * // Get first 10 BulletPoints
     * const bulletPoints = await prisma.bulletPoint.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bulletPointWithIdOnly = await prisma.bulletPoint.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BulletPointFindManyArgs>(args?: SelectSubset<T, BulletPointFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BulletPointPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BulletPoint.
     * @param {BulletPointCreateArgs} args - Arguments to create a BulletPoint.
     * @example
     * // Create one BulletPoint
     * const BulletPoint = await prisma.bulletPoint.create({
     *   data: {
     *     // ... data to create a BulletPoint
     *   }
     * })
     * 
     */
    create<T extends BulletPointCreateArgs>(args: SelectSubset<T, BulletPointCreateArgs<ExtArgs>>): Prisma__BulletPointClient<$Result.GetResult<Prisma.$BulletPointPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BulletPoints.
     * @param {BulletPointCreateManyArgs} args - Arguments to create many BulletPoints.
     * @example
     * // Create many BulletPoints
     * const bulletPoint = await prisma.bulletPoint.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BulletPointCreateManyArgs>(args?: SelectSubset<T, BulletPointCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BulletPoint.
     * @param {BulletPointDeleteArgs} args - Arguments to delete one BulletPoint.
     * @example
     * // Delete one BulletPoint
     * const BulletPoint = await prisma.bulletPoint.delete({
     *   where: {
     *     // ... filter to delete one BulletPoint
     *   }
     * })
     * 
     */
    delete<T extends BulletPointDeleteArgs>(args: SelectSubset<T, BulletPointDeleteArgs<ExtArgs>>): Prisma__BulletPointClient<$Result.GetResult<Prisma.$BulletPointPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BulletPoint.
     * @param {BulletPointUpdateArgs} args - Arguments to update one BulletPoint.
     * @example
     * // Update one BulletPoint
     * const bulletPoint = await prisma.bulletPoint.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BulletPointUpdateArgs>(args: SelectSubset<T, BulletPointUpdateArgs<ExtArgs>>): Prisma__BulletPointClient<$Result.GetResult<Prisma.$BulletPointPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BulletPoints.
     * @param {BulletPointDeleteManyArgs} args - Arguments to filter BulletPoints to delete.
     * @example
     * // Delete a few BulletPoints
     * const { count } = await prisma.bulletPoint.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BulletPointDeleteManyArgs>(args?: SelectSubset<T, BulletPointDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BulletPoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BulletPointUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BulletPoints
     * const bulletPoint = await prisma.bulletPoint.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BulletPointUpdateManyArgs>(args: SelectSubset<T, BulletPointUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BulletPoint.
     * @param {BulletPointUpsertArgs} args - Arguments to update or create a BulletPoint.
     * @example
     * // Update or create a BulletPoint
     * const bulletPoint = await prisma.bulletPoint.upsert({
     *   create: {
     *     // ... data to create a BulletPoint
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BulletPoint we want to update
     *   }
     * })
     */
    upsert<T extends BulletPointUpsertArgs>(args: SelectSubset<T, BulletPointUpsertArgs<ExtArgs>>): Prisma__BulletPointClient<$Result.GetResult<Prisma.$BulletPointPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BulletPoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BulletPointCountArgs} args - Arguments to filter BulletPoints to count.
     * @example
     * // Count the number of BulletPoints
     * const count = await prisma.bulletPoint.count({
     *   where: {
     *     // ... the filter for the BulletPoints we want to count
     *   }
     * })
    **/
    count<T extends BulletPointCountArgs>(
      args?: Subset<T, BulletPointCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BulletPointCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BulletPoint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BulletPointAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BulletPointAggregateArgs>(args: Subset<T, BulletPointAggregateArgs>): Prisma.PrismaPromise<GetBulletPointAggregateType<T>>

    /**
     * Group by BulletPoint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BulletPointGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BulletPointGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BulletPointGroupByArgs['orderBy'] }
        : { orderBy?: BulletPointGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BulletPointGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBulletPointGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BulletPoint model
   */
  readonly fields: BulletPointFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BulletPoint.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BulletPointClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    section<T extends SectionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SectionDefaultArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BulletPoint model
   */
  interface BulletPointFieldRefs {
    readonly id: FieldRef<"BulletPoint", 'String'>
    readonly contenu: FieldRef<"BulletPoint", 'String'>
    readonly ordre: FieldRef<"BulletPoint", 'Int'>
    readonly sectionId: FieldRef<"BulletPoint", 'String'>
  }
    

  // Custom InputTypes
  /**
   * BulletPoint findUnique
   */
  export type BulletPointFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulletPoint
     */
    select?: BulletPointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BulletPoint
     */
    omit?: BulletPointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulletPointInclude<ExtArgs> | null
    /**
     * Filter, which BulletPoint to fetch.
     */
    where: BulletPointWhereUniqueInput
  }

  /**
   * BulletPoint findUniqueOrThrow
   */
  export type BulletPointFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulletPoint
     */
    select?: BulletPointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BulletPoint
     */
    omit?: BulletPointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulletPointInclude<ExtArgs> | null
    /**
     * Filter, which BulletPoint to fetch.
     */
    where: BulletPointWhereUniqueInput
  }

  /**
   * BulletPoint findFirst
   */
  export type BulletPointFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulletPoint
     */
    select?: BulletPointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BulletPoint
     */
    omit?: BulletPointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulletPointInclude<ExtArgs> | null
    /**
     * Filter, which BulletPoint to fetch.
     */
    where?: BulletPointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BulletPoints to fetch.
     */
    orderBy?: BulletPointOrderByWithRelationInput | BulletPointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BulletPoints.
     */
    cursor?: BulletPointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BulletPoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BulletPoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BulletPoints.
     */
    distinct?: BulletPointScalarFieldEnum | BulletPointScalarFieldEnum[]
  }

  /**
   * BulletPoint findFirstOrThrow
   */
  export type BulletPointFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulletPoint
     */
    select?: BulletPointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BulletPoint
     */
    omit?: BulletPointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulletPointInclude<ExtArgs> | null
    /**
     * Filter, which BulletPoint to fetch.
     */
    where?: BulletPointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BulletPoints to fetch.
     */
    orderBy?: BulletPointOrderByWithRelationInput | BulletPointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BulletPoints.
     */
    cursor?: BulletPointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BulletPoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BulletPoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BulletPoints.
     */
    distinct?: BulletPointScalarFieldEnum | BulletPointScalarFieldEnum[]
  }

  /**
   * BulletPoint findMany
   */
  export type BulletPointFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulletPoint
     */
    select?: BulletPointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BulletPoint
     */
    omit?: BulletPointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulletPointInclude<ExtArgs> | null
    /**
     * Filter, which BulletPoints to fetch.
     */
    where?: BulletPointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BulletPoints to fetch.
     */
    orderBy?: BulletPointOrderByWithRelationInput | BulletPointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BulletPoints.
     */
    cursor?: BulletPointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BulletPoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BulletPoints.
     */
    skip?: number
    distinct?: BulletPointScalarFieldEnum | BulletPointScalarFieldEnum[]
  }

  /**
   * BulletPoint create
   */
  export type BulletPointCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulletPoint
     */
    select?: BulletPointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BulletPoint
     */
    omit?: BulletPointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulletPointInclude<ExtArgs> | null
    /**
     * The data needed to create a BulletPoint.
     */
    data: XOR<BulletPointCreateInput, BulletPointUncheckedCreateInput>
  }

  /**
   * BulletPoint createMany
   */
  export type BulletPointCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BulletPoints.
     */
    data: BulletPointCreateManyInput | BulletPointCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BulletPoint update
   */
  export type BulletPointUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulletPoint
     */
    select?: BulletPointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BulletPoint
     */
    omit?: BulletPointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulletPointInclude<ExtArgs> | null
    /**
     * The data needed to update a BulletPoint.
     */
    data: XOR<BulletPointUpdateInput, BulletPointUncheckedUpdateInput>
    /**
     * Choose, which BulletPoint to update.
     */
    where: BulletPointWhereUniqueInput
  }

  /**
   * BulletPoint updateMany
   */
  export type BulletPointUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BulletPoints.
     */
    data: XOR<BulletPointUpdateManyMutationInput, BulletPointUncheckedUpdateManyInput>
    /**
     * Filter which BulletPoints to update
     */
    where?: BulletPointWhereInput
    /**
     * Limit how many BulletPoints to update.
     */
    limit?: number
  }

  /**
   * BulletPoint upsert
   */
  export type BulletPointUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulletPoint
     */
    select?: BulletPointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BulletPoint
     */
    omit?: BulletPointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulletPointInclude<ExtArgs> | null
    /**
     * The filter to search for the BulletPoint to update in case it exists.
     */
    where: BulletPointWhereUniqueInput
    /**
     * In case the BulletPoint found by the `where` argument doesn't exist, create a new BulletPoint with this data.
     */
    create: XOR<BulletPointCreateInput, BulletPointUncheckedCreateInput>
    /**
     * In case the BulletPoint was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BulletPointUpdateInput, BulletPointUncheckedUpdateInput>
  }

  /**
   * BulletPoint delete
   */
  export type BulletPointDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulletPoint
     */
    select?: BulletPointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BulletPoint
     */
    omit?: BulletPointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulletPointInclude<ExtArgs> | null
    /**
     * Filter which BulletPoint to delete.
     */
    where: BulletPointWhereUniqueInput
  }

  /**
   * BulletPoint deleteMany
   */
  export type BulletPointDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BulletPoints to delete
     */
    where?: BulletPointWhereInput
    /**
     * Limit how many BulletPoints to delete.
     */
    limit?: number
  }

  /**
   * BulletPoint without action
   */
  export type BulletPointDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulletPoint
     */
    select?: BulletPointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BulletPoint
     */
    omit?: BulletPointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulletPointInclude<ExtArgs> | null
  }


  /**
   * Model GroupedBulletPoint
   */

  export type AggregateGroupedBulletPoint = {
    _count: GroupedBulletPointCountAggregateOutputType | null
    _avg: GroupedBulletPointAvgAggregateOutputType | null
    _sum: GroupedBulletPointSumAggregateOutputType | null
    _min: GroupedBulletPointMinAggregateOutputType | null
    _max: GroupedBulletPointMaxAggregateOutputType | null
  }

  export type GroupedBulletPointAvgAggregateOutputType = {
    ordre: number | null
  }

  export type GroupedBulletPointSumAggregateOutputType = {
    ordre: number | null
  }

  export type GroupedBulletPointMinAggregateOutputType = {
    id: string | null
    titre: string | null
    ordre: number | null
    sectionId: string | null
  }

  export type GroupedBulletPointMaxAggregateOutputType = {
    id: string | null
    titre: string | null
    ordre: number | null
    sectionId: string | null
  }

  export type GroupedBulletPointCountAggregateOutputType = {
    id: number
    titre: number
    ordre: number
    sectionId: number
    _all: number
  }


  export type GroupedBulletPointAvgAggregateInputType = {
    ordre?: true
  }

  export type GroupedBulletPointSumAggregateInputType = {
    ordre?: true
  }

  export type GroupedBulletPointMinAggregateInputType = {
    id?: true
    titre?: true
    ordre?: true
    sectionId?: true
  }

  export type GroupedBulletPointMaxAggregateInputType = {
    id?: true
    titre?: true
    ordre?: true
    sectionId?: true
  }

  export type GroupedBulletPointCountAggregateInputType = {
    id?: true
    titre?: true
    ordre?: true
    sectionId?: true
    _all?: true
  }

  export type GroupedBulletPointAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroupedBulletPoint to aggregate.
     */
    where?: GroupedBulletPointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupedBulletPoints to fetch.
     */
    orderBy?: GroupedBulletPointOrderByWithRelationInput | GroupedBulletPointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroupedBulletPointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupedBulletPoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupedBulletPoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GroupedBulletPoints
    **/
    _count?: true | GroupedBulletPointCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GroupedBulletPointAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GroupedBulletPointSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupedBulletPointMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupedBulletPointMaxAggregateInputType
  }

  export type GetGroupedBulletPointAggregateType<T extends GroupedBulletPointAggregateArgs> = {
        [P in keyof T & keyof AggregateGroupedBulletPoint]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroupedBulletPoint[P]>
      : GetScalarType<T[P], AggregateGroupedBulletPoint[P]>
  }




  export type GroupedBulletPointGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupedBulletPointWhereInput
    orderBy?: GroupedBulletPointOrderByWithAggregationInput | GroupedBulletPointOrderByWithAggregationInput[]
    by: GroupedBulletPointScalarFieldEnum[] | GroupedBulletPointScalarFieldEnum
    having?: GroupedBulletPointScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupedBulletPointCountAggregateInputType | true
    _avg?: GroupedBulletPointAvgAggregateInputType
    _sum?: GroupedBulletPointSumAggregateInputType
    _min?: GroupedBulletPointMinAggregateInputType
    _max?: GroupedBulletPointMaxAggregateInputType
  }

  export type GroupedBulletPointGroupByOutputType = {
    id: string
    titre: string
    ordre: number
    sectionId: string
    _count: GroupedBulletPointCountAggregateOutputType | null
    _avg: GroupedBulletPointAvgAggregateOutputType | null
    _sum: GroupedBulletPointSumAggregateOutputType | null
    _min: GroupedBulletPointMinAggregateOutputType | null
    _max: GroupedBulletPointMaxAggregateOutputType | null
  }

  type GetGroupedBulletPointGroupByPayload<T extends GroupedBulletPointGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupedBulletPointGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupedBulletPointGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupedBulletPointGroupByOutputType[P]>
            : GetScalarType<T[P], GroupedBulletPointGroupByOutputType[P]>
        }
      >
    >


  export type GroupedBulletPointSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titre?: boolean
    ordre?: boolean
    sectionId?: boolean
    section?: boolean | SectionDefaultArgs<ExtArgs>
    contents?: boolean | GroupedBulletPoint$contentsArgs<ExtArgs>
    _count?: boolean | GroupedBulletPointCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupedBulletPoint"]>



  export type GroupedBulletPointSelectScalar = {
    id?: boolean
    titre?: boolean
    ordre?: boolean
    sectionId?: boolean
  }

  export type GroupedBulletPointOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titre" | "ordre" | "sectionId", ExtArgs["result"]["groupedBulletPoint"]>
  export type GroupedBulletPointInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    section?: boolean | SectionDefaultArgs<ExtArgs>
    contents?: boolean | GroupedBulletPoint$contentsArgs<ExtArgs>
    _count?: boolean | GroupedBulletPointCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $GroupedBulletPointPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GroupedBulletPoint"
    objects: {
      section: Prisma.$SectionPayload<ExtArgs>
      contents: Prisma.$BulletPointContentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      titre: string
      ordre: number
      sectionId: string
    }, ExtArgs["result"]["groupedBulletPoint"]>
    composites: {}
  }

  type GroupedBulletPointGetPayload<S extends boolean | null | undefined | GroupedBulletPointDefaultArgs> = $Result.GetResult<Prisma.$GroupedBulletPointPayload, S>

  type GroupedBulletPointCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GroupedBulletPointFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GroupedBulletPointCountAggregateInputType | true
    }

  export interface GroupedBulletPointDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GroupedBulletPoint'], meta: { name: 'GroupedBulletPoint' } }
    /**
     * Find zero or one GroupedBulletPoint that matches the filter.
     * @param {GroupedBulletPointFindUniqueArgs} args - Arguments to find a GroupedBulletPoint
     * @example
     * // Get one GroupedBulletPoint
     * const groupedBulletPoint = await prisma.groupedBulletPoint.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GroupedBulletPointFindUniqueArgs>(args: SelectSubset<T, GroupedBulletPointFindUniqueArgs<ExtArgs>>): Prisma__GroupedBulletPointClient<$Result.GetResult<Prisma.$GroupedBulletPointPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GroupedBulletPoint that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GroupedBulletPointFindUniqueOrThrowArgs} args - Arguments to find a GroupedBulletPoint
     * @example
     * // Get one GroupedBulletPoint
     * const groupedBulletPoint = await prisma.groupedBulletPoint.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GroupedBulletPointFindUniqueOrThrowArgs>(args: SelectSubset<T, GroupedBulletPointFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GroupedBulletPointClient<$Result.GetResult<Prisma.$GroupedBulletPointPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GroupedBulletPoint that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupedBulletPointFindFirstArgs} args - Arguments to find a GroupedBulletPoint
     * @example
     * // Get one GroupedBulletPoint
     * const groupedBulletPoint = await prisma.groupedBulletPoint.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GroupedBulletPointFindFirstArgs>(args?: SelectSubset<T, GroupedBulletPointFindFirstArgs<ExtArgs>>): Prisma__GroupedBulletPointClient<$Result.GetResult<Prisma.$GroupedBulletPointPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GroupedBulletPoint that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupedBulletPointFindFirstOrThrowArgs} args - Arguments to find a GroupedBulletPoint
     * @example
     * // Get one GroupedBulletPoint
     * const groupedBulletPoint = await prisma.groupedBulletPoint.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GroupedBulletPointFindFirstOrThrowArgs>(args?: SelectSubset<T, GroupedBulletPointFindFirstOrThrowArgs<ExtArgs>>): Prisma__GroupedBulletPointClient<$Result.GetResult<Prisma.$GroupedBulletPointPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GroupedBulletPoints that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupedBulletPointFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GroupedBulletPoints
     * const groupedBulletPoints = await prisma.groupedBulletPoint.findMany()
     * 
     * // Get first 10 GroupedBulletPoints
     * const groupedBulletPoints = await prisma.groupedBulletPoint.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groupedBulletPointWithIdOnly = await prisma.groupedBulletPoint.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GroupedBulletPointFindManyArgs>(args?: SelectSubset<T, GroupedBulletPointFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupedBulletPointPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GroupedBulletPoint.
     * @param {GroupedBulletPointCreateArgs} args - Arguments to create a GroupedBulletPoint.
     * @example
     * // Create one GroupedBulletPoint
     * const GroupedBulletPoint = await prisma.groupedBulletPoint.create({
     *   data: {
     *     // ... data to create a GroupedBulletPoint
     *   }
     * })
     * 
     */
    create<T extends GroupedBulletPointCreateArgs>(args: SelectSubset<T, GroupedBulletPointCreateArgs<ExtArgs>>): Prisma__GroupedBulletPointClient<$Result.GetResult<Prisma.$GroupedBulletPointPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GroupedBulletPoints.
     * @param {GroupedBulletPointCreateManyArgs} args - Arguments to create many GroupedBulletPoints.
     * @example
     * // Create many GroupedBulletPoints
     * const groupedBulletPoint = await prisma.groupedBulletPoint.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GroupedBulletPointCreateManyArgs>(args?: SelectSubset<T, GroupedBulletPointCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a GroupedBulletPoint.
     * @param {GroupedBulletPointDeleteArgs} args - Arguments to delete one GroupedBulletPoint.
     * @example
     * // Delete one GroupedBulletPoint
     * const GroupedBulletPoint = await prisma.groupedBulletPoint.delete({
     *   where: {
     *     // ... filter to delete one GroupedBulletPoint
     *   }
     * })
     * 
     */
    delete<T extends GroupedBulletPointDeleteArgs>(args: SelectSubset<T, GroupedBulletPointDeleteArgs<ExtArgs>>): Prisma__GroupedBulletPointClient<$Result.GetResult<Prisma.$GroupedBulletPointPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GroupedBulletPoint.
     * @param {GroupedBulletPointUpdateArgs} args - Arguments to update one GroupedBulletPoint.
     * @example
     * // Update one GroupedBulletPoint
     * const groupedBulletPoint = await prisma.groupedBulletPoint.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GroupedBulletPointUpdateArgs>(args: SelectSubset<T, GroupedBulletPointUpdateArgs<ExtArgs>>): Prisma__GroupedBulletPointClient<$Result.GetResult<Prisma.$GroupedBulletPointPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GroupedBulletPoints.
     * @param {GroupedBulletPointDeleteManyArgs} args - Arguments to filter GroupedBulletPoints to delete.
     * @example
     * // Delete a few GroupedBulletPoints
     * const { count } = await prisma.groupedBulletPoint.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GroupedBulletPointDeleteManyArgs>(args?: SelectSubset<T, GroupedBulletPointDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GroupedBulletPoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupedBulletPointUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GroupedBulletPoints
     * const groupedBulletPoint = await prisma.groupedBulletPoint.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GroupedBulletPointUpdateManyArgs>(args: SelectSubset<T, GroupedBulletPointUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GroupedBulletPoint.
     * @param {GroupedBulletPointUpsertArgs} args - Arguments to update or create a GroupedBulletPoint.
     * @example
     * // Update or create a GroupedBulletPoint
     * const groupedBulletPoint = await prisma.groupedBulletPoint.upsert({
     *   create: {
     *     // ... data to create a GroupedBulletPoint
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GroupedBulletPoint we want to update
     *   }
     * })
     */
    upsert<T extends GroupedBulletPointUpsertArgs>(args: SelectSubset<T, GroupedBulletPointUpsertArgs<ExtArgs>>): Prisma__GroupedBulletPointClient<$Result.GetResult<Prisma.$GroupedBulletPointPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GroupedBulletPoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupedBulletPointCountArgs} args - Arguments to filter GroupedBulletPoints to count.
     * @example
     * // Count the number of GroupedBulletPoints
     * const count = await prisma.groupedBulletPoint.count({
     *   where: {
     *     // ... the filter for the GroupedBulletPoints we want to count
     *   }
     * })
    **/
    count<T extends GroupedBulletPointCountArgs>(
      args?: Subset<T, GroupedBulletPointCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupedBulletPointCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GroupedBulletPoint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupedBulletPointAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GroupedBulletPointAggregateArgs>(args: Subset<T, GroupedBulletPointAggregateArgs>): Prisma.PrismaPromise<GetGroupedBulletPointAggregateType<T>>

    /**
     * Group by GroupedBulletPoint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupedBulletPointGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GroupedBulletPointGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupedBulletPointGroupByArgs['orderBy'] }
        : { orderBy?: GroupedBulletPointGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GroupedBulletPointGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupedBulletPointGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GroupedBulletPoint model
   */
  readonly fields: GroupedBulletPointFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GroupedBulletPoint.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroupedBulletPointClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    section<T extends SectionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SectionDefaultArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    contents<T extends GroupedBulletPoint$contentsArgs<ExtArgs> = {}>(args?: Subset<T, GroupedBulletPoint$contentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BulletPointContentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GroupedBulletPoint model
   */
  interface GroupedBulletPointFieldRefs {
    readonly id: FieldRef<"GroupedBulletPoint", 'String'>
    readonly titre: FieldRef<"GroupedBulletPoint", 'String'>
    readonly ordre: FieldRef<"GroupedBulletPoint", 'Int'>
    readonly sectionId: FieldRef<"GroupedBulletPoint", 'String'>
  }
    

  // Custom InputTypes
  /**
   * GroupedBulletPoint findUnique
   */
  export type GroupedBulletPointFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupedBulletPoint
     */
    select?: GroupedBulletPointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupedBulletPoint
     */
    omit?: GroupedBulletPointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupedBulletPointInclude<ExtArgs> | null
    /**
     * Filter, which GroupedBulletPoint to fetch.
     */
    where: GroupedBulletPointWhereUniqueInput
  }

  /**
   * GroupedBulletPoint findUniqueOrThrow
   */
  export type GroupedBulletPointFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupedBulletPoint
     */
    select?: GroupedBulletPointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupedBulletPoint
     */
    omit?: GroupedBulletPointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupedBulletPointInclude<ExtArgs> | null
    /**
     * Filter, which GroupedBulletPoint to fetch.
     */
    where: GroupedBulletPointWhereUniqueInput
  }

  /**
   * GroupedBulletPoint findFirst
   */
  export type GroupedBulletPointFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupedBulletPoint
     */
    select?: GroupedBulletPointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupedBulletPoint
     */
    omit?: GroupedBulletPointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupedBulletPointInclude<ExtArgs> | null
    /**
     * Filter, which GroupedBulletPoint to fetch.
     */
    where?: GroupedBulletPointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupedBulletPoints to fetch.
     */
    orderBy?: GroupedBulletPointOrderByWithRelationInput | GroupedBulletPointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroupedBulletPoints.
     */
    cursor?: GroupedBulletPointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupedBulletPoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupedBulletPoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupedBulletPoints.
     */
    distinct?: GroupedBulletPointScalarFieldEnum | GroupedBulletPointScalarFieldEnum[]
  }

  /**
   * GroupedBulletPoint findFirstOrThrow
   */
  export type GroupedBulletPointFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupedBulletPoint
     */
    select?: GroupedBulletPointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupedBulletPoint
     */
    omit?: GroupedBulletPointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupedBulletPointInclude<ExtArgs> | null
    /**
     * Filter, which GroupedBulletPoint to fetch.
     */
    where?: GroupedBulletPointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupedBulletPoints to fetch.
     */
    orderBy?: GroupedBulletPointOrderByWithRelationInput | GroupedBulletPointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroupedBulletPoints.
     */
    cursor?: GroupedBulletPointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupedBulletPoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupedBulletPoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupedBulletPoints.
     */
    distinct?: GroupedBulletPointScalarFieldEnum | GroupedBulletPointScalarFieldEnum[]
  }

  /**
   * GroupedBulletPoint findMany
   */
  export type GroupedBulletPointFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupedBulletPoint
     */
    select?: GroupedBulletPointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupedBulletPoint
     */
    omit?: GroupedBulletPointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupedBulletPointInclude<ExtArgs> | null
    /**
     * Filter, which GroupedBulletPoints to fetch.
     */
    where?: GroupedBulletPointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupedBulletPoints to fetch.
     */
    orderBy?: GroupedBulletPointOrderByWithRelationInput | GroupedBulletPointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GroupedBulletPoints.
     */
    cursor?: GroupedBulletPointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupedBulletPoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupedBulletPoints.
     */
    skip?: number
    distinct?: GroupedBulletPointScalarFieldEnum | GroupedBulletPointScalarFieldEnum[]
  }

  /**
   * GroupedBulletPoint create
   */
  export type GroupedBulletPointCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupedBulletPoint
     */
    select?: GroupedBulletPointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupedBulletPoint
     */
    omit?: GroupedBulletPointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupedBulletPointInclude<ExtArgs> | null
    /**
     * The data needed to create a GroupedBulletPoint.
     */
    data: XOR<GroupedBulletPointCreateInput, GroupedBulletPointUncheckedCreateInput>
  }

  /**
   * GroupedBulletPoint createMany
   */
  export type GroupedBulletPointCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GroupedBulletPoints.
     */
    data: GroupedBulletPointCreateManyInput | GroupedBulletPointCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GroupedBulletPoint update
   */
  export type GroupedBulletPointUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupedBulletPoint
     */
    select?: GroupedBulletPointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupedBulletPoint
     */
    omit?: GroupedBulletPointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupedBulletPointInclude<ExtArgs> | null
    /**
     * The data needed to update a GroupedBulletPoint.
     */
    data: XOR<GroupedBulletPointUpdateInput, GroupedBulletPointUncheckedUpdateInput>
    /**
     * Choose, which GroupedBulletPoint to update.
     */
    where: GroupedBulletPointWhereUniqueInput
  }

  /**
   * GroupedBulletPoint updateMany
   */
  export type GroupedBulletPointUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GroupedBulletPoints.
     */
    data: XOR<GroupedBulletPointUpdateManyMutationInput, GroupedBulletPointUncheckedUpdateManyInput>
    /**
     * Filter which GroupedBulletPoints to update
     */
    where?: GroupedBulletPointWhereInput
    /**
     * Limit how many GroupedBulletPoints to update.
     */
    limit?: number
  }

  /**
   * GroupedBulletPoint upsert
   */
  export type GroupedBulletPointUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupedBulletPoint
     */
    select?: GroupedBulletPointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupedBulletPoint
     */
    omit?: GroupedBulletPointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupedBulletPointInclude<ExtArgs> | null
    /**
     * The filter to search for the GroupedBulletPoint to update in case it exists.
     */
    where: GroupedBulletPointWhereUniqueInput
    /**
     * In case the GroupedBulletPoint found by the `where` argument doesn't exist, create a new GroupedBulletPoint with this data.
     */
    create: XOR<GroupedBulletPointCreateInput, GroupedBulletPointUncheckedCreateInput>
    /**
     * In case the GroupedBulletPoint was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupedBulletPointUpdateInput, GroupedBulletPointUncheckedUpdateInput>
  }

  /**
   * GroupedBulletPoint delete
   */
  export type GroupedBulletPointDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupedBulletPoint
     */
    select?: GroupedBulletPointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupedBulletPoint
     */
    omit?: GroupedBulletPointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupedBulletPointInclude<ExtArgs> | null
    /**
     * Filter which GroupedBulletPoint to delete.
     */
    where: GroupedBulletPointWhereUniqueInput
  }

  /**
   * GroupedBulletPoint deleteMany
   */
  export type GroupedBulletPointDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroupedBulletPoints to delete
     */
    where?: GroupedBulletPointWhereInput
    /**
     * Limit how many GroupedBulletPoints to delete.
     */
    limit?: number
  }

  /**
   * GroupedBulletPoint.contents
   */
  export type GroupedBulletPoint$contentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulletPointContent
     */
    select?: BulletPointContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BulletPointContent
     */
    omit?: BulletPointContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulletPointContentInclude<ExtArgs> | null
    where?: BulletPointContentWhereInput
    orderBy?: BulletPointContentOrderByWithRelationInput | BulletPointContentOrderByWithRelationInput[]
    cursor?: BulletPointContentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BulletPointContentScalarFieldEnum | BulletPointContentScalarFieldEnum[]
  }

  /**
   * GroupedBulletPoint without action
   */
  export type GroupedBulletPointDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupedBulletPoint
     */
    select?: GroupedBulletPointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupedBulletPoint
     */
    omit?: GroupedBulletPointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupedBulletPointInclude<ExtArgs> | null
  }


  /**
   * Model BulletPointContent
   */

  export type AggregateBulletPointContent = {
    _count: BulletPointContentCountAggregateOutputType | null
    _avg: BulletPointContentAvgAggregateOutputType | null
    _sum: BulletPointContentSumAggregateOutputType | null
    _min: BulletPointContentMinAggregateOutputType | null
    _max: BulletPointContentMaxAggregateOutputType | null
  }

  export type BulletPointContentAvgAggregateOutputType = {
    ordre: number | null
  }

  export type BulletPointContentSumAggregateOutputType = {
    ordre: number | null
  }

  export type BulletPointContentMinAggregateOutputType = {
    id: string | null
    contenu: string | null
    ordre: number | null
    groupId: string | null
  }

  export type BulletPointContentMaxAggregateOutputType = {
    id: string | null
    contenu: string | null
    ordre: number | null
    groupId: string | null
  }

  export type BulletPointContentCountAggregateOutputType = {
    id: number
    contenu: number
    ordre: number
    groupId: number
    _all: number
  }


  export type BulletPointContentAvgAggregateInputType = {
    ordre?: true
  }

  export type BulletPointContentSumAggregateInputType = {
    ordre?: true
  }

  export type BulletPointContentMinAggregateInputType = {
    id?: true
    contenu?: true
    ordre?: true
    groupId?: true
  }

  export type BulletPointContentMaxAggregateInputType = {
    id?: true
    contenu?: true
    ordre?: true
    groupId?: true
  }

  export type BulletPointContentCountAggregateInputType = {
    id?: true
    contenu?: true
    ordre?: true
    groupId?: true
    _all?: true
  }

  export type BulletPointContentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BulletPointContent to aggregate.
     */
    where?: BulletPointContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BulletPointContents to fetch.
     */
    orderBy?: BulletPointContentOrderByWithRelationInput | BulletPointContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BulletPointContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BulletPointContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BulletPointContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BulletPointContents
    **/
    _count?: true | BulletPointContentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BulletPointContentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BulletPointContentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BulletPointContentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BulletPointContentMaxAggregateInputType
  }

  export type GetBulletPointContentAggregateType<T extends BulletPointContentAggregateArgs> = {
        [P in keyof T & keyof AggregateBulletPointContent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBulletPointContent[P]>
      : GetScalarType<T[P], AggregateBulletPointContent[P]>
  }




  export type BulletPointContentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BulletPointContentWhereInput
    orderBy?: BulletPointContentOrderByWithAggregationInput | BulletPointContentOrderByWithAggregationInput[]
    by: BulletPointContentScalarFieldEnum[] | BulletPointContentScalarFieldEnum
    having?: BulletPointContentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BulletPointContentCountAggregateInputType | true
    _avg?: BulletPointContentAvgAggregateInputType
    _sum?: BulletPointContentSumAggregateInputType
    _min?: BulletPointContentMinAggregateInputType
    _max?: BulletPointContentMaxAggregateInputType
  }

  export type BulletPointContentGroupByOutputType = {
    id: string
    contenu: string | null
    ordre: number
    groupId: string
    _count: BulletPointContentCountAggregateOutputType | null
    _avg: BulletPointContentAvgAggregateOutputType | null
    _sum: BulletPointContentSumAggregateOutputType | null
    _min: BulletPointContentMinAggregateOutputType | null
    _max: BulletPointContentMaxAggregateOutputType | null
  }

  type GetBulletPointContentGroupByPayload<T extends BulletPointContentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BulletPointContentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BulletPointContentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BulletPointContentGroupByOutputType[P]>
            : GetScalarType<T[P], BulletPointContentGroupByOutputType[P]>
        }
      >
    >


  export type BulletPointContentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contenu?: boolean
    ordre?: boolean
    groupId?: boolean
    group?: boolean | GroupedBulletPointDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bulletPointContent"]>



  export type BulletPointContentSelectScalar = {
    id?: boolean
    contenu?: boolean
    ordre?: boolean
    groupId?: boolean
  }

  export type BulletPointContentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "contenu" | "ordre" | "groupId", ExtArgs["result"]["bulletPointContent"]>
  export type BulletPointContentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupedBulletPointDefaultArgs<ExtArgs>
  }

  export type $BulletPointContentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BulletPointContent"
    objects: {
      group: Prisma.$GroupedBulletPointPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      contenu: string | null
      ordre: number
      groupId: string
    }, ExtArgs["result"]["bulletPointContent"]>
    composites: {}
  }

  type BulletPointContentGetPayload<S extends boolean | null | undefined | BulletPointContentDefaultArgs> = $Result.GetResult<Prisma.$BulletPointContentPayload, S>

  type BulletPointContentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BulletPointContentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BulletPointContentCountAggregateInputType | true
    }

  export interface BulletPointContentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BulletPointContent'], meta: { name: 'BulletPointContent' } }
    /**
     * Find zero or one BulletPointContent that matches the filter.
     * @param {BulletPointContentFindUniqueArgs} args - Arguments to find a BulletPointContent
     * @example
     * // Get one BulletPointContent
     * const bulletPointContent = await prisma.bulletPointContent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BulletPointContentFindUniqueArgs>(args: SelectSubset<T, BulletPointContentFindUniqueArgs<ExtArgs>>): Prisma__BulletPointContentClient<$Result.GetResult<Prisma.$BulletPointContentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BulletPointContent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BulletPointContentFindUniqueOrThrowArgs} args - Arguments to find a BulletPointContent
     * @example
     * // Get one BulletPointContent
     * const bulletPointContent = await prisma.bulletPointContent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BulletPointContentFindUniqueOrThrowArgs>(args: SelectSubset<T, BulletPointContentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BulletPointContentClient<$Result.GetResult<Prisma.$BulletPointContentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BulletPointContent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BulletPointContentFindFirstArgs} args - Arguments to find a BulletPointContent
     * @example
     * // Get one BulletPointContent
     * const bulletPointContent = await prisma.bulletPointContent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BulletPointContentFindFirstArgs>(args?: SelectSubset<T, BulletPointContentFindFirstArgs<ExtArgs>>): Prisma__BulletPointContentClient<$Result.GetResult<Prisma.$BulletPointContentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BulletPointContent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BulletPointContentFindFirstOrThrowArgs} args - Arguments to find a BulletPointContent
     * @example
     * // Get one BulletPointContent
     * const bulletPointContent = await prisma.bulletPointContent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BulletPointContentFindFirstOrThrowArgs>(args?: SelectSubset<T, BulletPointContentFindFirstOrThrowArgs<ExtArgs>>): Prisma__BulletPointContentClient<$Result.GetResult<Prisma.$BulletPointContentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BulletPointContents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BulletPointContentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BulletPointContents
     * const bulletPointContents = await prisma.bulletPointContent.findMany()
     * 
     * // Get first 10 BulletPointContents
     * const bulletPointContents = await prisma.bulletPointContent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bulletPointContentWithIdOnly = await prisma.bulletPointContent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BulletPointContentFindManyArgs>(args?: SelectSubset<T, BulletPointContentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BulletPointContentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BulletPointContent.
     * @param {BulletPointContentCreateArgs} args - Arguments to create a BulletPointContent.
     * @example
     * // Create one BulletPointContent
     * const BulletPointContent = await prisma.bulletPointContent.create({
     *   data: {
     *     // ... data to create a BulletPointContent
     *   }
     * })
     * 
     */
    create<T extends BulletPointContentCreateArgs>(args: SelectSubset<T, BulletPointContentCreateArgs<ExtArgs>>): Prisma__BulletPointContentClient<$Result.GetResult<Prisma.$BulletPointContentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BulletPointContents.
     * @param {BulletPointContentCreateManyArgs} args - Arguments to create many BulletPointContents.
     * @example
     * // Create many BulletPointContents
     * const bulletPointContent = await prisma.bulletPointContent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BulletPointContentCreateManyArgs>(args?: SelectSubset<T, BulletPointContentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BulletPointContent.
     * @param {BulletPointContentDeleteArgs} args - Arguments to delete one BulletPointContent.
     * @example
     * // Delete one BulletPointContent
     * const BulletPointContent = await prisma.bulletPointContent.delete({
     *   where: {
     *     // ... filter to delete one BulletPointContent
     *   }
     * })
     * 
     */
    delete<T extends BulletPointContentDeleteArgs>(args: SelectSubset<T, BulletPointContentDeleteArgs<ExtArgs>>): Prisma__BulletPointContentClient<$Result.GetResult<Prisma.$BulletPointContentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BulletPointContent.
     * @param {BulletPointContentUpdateArgs} args - Arguments to update one BulletPointContent.
     * @example
     * // Update one BulletPointContent
     * const bulletPointContent = await prisma.bulletPointContent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BulletPointContentUpdateArgs>(args: SelectSubset<T, BulletPointContentUpdateArgs<ExtArgs>>): Prisma__BulletPointContentClient<$Result.GetResult<Prisma.$BulletPointContentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BulletPointContents.
     * @param {BulletPointContentDeleteManyArgs} args - Arguments to filter BulletPointContents to delete.
     * @example
     * // Delete a few BulletPointContents
     * const { count } = await prisma.bulletPointContent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BulletPointContentDeleteManyArgs>(args?: SelectSubset<T, BulletPointContentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BulletPointContents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BulletPointContentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BulletPointContents
     * const bulletPointContent = await prisma.bulletPointContent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BulletPointContentUpdateManyArgs>(args: SelectSubset<T, BulletPointContentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BulletPointContent.
     * @param {BulletPointContentUpsertArgs} args - Arguments to update or create a BulletPointContent.
     * @example
     * // Update or create a BulletPointContent
     * const bulletPointContent = await prisma.bulletPointContent.upsert({
     *   create: {
     *     // ... data to create a BulletPointContent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BulletPointContent we want to update
     *   }
     * })
     */
    upsert<T extends BulletPointContentUpsertArgs>(args: SelectSubset<T, BulletPointContentUpsertArgs<ExtArgs>>): Prisma__BulletPointContentClient<$Result.GetResult<Prisma.$BulletPointContentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BulletPointContents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BulletPointContentCountArgs} args - Arguments to filter BulletPointContents to count.
     * @example
     * // Count the number of BulletPointContents
     * const count = await prisma.bulletPointContent.count({
     *   where: {
     *     // ... the filter for the BulletPointContents we want to count
     *   }
     * })
    **/
    count<T extends BulletPointContentCountArgs>(
      args?: Subset<T, BulletPointContentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BulletPointContentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BulletPointContent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BulletPointContentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BulletPointContentAggregateArgs>(args: Subset<T, BulletPointContentAggregateArgs>): Prisma.PrismaPromise<GetBulletPointContentAggregateType<T>>

    /**
     * Group by BulletPointContent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BulletPointContentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BulletPointContentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BulletPointContentGroupByArgs['orderBy'] }
        : { orderBy?: BulletPointContentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BulletPointContentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBulletPointContentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BulletPointContent model
   */
  readonly fields: BulletPointContentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BulletPointContent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BulletPointContentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    group<T extends GroupedBulletPointDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GroupedBulletPointDefaultArgs<ExtArgs>>): Prisma__GroupedBulletPointClient<$Result.GetResult<Prisma.$GroupedBulletPointPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BulletPointContent model
   */
  interface BulletPointContentFieldRefs {
    readonly id: FieldRef<"BulletPointContent", 'String'>
    readonly contenu: FieldRef<"BulletPointContent", 'String'>
    readonly ordre: FieldRef<"BulletPointContent", 'Int'>
    readonly groupId: FieldRef<"BulletPointContent", 'String'>
  }
    

  // Custom InputTypes
  /**
   * BulletPointContent findUnique
   */
  export type BulletPointContentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulletPointContent
     */
    select?: BulletPointContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BulletPointContent
     */
    omit?: BulletPointContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulletPointContentInclude<ExtArgs> | null
    /**
     * Filter, which BulletPointContent to fetch.
     */
    where: BulletPointContentWhereUniqueInput
  }

  /**
   * BulletPointContent findUniqueOrThrow
   */
  export type BulletPointContentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulletPointContent
     */
    select?: BulletPointContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BulletPointContent
     */
    omit?: BulletPointContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulletPointContentInclude<ExtArgs> | null
    /**
     * Filter, which BulletPointContent to fetch.
     */
    where: BulletPointContentWhereUniqueInput
  }

  /**
   * BulletPointContent findFirst
   */
  export type BulletPointContentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulletPointContent
     */
    select?: BulletPointContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BulletPointContent
     */
    omit?: BulletPointContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulletPointContentInclude<ExtArgs> | null
    /**
     * Filter, which BulletPointContent to fetch.
     */
    where?: BulletPointContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BulletPointContents to fetch.
     */
    orderBy?: BulletPointContentOrderByWithRelationInput | BulletPointContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BulletPointContents.
     */
    cursor?: BulletPointContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BulletPointContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BulletPointContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BulletPointContents.
     */
    distinct?: BulletPointContentScalarFieldEnum | BulletPointContentScalarFieldEnum[]
  }

  /**
   * BulletPointContent findFirstOrThrow
   */
  export type BulletPointContentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulletPointContent
     */
    select?: BulletPointContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BulletPointContent
     */
    omit?: BulletPointContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulletPointContentInclude<ExtArgs> | null
    /**
     * Filter, which BulletPointContent to fetch.
     */
    where?: BulletPointContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BulletPointContents to fetch.
     */
    orderBy?: BulletPointContentOrderByWithRelationInput | BulletPointContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BulletPointContents.
     */
    cursor?: BulletPointContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BulletPointContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BulletPointContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BulletPointContents.
     */
    distinct?: BulletPointContentScalarFieldEnum | BulletPointContentScalarFieldEnum[]
  }

  /**
   * BulletPointContent findMany
   */
  export type BulletPointContentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulletPointContent
     */
    select?: BulletPointContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BulletPointContent
     */
    omit?: BulletPointContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulletPointContentInclude<ExtArgs> | null
    /**
     * Filter, which BulletPointContents to fetch.
     */
    where?: BulletPointContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BulletPointContents to fetch.
     */
    orderBy?: BulletPointContentOrderByWithRelationInput | BulletPointContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BulletPointContents.
     */
    cursor?: BulletPointContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BulletPointContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BulletPointContents.
     */
    skip?: number
    distinct?: BulletPointContentScalarFieldEnum | BulletPointContentScalarFieldEnum[]
  }

  /**
   * BulletPointContent create
   */
  export type BulletPointContentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulletPointContent
     */
    select?: BulletPointContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BulletPointContent
     */
    omit?: BulletPointContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulletPointContentInclude<ExtArgs> | null
    /**
     * The data needed to create a BulletPointContent.
     */
    data: XOR<BulletPointContentCreateInput, BulletPointContentUncheckedCreateInput>
  }

  /**
   * BulletPointContent createMany
   */
  export type BulletPointContentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BulletPointContents.
     */
    data: BulletPointContentCreateManyInput | BulletPointContentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BulletPointContent update
   */
  export type BulletPointContentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulletPointContent
     */
    select?: BulletPointContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BulletPointContent
     */
    omit?: BulletPointContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulletPointContentInclude<ExtArgs> | null
    /**
     * The data needed to update a BulletPointContent.
     */
    data: XOR<BulletPointContentUpdateInput, BulletPointContentUncheckedUpdateInput>
    /**
     * Choose, which BulletPointContent to update.
     */
    where: BulletPointContentWhereUniqueInput
  }

  /**
   * BulletPointContent updateMany
   */
  export type BulletPointContentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BulletPointContents.
     */
    data: XOR<BulletPointContentUpdateManyMutationInput, BulletPointContentUncheckedUpdateManyInput>
    /**
     * Filter which BulletPointContents to update
     */
    where?: BulletPointContentWhereInput
    /**
     * Limit how many BulletPointContents to update.
     */
    limit?: number
  }

  /**
   * BulletPointContent upsert
   */
  export type BulletPointContentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulletPointContent
     */
    select?: BulletPointContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BulletPointContent
     */
    omit?: BulletPointContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulletPointContentInclude<ExtArgs> | null
    /**
     * The filter to search for the BulletPointContent to update in case it exists.
     */
    where: BulletPointContentWhereUniqueInput
    /**
     * In case the BulletPointContent found by the `where` argument doesn't exist, create a new BulletPointContent with this data.
     */
    create: XOR<BulletPointContentCreateInput, BulletPointContentUncheckedCreateInput>
    /**
     * In case the BulletPointContent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BulletPointContentUpdateInput, BulletPointContentUncheckedUpdateInput>
  }

  /**
   * BulletPointContent delete
   */
  export type BulletPointContentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulletPointContent
     */
    select?: BulletPointContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BulletPointContent
     */
    omit?: BulletPointContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulletPointContentInclude<ExtArgs> | null
    /**
     * Filter which BulletPointContent to delete.
     */
    where: BulletPointContentWhereUniqueInput
  }

  /**
   * BulletPointContent deleteMany
   */
  export type BulletPointContentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BulletPointContents to delete
     */
    where?: BulletPointContentWhereInput
    /**
     * Limit how many BulletPointContents to delete.
     */
    limit?: number
  }

  /**
   * BulletPointContent without action
   */
  export type BulletPointContentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BulletPointContent
     */
    select?: BulletPointContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BulletPointContent
     */
    omit?: BulletPointContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BulletPointContentInclude<ExtArgs> | null
  }


  /**
   * Model Image
   */

  export type AggregateImage = {
    _count: ImageCountAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  export type ImageMinAggregateOutputType = {
    id: string | null
    url: string | null
    alt: string | null
    sectionId: string | null
  }

  export type ImageMaxAggregateOutputType = {
    id: string | null
    url: string | null
    alt: string | null
    sectionId: string | null
  }

  export type ImageCountAggregateOutputType = {
    id: number
    url: number
    alt: number
    sectionId: number
    _all: number
  }


  export type ImageMinAggregateInputType = {
    id?: true
    url?: true
    alt?: true
    sectionId?: true
  }

  export type ImageMaxAggregateInputType = {
    id?: true
    url?: true
    alt?: true
    sectionId?: true
  }

  export type ImageCountAggregateInputType = {
    id?: true
    url?: true
    alt?: true
    sectionId?: true
    _all?: true
  }

  export type ImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Image to aggregate.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Images
    **/
    _count?: true | ImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImageMaxAggregateInputType
  }

  export type GetImageAggregateType<T extends ImageAggregateArgs> = {
        [P in keyof T & keyof AggregateImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImage[P]>
      : GetScalarType<T[P], AggregateImage[P]>
  }




  export type ImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput
    orderBy?: ImageOrderByWithAggregationInput | ImageOrderByWithAggregationInput[]
    by: ImageScalarFieldEnum[] | ImageScalarFieldEnum
    having?: ImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImageCountAggregateInputType | true
    _min?: ImageMinAggregateInputType
    _max?: ImageMaxAggregateInputType
  }

  export type ImageGroupByOutputType = {
    id: string
    url: string
    alt: string | null
    sectionId: string
    _count: ImageCountAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  type GetImageGroupByPayload<T extends ImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImageGroupByOutputType[P]>
            : GetScalarType<T[P], ImageGroupByOutputType[P]>
        }
      >
    >


  export type ImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    alt?: boolean
    sectionId?: boolean
    section?: boolean | SectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["image"]>



  export type ImageSelectScalar = {
    id?: boolean
    url?: boolean
    alt?: boolean
    sectionId?: boolean
  }

  export type ImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "alt" | "sectionId", ExtArgs["result"]["image"]>
  export type ImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    section?: boolean | SectionDefaultArgs<ExtArgs>
  }

  export type $ImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Image"
    objects: {
      section: Prisma.$SectionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      url: string
      alt: string | null
      sectionId: string
    }, ExtArgs["result"]["image"]>
    composites: {}
  }

  type ImageGetPayload<S extends boolean | null | undefined | ImageDefaultArgs> = $Result.GetResult<Prisma.$ImagePayload, S>

  type ImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ImageCountAggregateInputType | true
    }

  export interface ImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Image'], meta: { name: 'Image' } }
    /**
     * Find zero or one Image that matches the filter.
     * @param {ImageFindUniqueArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ImageFindUniqueArgs>(args: SelectSubset<T, ImageFindUniqueArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Image that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ImageFindUniqueOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ImageFindUniqueOrThrowArgs>(args: SelectSubset<T, ImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Image that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ImageFindFirstArgs>(args?: SelectSubset<T, ImageFindFirstArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Image that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ImageFindFirstOrThrowArgs>(args?: SelectSubset<T, ImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Images
     * const images = await prisma.image.findMany()
     * 
     * // Get first 10 Images
     * const images = await prisma.image.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imageWithIdOnly = await prisma.image.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ImageFindManyArgs>(args?: SelectSubset<T, ImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Image.
     * @param {ImageCreateArgs} args - Arguments to create a Image.
     * @example
     * // Create one Image
     * const Image = await prisma.image.create({
     *   data: {
     *     // ... data to create a Image
     *   }
     * })
     * 
     */
    create<T extends ImageCreateArgs>(args: SelectSubset<T, ImageCreateArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Images.
     * @param {ImageCreateManyArgs} args - Arguments to create many Images.
     * @example
     * // Create many Images
     * const image = await prisma.image.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ImageCreateManyArgs>(args?: SelectSubset<T, ImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Image.
     * @param {ImageDeleteArgs} args - Arguments to delete one Image.
     * @example
     * // Delete one Image
     * const Image = await prisma.image.delete({
     *   where: {
     *     // ... filter to delete one Image
     *   }
     * })
     * 
     */
    delete<T extends ImageDeleteArgs>(args: SelectSubset<T, ImageDeleteArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Image.
     * @param {ImageUpdateArgs} args - Arguments to update one Image.
     * @example
     * // Update one Image
     * const image = await prisma.image.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ImageUpdateArgs>(args: SelectSubset<T, ImageUpdateArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Images.
     * @param {ImageDeleteManyArgs} args - Arguments to filter Images to delete.
     * @example
     * // Delete a few Images
     * const { count } = await prisma.image.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ImageDeleteManyArgs>(args?: SelectSubset<T, ImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Images
     * const image = await prisma.image.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ImageUpdateManyArgs>(args: SelectSubset<T, ImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Image.
     * @param {ImageUpsertArgs} args - Arguments to update or create a Image.
     * @example
     * // Update or create a Image
     * const image = await prisma.image.upsert({
     *   create: {
     *     // ... data to create a Image
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Image we want to update
     *   }
     * })
     */
    upsert<T extends ImageUpsertArgs>(args: SelectSubset<T, ImageUpsertArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageCountArgs} args - Arguments to filter Images to count.
     * @example
     * // Count the number of Images
     * const count = await prisma.image.count({
     *   where: {
     *     // ... the filter for the Images we want to count
     *   }
     * })
    **/
    count<T extends ImageCountArgs>(
      args?: Subset<T, ImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ImageAggregateArgs>(args: Subset<T, ImageAggregateArgs>): Prisma.PrismaPromise<GetImageAggregateType<T>>

    /**
     * Group by Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImageGroupByArgs['orderBy'] }
        : { orderBy?: ImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Image model
   */
  readonly fields: ImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Image.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    section<T extends SectionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SectionDefaultArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Image model
   */
  interface ImageFieldRefs {
    readonly id: FieldRef<"Image", 'String'>
    readonly url: FieldRef<"Image", 'String'>
    readonly alt: FieldRef<"Image", 'String'>
    readonly sectionId: FieldRef<"Image", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Image findUnique
   */
  export type ImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image findUniqueOrThrow
   */
  export type ImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image findFirst
   */
  export type ImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image findFirstOrThrow
   */
  export type ImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image findMany
   */
  export type ImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Images to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image create
   */
  export type ImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The data needed to create a Image.
     */
    data: XOR<ImageCreateInput, ImageUncheckedCreateInput>
  }

  /**
   * Image createMany
   */
  export type ImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Images.
     */
    data: ImageCreateManyInput | ImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Image update
   */
  export type ImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The data needed to update a Image.
     */
    data: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
    /**
     * Choose, which Image to update.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image updateMany
   */
  export type ImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Images.
     */
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyInput>
    /**
     * Filter which Images to update
     */
    where?: ImageWhereInput
    /**
     * Limit how many Images to update.
     */
    limit?: number
  }

  /**
   * Image upsert
   */
  export type ImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The filter to search for the Image to update in case it exists.
     */
    where: ImageWhereUniqueInput
    /**
     * In case the Image found by the `where` argument doesn't exist, create a new Image with this data.
     */
    create: XOR<ImageCreateInput, ImageUncheckedCreateInput>
    /**
     * In case the Image was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
  }

  /**
   * Image delete
   */
  export type ImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter which Image to delete.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image deleteMany
   */
  export type ImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Images to delete
     */
    where?: ImageWhereInput
    /**
     * Limit how many Images to delete.
     */
    limit?: number
  }

  /**
   * Image without action
   */
  export type ImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
  }


  /**
   * Model Checklist
   */

  export type AggregateChecklist = {
    _count: ChecklistCountAggregateOutputType | null
    _avg: ChecklistAvgAggregateOutputType | null
    _sum: ChecklistSumAggregateOutputType | null
    _min: ChecklistMinAggregateOutputType | null
    _max: ChecklistMaxAggregateOutputType | null
  }

  export type ChecklistAvgAggregateOutputType = {
    userId: number | null
  }

  export type ChecklistSumAggregateOutputType = {
    userId: number | null
  }

  export type ChecklistMinAggregateOutputType = {
    id: string | null
    titre: string | null
    userId: number | null
    voyageId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChecklistMaxAggregateOutputType = {
    id: string | null
    titre: string | null
    userId: number | null
    voyageId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChecklistCountAggregateOutputType = {
    id: number
    titre: number
    userId: number
    voyageId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ChecklistAvgAggregateInputType = {
    userId?: true
  }

  export type ChecklistSumAggregateInputType = {
    userId?: true
  }

  export type ChecklistMinAggregateInputType = {
    id?: true
    titre?: true
    userId?: true
    voyageId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChecklistMaxAggregateInputType = {
    id?: true
    titre?: true
    userId?: true
    voyageId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChecklistCountAggregateInputType = {
    id?: true
    titre?: true
    userId?: true
    voyageId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ChecklistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Checklist to aggregate.
     */
    where?: ChecklistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Checklists to fetch.
     */
    orderBy?: ChecklistOrderByWithRelationInput | ChecklistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChecklistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Checklists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Checklists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Checklists
    **/
    _count?: true | ChecklistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChecklistAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChecklistSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChecklistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChecklistMaxAggregateInputType
  }

  export type GetChecklistAggregateType<T extends ChecklistAggregateArgs> = {
        [P in keyof T & keyof AggregateChecklist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChecklist[P]>
      : GetScalarType<T[P], AggregateChecklist[P]>
  }




  export type ChecklistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChecklistWhereInput
    orderBy?: ChecklistOrderByWithAggregationInput | ChecklistOrderByWithAggregationInput[]
    by: ChecklistScalarFieldEnum[] | ChecklistScalarFieldEnum
    having?: ChecklistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChecklistCountAggregateInputType | true
    _avg?: ChecklistAvgAggregateInputType
    _sum?: ChecklistSumAggregateInputType
    _min?: ChecklistMinAggregateInputType
    _max?: ChecklistMaxAggregateInputType
  }

  export type ChecklistGroupByOutputType = {
    id: string
    titre: string
    userId: number
    voyageId: string
    createdAt: Date
    updatedAt: Date
    _count: ChecklistCountAggregateOutputType | null
    _avg: ChecklistAvgAggregateOutputType | null
    _sum: ChecklistSumAggregateOutputType | null
    _min: ChecklistMinAggregateOutputType | null
    _max: ChecklistMaxAggregateOutputType | null
  }

  type GetChecklistGroupByPayload<T extends ChecklistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChecklistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChecklistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChecklistGroupByOutputType[P]>
            : GetScalarType<T[P], ChecklistGroupByOutputType[P]>
        }
      >
    >


  export type ChecklistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titre?: boolean
    userId?: boolean
    voyageId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    categories?: boolean | Checklist$categoriesArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    voyage?: boolean | DestinationDefaultArgs<ExtArgs>
    _count?: boolean | ChecklistCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["checklist"]>



  export type ChecklistSelectScalar = {
    id?: boolean
    titre?: boolean
    userId?: boolean
    voyageId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ChecklistOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titre" | "userId" | "voyageId" | "createdAt" | "updatedAt", ExtArgs["result"]["checklist"]>
  export type ChecklistInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | Checklist$categoriesArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    voyage?: boolean | DestinationDefaultArgs<ExtArgs>
    _count?: boolean | ChecklistCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ChecklistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Checklist"
    objects: {
      categories: Prisma.$ChecklistCategoryPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
      voyage: Prisma.$DestinationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      titre: string
      userId: number
      voyageId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["checklist"]>
    composites: {}
  }

  type ChecklistGetPayload<S extends boolean | null | undefined | ChecklistDefaultArgs> = $Result.GetResult<Prisma.$ChecklistPayload, S>

  type ChecklistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChecklistFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChecklistCountAggregateInputType | true
    }

  export interface ChecklistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Checklist'], meta: { name: 'Checklist' } }
    /**
     * Find zero or one Checklist that matches the filter.
     * @param {ChecklistFindUniqueArgs} args - Arguments to find a Checklist
     * @example
     * // Get one Checklist
     * const checklist = await prisma.checklist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChecklistFindUniqueArgs>(args: SelectSubset<T, ChecklistFindUniqueArgs<ExtArgs>>): Prisma__ChecklistClient<$Result.GetResult<Prisma.$ChecklistPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Checklist that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChecklistFindUniqueOrThrowArgs} args - Arguments to find a Checklist
     * @example
     * // Get one Checklist
     * const checklist = await prisma.checklist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChecklistFindUniqueOrThrowArgs>(args: SelectSubset<T, ChecklistFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChecklistClient<$Result.GetResult<Prisma.$ChecklistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Checklist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChecklistFindFirstArgs} args - Arguments to find a Checklist
     * @example
     * // Get one Checklist
     * const checklist = await prisma.checklist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChecklistFindFirstArgs>(args?: SelectSubset<T, ChecklistFindFirstArgs<ExtArgs>>): Prisma__ChecklistClient<$Result.GetResult<Prisma.$ChecklistPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Checklist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChecklistFindFirstOrThrowArgs} args - Arguments to find a Checklist
     * @example
     * // Get one Checklist
     * const checklist = await prisma.checklist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChecklistFindFirstOrThrowArgs>(args?: SelectSubset<T, ChecklistFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChecklistClient<$Result.GetResult<Prisma.$ChecklistPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Checklists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChecklistFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Checklists
     * const checklists = await prisma.checklist.findMany()
     * 
     * // Get first 10 Checklists
     * const checklists = await prisma.checklist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const checklistWithIdOnly = await prisma.checklist.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChecklistFindManyArgs>(args?: SelectSubset<T, ChecklistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChecklistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Checklist.
     * @param {ChecklistCreateArgs} args - Arguments to create a Checklist.
     * @example
     * // Create one Checklist
     * const Checklist = await prisma.checklist.create({
     *   data: {
     *     // ... data to create a Checklist
     *   }
     * })
     * 
     */
    create<T extends ChecklistCreateArgs>(args: SelectSubset<T, ChecklistCreateArgs<ExtArgs>>): Prisma__ChecklistClient<$Result.GetResult<Prisma.$ChecklistPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Checklists.
     * @param {ChecklistCreateManyArgs} args - Arguments to create many Checklists.
     * @example
     * // Create many Checklists
     * const checklist = await prisma.checklist.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChecklistCreateManyArgs>(args?: SelectSubset<T, ChecklistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Checklist.
     * @param {ChecklistDeleteArgs} args - Arguments to delete one Checklist.
     * @example
     * // Delete one Checklist
     * const Checklist = await prisma.checklist.delete({
     *   where: {
     *     // ... filter to delete one Checklist
     *   }
     * })
     * 
     */
    delete<T extends ChecklistDeleteArgs>(args: SelectSubset<T, ChecklistDeleteArgs<ExtArgs>>): Prisma__ChecklistClient<$Result.GetResult<Prisma.$ChecklistPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Checklist.
     * @param {ChecklistUpdateArgs} args - Arguments to update one Checklist.
     * @example
     * // Update one Checklist
     * const checklist = await prisma.checklist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChecklistUpdateArgs>(args: SelectSubset<T, ChecklistUpdateArgs<ExtArgs>>): Prisma__ChecklistClient<$Result.GetResult<Prisma.$ChecklistPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Checklists.
     * @param {ChecklistDeleteManyArgs} args - Arguments to filter Checklists to delete.
     * @example
     * // Delete a few Checklists
     * const { count } = await prisma.checklist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChecklistDeleteManyArgs>(args?: SelectSubset<T, ChecklistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Checklists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChecklistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Checklists
     * const checklist = await prisma.checklist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChecklistUpdateManyArgs>(args: SelectSubset<T, ChecklistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Checklist.
     * @param {ChecklistUpsertArgs} args - Arguments to update or create a Checklist.
     * @example
     * // Update or create a Checklist
     * const checklist = await prisma.checklist.upsert({
     *   create: {
     *     // ... data to create a Checklist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Checklist we want to update
     *   }
     * })
     */
    upsert<T extends ChecklistUpsertArgs>(args: SelectSubset<T, ChecklistUpsertArgs<ExtArgs>>): Prisma__ChecklistClient<$Result.GetResult<Prisma.$ChecklistPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Checklists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChecklistCountArgs} args - Arguments to filter Checklists to count.
     * @example
     * // Count the number of Checklists
     * const count = await prisma.checklist.count({
     *   where: {
     *     // ... the filter for the Checklists we want to count
     *   }
     * })
    **/
    count<T extends ChecklistCountArgs>(
      args?: Subset<T, ChecklistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChecklistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Checklist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChecklistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChecklistAggregateArgs>(args: Subset<T, ChecklistAggregateArgs>): Prisma.PrismaPromise<GetChecklistAggregateType<T>>

    /**
     * Group by Checklist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChecklistGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChecklistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChecklistGroupByArgs['orderBy'] }
        : { orderBy?: ChecklistGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChecklistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChecklistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Checklist model
   */
  readonly fields: ChecklistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Checklist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChecklistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categories<T extends Checklist$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, Checklist$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChecklistCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    voyage<T extends DestinationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DestinationDefaultArgs<ExtArgs>>): Prisma__DestinationClient<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Checklist model
   */
  interface ChecklistFieldRefs {
    readonly id: FieldRef<"Checklist", 'String'>
    readonly titre: FieldRef<"Checklist", 'String'>
    readonly userId: FieldRef<"Checklist", 'Int'>
    readonly voyageId: FieldRef<"Checklist", 'String'>
    readonly createdAt: FieldRef<"Checklist", 'DateTime'>
    readonly updatedAt: FieldRef<"Checklist", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Checklist findUnique
   */
  export type ChecklistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checklist
     */
    select?: ChecklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checklist
     */
    omit?: ChecklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistInclude<ExtArgs> | null
    /**
     * Filter, which Checklist to fetch.
     */
    where: ChecklistWhereUniqueInput
  }

  /**
   * Checklist findUniqueOrThrow
   */
  export type ChecklistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checklist
     */
    select?: ChecklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checklist
     */
    omit?: ChecklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistInclude<ExtArgs> | null
    /**
     * Filter, which Checklist to fetch.
     */
    where: ChecklistWhereUniqueInput
  }

  /**
   * Checklist findFirst
   */
  export type ChecklistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checklist
     */
    select?: ChecklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checklist
     */
    omit?: ChecklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistInclude<ExtArgs> | null
    /**
     * Filter, which Checklist to fetch.
     */
    where?: ChecklistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Checklists to fetch.
     */
    orderBy?: ChecklistOrderByWithRelationInput | ChecklistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Checklists.
     */
    cursor?: ChecklistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Checklists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Checklists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Checklists.
     */
    distinct?: ChecklistScalarFieldEnum | ChecklistScalarFieldEnum[]
  }

  /**
   * Checklist findFirstOrThrow
   */
  export type ChecklistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checklist
     */
    select?: ChecklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checklist
     */
    omit?: ChecklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistInclude<ExtArgs> | null
    /**
     * Filter, which Checklist to fetch.
     */
    where?: ChecklistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Checklists to fetch.
     */
    orderBy?: ChecklistOrderByWithRelationInput | ChecklistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Checklists.
     */
    cursor?: ChecklistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Checklists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Checklists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Checklists.
     */
    distinct?: ChecklistScalarFieldEnum | ChecklistScalarFieldEnum[]
  }

  /**
   * Checklist findMany
   */
  export type ChecklistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checklist
     */
    select?: ChecklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checklist
     */
    omit?: ChecklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistInclude<ExtArgs> | null
    /**
     * Filter, which Checklists to fetch.
     */
    where?: ChecklistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Checklists to fetch.
     */
    orderBy?: ChecklistOrderByWithRelationInput | ChecklistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Checklists.
     */
    cursor?: ChecklistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Checklists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Checklists.
     */
    skip?: number
    distinct?: ChecklistScalarFieldEnum | ChecklistScalarFieldEnum[]
  }

  /**
   * Checklist create
   */
  export type ChecklistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checklist
     */
    select?: ChecklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checklist
     */
    omit?: ChecklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistInclude<ExtArgs> | null
    /**
     * The data needed to create a Checklist.
     */
    data: XOR<ChecklistCreateInput, ChecklistUncheckedCreateInput>
  }

  /**
   * Checklist createMany
   */
  export type ChecklistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Checklists.
     */
    data: ChecklistCreateManyInput | ChecklistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Checklist update
   */
  export type ChecklistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checklist
     */
    select?: ChecklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checklist
     */
    omit?: ChecklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistInclude<ExtArgs> | null
    /**
     * The data needed to update a Checklist.
     */
    data: XOR<ChecklistUpdateInput, ChecklistUncheckedUpdateInput>
    /**
     * Choose, which Checklist to update.
     */
    where: ChecklistWhereUniqueInput
  }

  /**
   * Checklist updateMany
   */
  export type ChecklistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Checklists.
     */
    data: XOR<ChecklistUpdateManyMutationInput, ChecklistUncheckedUpdateManyInput>
    /**
     * Filter which Checklists to update
     */
    where?: ChecklistWhereInput
    /**
     * Limit how many Checklists to update.
     */
    limit?: number
  }

  /**
   * Checklist upsert
   */
  export type ChecklistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checklist
     */
    select?: ChecklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checklist
     */
    omit?: ChecklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistInclude<ExtArgs> | null
    /**
     * The filter to search for the Checklist to update in case it exists.
     */
    where: ChecklistWhereUniqueInput
    /**
     * In case the Checklist found by the `where` argument doesn't exist, create a new Checklist with this data.
     */
    create: XOR<ChecklistCreateInput, ChecklistUncheckedCreateInput>
    /**
     * In case the Checklist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChecklistUpdateInput, ChecklistUncheckedUpdateInput>
  }

  /**
   * Checklist delete
   */
  export type ChecklistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checklist
     */
    select?: ChecklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checklist
     */
    omit?: ChecklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistInclude<ExtArgs> | null
    /**
     * Filter which Checklist to delete.
     */
    where: ChecklistWhereUniqueInput
  }

  /**
   * Checklist deleteMany
   */
  export type ChecklistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Checklists to delete
     */
    where?: ChecklistWhereInput
    /**
     * Limit how many Checklists to delete.
     */
    limit?: number
  }

  /**
   * Checklist.categories
   */
  export type Checklist$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChecklistCategory
     */
    select?: ChecklistCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChecklistCategory
     */
    omit?: ChecklistCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistCategoryInclude<ExtArgs> | null
    where?: ChecklistCategoryWhereInput
    orderBy?: ChecklistCategoryOrderByWithRelationInput | ChecklistCategoryOrderByWithRelationInput[]
    cursor?: ChecklistCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChecklistCategoryScalarFieldEnum | ChecklistCategoryScalarFieldEnum[]
  }

  /**
   * Checklist without action
   */
  export type ChecklistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checklist
     */
    select?: ChecklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Checklist
     */
    omit?: ChecklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistInclude<ExtArgs> | null
  }


  /**
   * Model ChecklistCategory
   */

  export type AggregateChecklistCategory = {
    _count: ChecklistCategoryCountAggregateOutputType | null
    _min: ChecklistCategoryMinAggregateOutputType | null
    _max: ChecklistCategoryMaxAggregateOutputType | null
  }

  export type ChecklistCategoryMinAggregateOutputType = {
    id: string | null
    titre: string | null
    icone: string | null
    checklistId: string | null
  }

  export type ChecklistCategoryMaxAggregateOutputType = {
    id: string | null
    titre: string | null
    icone: string | null
    checklistId: string | null
  }

  export type ChecklistCategoryCountAggregateOutputType = {
    id: number
    titre: number
    icone: number
    checklistId: number
    _all: number
  }


  export type ChecklistCategoryMinAggregateInputType = {
    id?: true
    titre?: true
    icone?: true
    checklistId?: true
  }

  export type ChecklistCategoryMaxAggregateInputType = {
    id?: true
    titre?: true
    icone?: true
    checklistId?: true
  }

  export type ChecklistCategoryCountAggregateInputType = {
    id?: true
    titre?: true
    icone?: true
    checklistId?: true
    _all?: true
  }

  export type ChecklistCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChecklistCategory to aggregate.
     */
    where?: ChecklistCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChecklistCategories to fetch.
     */
    orderBy?: ChecklistCategoryOrderByWithRelationInput | ChecklistCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChecklistCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChecklistCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChecklistCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChecklistCategories
    **/
    _count?: true | ChecklistCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChecklistCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChecklistCategoryMaxAggregateInputType
  }

  export type GetChecklistCategoryAggregateType<T extends ChecklistCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateChecklistCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChecklistCategory[P]>
      : GetScalarType<T[P], AggregateChecklistCategory[P]>
  }




  export type ChecklistCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChecklistCategoryWhereInput
    orderBy?: ChecklistCategoryOrderByWithAggregationInput | ChecklistCategoryOrderByWithAggregationInput[]
    by: ChecklistCategoryScalarFieldEnum[] | ChecklistCategoryScalarFieldEnum
    having?: ChecklistCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChecklistCategoryCountAggregateInputType | true
    _min?: ChecklistCategoryMinAggregateInputType
    _max?: ChecklistCategoryMaxAggregateInputType
  }

  export type ChecklistCategoryGroupByOutputType = {
    id: string
    titre: string
    icone: string | null
    checklistId: string
    _count: ChecklistCategoryCountAggregateOutputType | null
    _min: ChecklistCategoryMinAggregateOutputType | null
    _max: ChecklistCategoryMaxAggregateOutputType | null
  }

  type GetChecklistCategoryGroupByPayload<T extends ChecklistCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChecklistCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChecklistCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChecklistCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], ChecklistCategoryGroupByOutputType[P]>
        }
      >
    >


  export type ChecklistCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titre?: boolean
    icone?: boolean
    checklistId?: boolean
    items?: boolean | ChecklistCategory$itemsArgs<ExtArgs>
    checklist?: boolean | ChecklistDefaultArgs<ExtArgs>
    _count?: boolean | ChecklistCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["checklistCategory"]>



  export type ChecklistCategorySelectScalar = {
    id?: boolean
    titre?: boolean
    icone?: boolean
    checklistId?: boolean
  }

  export type ChecklistCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titre" | "icone" | "checklistId", ExtArgs["result"]["checklistCategory"]>
  export type ChecklistCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | ChecklistCategory$itemsArgs<ExtArgs>
    checklist?: boolean | ChecklistDefaultArgs<ExtArgs>
    _count?: boolean | ChecklistCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ChecklistCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChecklistCategory"
    objects: {
      items: Prisma.$ChecklistItemPayload<ExtArgs>[]
      checklist: Prisma.$ChecklistPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      titre: string
      icone: string | null
      checklistId: string
    }, ExtArgs["result"]["checklistCategory"]>
    composites: {}
  }

  type ChecklistCategoryGetPayload<S extends boolean | null | undefined | ChecklistCategoryDefaultArgs> = $Result.GetResult<Prisma.$ChecklistCategoryPayload, S>

  type ChecklistCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChecklistCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChecklistCategoryCountAggregateInputType | true
    }

  export interface ChecklistCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChecklistCategory'], meta: { name: 'ChecklistCategory' } }
    /**
     * Find zero or one ChecklistCategory that matches the filter.
     * @param {ChecklistCategoryFindUniqueArgs} args - Arguments to find a ChecklistCategory
     * @example
     * // Get one ChecklistCategory
     * const checklistCategory = await prisma.checklistCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChecklistCategoryFindUniqueArgs>(args: SelectSubset<T, ChecklistCategoryFindUniqueArgs<ExtArgs>>): Prisma__ChecklistCategoryClient<$Result.GetResult<Prisma.$ChecklistCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChecklistCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChecklistCategoryFindUniqueOrThrowArgs} args - Arguments to find a ChecklistCategory
     * @example
     * // Get one ChecklistCategory
     * const checklistCategory = await prisma.checklistCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChecklistCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, ChecklistCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChecklistCategoryClient<$Result.GetResult<Prisma.$ChecklistCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChecklistCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChecklistCategoryFindFirstArgs} args - Arguments to find a ChecklistCategory
     * @example
     * // Get one ChecklistCategory
     * const checklistCategory = await prisma.checklistCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChecklistCategoryFindFirstArgs>(args?: SelectSubset<T, ChecklistCategoryFindFirstArgs<ExtArgs>>): Prisma__ChecklistCategoryClient<$Result.GetResult<Prisma.$ChecklistCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChecklistCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChecklistCategoryFindFirstOrThrowArgs} args - Arguments to find a ChecklistCategory
     * @example
     * // Get one ChecklistCategory
     * const checklistCategory = await prisma.checklistCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChecklistCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, ChecklistCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChecklistCategoryClient<$Result.GetResult<Prisma.$ChecklistCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChecklistCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChecklistCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChecklistCategories
     * const checklistCategories = await prisma.checklistCategory.findMany()
     * 
     * // Get first 10 ChecklistCategories
     * const checklistCategories = await prisma.checklistCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const checklistCategoryWithIdOnly = await prisma.checklistCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChecklistCategoryFindManyArgs>(args?: SelectSubset<T, ChecklistCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChecklistCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChecklistCategory.
     * @param {ChecklistCategoryCreateArgs} args - Arguments to create a ChecklistCategory.
     * @example
     * // Create one ChecklistCategory
     * const ChecklistCategory = await prisma.checklistCategory.create({
     *   data: {
     *     // ... data to create a ChecklistCategory
     *   }
     * })
     * 
     */
    create<T extends ChecklistCategoryCreateArgs>(args: SelectSubset<T, ChecklistCategoryCreateArgs<ExtArgs>>): Prisma__ChecklistCategoryClient<$Result.GetResult<Prisma.$ChecklistCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChecklistCategories.
     * @param {ChecklistCategoryCreateManyArgs} args - Arguments to create many ChecklistCategories.
     * @example
     * // Create many ChecklistCategories
     * const checklistCategory = await prisma.checklistCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChecklistCategoryCreateManyArgs>(args?: SelectSubset<T, ChecklistCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ChecklistCategory.
     * @param {ChecklistCategoryDeleteArgs} args - Arguments to delete one ChecklistCategory.
     * @example
     * // Delete one ChecklistCategory
     * const ChecklistCategory = await prisma.checklistCategory.delete({
     *   where: {
     *     // ... filter to delete one ChecklistCategory
     *   }
     * })
     * 
     */
    delete<T extends ChecklistCategoryDeleteArgs>(args: SelectSubset<T, ChecklistCategoryDeleteArgs<ExtArgs>>): Prisma__ChecklistCategoryClient<$Result.GetResult<Prisma.$ChecklistCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChecklistCategory.
     * @param {ChecklistCategoryUpdateArgs} args - Arguments to update one ChecklistCategory.
     * @example
     * // Update one ChecklistCategory
     * const checklistCategory = await prisma.checklistCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChecklistCategoryUpdateArgs>(args: SelectSubset<T, ChecklistCategoryUpdateArgs<ExtArgs>>): Prisma__ChecklistCategoryClient<$Result.GetResult<Prisma.$ChecklistCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChecklistCategories.
     * @param {ChecklistCategoryDeleteManyArgs} args - Arguments to filter ChecklistCategories to delete.
     * @example
     * // Delete a few ChecklistCategories
     * const { count } = await prisma.checklistCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChecklistCategoryDeleteManyArgs>(args?: SelectSubset<T, ChecklistCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChecklistCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChecklistCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChecklistCategories
     * const checklistCategory = await prisma.checklistCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChecklistCategoryUpdateManyArgs>(args: SelectSubset<T, ChecklistCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ChecklistCategory.
     * @param {ChecklistCategoryUpsertArgs} args - Arguments to update or create a ChecklistCategory.
     * @example
     * // Update or create a ChecklistCategory
     * const checklistCategory = await prisma.checklistCategory.upsert({
     *   create: {
     *     // ... data to create a ChecklistCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChecklistCategory we want to update
     *   }
     * })
     */
    upsert<T extends ChecklistCategoryUpsertArgs>(args: SelectSubset<T, ChecklistCategoryUpsertArgs<ExtArgs>>): Prisma__ChecklistCategoryClient<$Result.GetResult<Prisma.$ChecklistCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChecklistCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChecklistCategoryCountArgs} args - Arguments to filter ChecklistCategories to count.
     * @example
     * // Count the number of ChecklistCategories
     * const count = await prisma.checklistCategory.count({
     *   where: {
     *     // ... the filter for the ChecklistCategories we want to count
     *   }
     * })
    **/
    count<T extends ChecklistCategoryCountArgs>(
      args?: Subset<T, ChecklistCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChecklistCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChecklistCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChecklistCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChecklistCategoryAggregateArgs>(args: Subset<T, ChecklistCategoryAggregateArgs>): Prisma.PrismaPromise<GetChecklistCategoryAggregateType<T>>

    /**
     * Group by ChecklistCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChecklistCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChecklistCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChecklistCategoryGroupByArgs['orderBy'] }
        : { orderBy?: ChecklistCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChecklistCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChecklistCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChecklistCategory model
   */
  readonly fields: ChecklistCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChecklistCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChecklistCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    items<T extends ChecklistCategory$itemsArgs<ExtArgs> = {}>(args?: Subset<T, ChecklistCategory$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChecklistItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    checklist<T extends ChecklistDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChecklistDefaultArgs<ExtArgs>>): Prisma__ChecklistClient<$Result.GetResult<Prisma.$ChecklistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ChecklistCategory model
   */
  interface ChecklistCategoryFieldRefs {
    readonly id: FieldRef<"ChecklistCategory", 'String'>
    readonly titre: FieldRef<"ChecklistCategory", 'String'>
    readonly icone: FieldRef<"ChecklistCategory", 'String'>
    readonly checklistId: FieldRef<"ChecklistCategory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ChecklistCategory findUnique
   */
  export type ChecklistCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChecklistCategory
     */
    select?: ChecklistCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChecklistCategory
     */
    omit?: ChecklistCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ChecklistCategory to fetch.
     */
    where: ChecklistCategoryWhereUniqueInput
  }

  /**
   * ChecklistCategory findUniqueOrThrow
   */
  export type ChecklistCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChecklistCategory
     */
    select?: ChecklistCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChecklistCategory
     */
    omit?: ChecklistCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ChecklistCategory to fetch.
     */
    where: ChecklistCategoryWhereUniqueInput
  }

  /**
   * ChecklistCategory findFirst
   */
  export type ChecklistCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChecklistCategory
     */
    select?: ChecklistCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChecklistCategory
     */
    omit?: ChecklistCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ChecklistCategory to fetch.
     */
    where?: ChecklistCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChecklistCategories to fetch.
     */
    orderBy?: ChecklistCategoryOrderByWithRelationInput | ChecklistCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChecklistCategories.
     */
    cursor?: ChecklistCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChecklistCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChecklistCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChecklistCategories.
     */
    distinct?: ChecklistCategoryScalarFieldEnum | ChecklistCategoryScalarFieldEnum[]
  }

  /**
   * ChecklistCategory findFirstOrThrow
   */
  export type ChecklistCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChecklistCategory
     */
    select?: ChecklistCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChecklistCategory
     */
    omit?: ChecklistCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ChecklistCategory to fetch.
     */
    where?: ChecklistCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChecklistCategories to fetch.
     */
    orderBy?: ChecklistCategoryOrderByWithRelationInput | ChecklistCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChecklistCategories.
     */
    cursor?: ChecklistCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChecklistCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChecklistCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChecklistCategories.
     */
    distinct?: ChecklistCategoryScalarFieldEnum | ChecklistCategoryScalarFieldEnum[]
  }

  /**
   * ChecklistCategory findMany
   */
  export type ChecklistCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChecklistCategory
     */
    select?: ChecklistCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChecklistCategory
     */
    omit?: ChecklistCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistCategoryInclude<ExtArgs> | null
    /**
     * Filter, which ChecklistCategories to fetch.
     */
    where?: ChecklistCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChecklistCategories to fetch.
     */
    orderBy?: ChecklistCategoryOrderByWithRelationInput | ChecklistCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChecklistCategories.
     */
    cursor?: ChecklistCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChecklistCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChecklistCategories.
     */
    skip?: number
    distinct?: ChecklistCategoryScalarFieldEnum | ChecklistCategoryScalarFieldEnum[]
  }

  /**
   * ChecklistCategory create
   */
  export type ChecklistCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChecklistCategory
     */
    select?: ChecklistCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChecklistCategory
     */
    omit?: ChecklistCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a ChecklistCategory.
     */
    data: XOR<ChecklistCategoryCreateInput, ChecklistCategoryUncheckedCreateInput>
  }

  /**
   * ChecklistCategory createMany
   */
  export type ChecklistCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChecklistCategories.
     */
    data: ChecklistCategoryCreateManyInput | ChecklistCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChecklistCategory update
   */
  export type ChecklistCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChecklistCategory
     */
    select?: ChecklistCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChecklistCategory
     */
    omit?: ChecklistCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a ChecklistCategory.
     */
    data: XOR<ChecklistCategoryUpdateInput, ChecklistCategoryUncheckedUpdateInput>
    /**
     * Choose, which ChecklistCategory to update.
     */
    where: ChecklistCategoryWhereUniqueInput
  }

  /**
   * ChecklistCategory updateMany
   */
  export type ChecklistCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChecklistCategories.
     */
    data: XOR<ChecklistCategoryUpdateManyMutationInput, ChecklistCategoryUncheckedUpdateManyInput>
    /**
     * Filter which ChecklistCategories to update
     */
    where?: ChecklistCategoryWhereInput
    /**
     * Limit how many ChecklistCategories to update.
     */
    limit?: number
  }

  /**
   * ChecklistCategory upsert
   */
  export type ChecklistCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChecklistCategory
     */
    select?: ChecklistCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChecklistCategory
     */
    omit?: ChecklistCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the ChecklistCategory to update in case it exists.
     */
    where: ChecklistCategoryWhereUniqueInput
    /**
     * In case the ChecklistCategory found by the `where` argument doesn't exist, create a new ChecklistCategory with this data.
     */
    create: XOR<ChecklistCategoryCreateInput, ChecklistCategoryUncheckedCreateInput>
    /**
     * In case the ChecklistCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChecklistCategoryUpdateInput, ChecklistCategoryUncheckedUpdateInput>
  }

  /**
   * ChecklistCategory delete
   */
  export type ChecklistCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChecklistCategory
     */
    select?: ChecklistCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChecklistCategory
     */
    omit?: ChecklistCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistCategoryInclude<ExtArgs> | null
    /**
     * Filter which ChecklistCategory to delete.
     */
    where: ChecklistCategoryWhereUniqueInput
  }

  /**
   * ChecklistCategory deleteMany
   */
  export type ChecklistCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChecklistCategories to delete
     */
    where?: ChecklistCategoryWhereInput
    /**
     * Limit how many ChecklistCategories to delete.
     */
    limit?: number
  }

  /**
   * ChecklistCategory.items
   */
  export type ChecklistCategory$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChecklistItem
     */
    select?: ChecklistItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChecklistItem
     */
    omit?: ChecklistItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistItemInclude<ExtArgs> | null
    where?: ChecklistItemWhereInput
    orderBy?: ChecklistItemOrderByWithRelationInput | ChecklistItemOrderByWithRelationInput[]
    cursor?: ChecklistItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChecklistItemScalarFieldEnum | ChecklistItemScalarFieldEnum[]
  }

  /**
   * ChecklistCategory without action
   */
  export type ChecklistCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChecklistCategory
     */
    select?: ChecklistCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChecklistCategory
     */
    omit?: ChecklistCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistCategoryInclude<ExtArgs> | null
  }


  /**
   * Model ChecklistItem
   */

  export type AggregateChecklistItem = {
    _count: ChecklistItemCountAggregateOutputType | null
    _min: ChecklistItemMinAggregateOutputType | null
    _max: ChecklistItemMaxAggregateOutputType | null
  }

  export type ChecklistItemMinAggregateOutputType = {
    id: string | null
    titre: string | null
    description: string | null
    isChecked: boolean | null
    reminderDate: Date | null
    categoryId: string | null
  }

  export type ChecklistItemMaxAggregateOutputType = {
    id: string | null
    titre: string | null
    description: string | null
    isChecked: boolean | null
    reminderDate: Date | null
    categoryId: string | null
  }

  export type ChecklistItemCountAggregateOutputType = {
    id: number
    titre: number
    description: number
    isChecked: number
    reminderDate: number
    categoryId: number
    _all: number
  }


  export type ChecklistItemMinAggregateInputType = {
    id?: true
    titre?: true
    description?: true
    isChecked?: true
    reminderDate?: true
    categoryId?: true
  }

  export type ChecklistItemMaxAggregateInputType = {
    id?: true
    titre?: true
    description?: true
    isChecked?: true
    reminderDate?: true
    categoryId?: true
  }

  export type ChecklistItemCountAggregateInputType = {
    id?: true
    titre?: true
    description?: true
    isChecked?: true
    reminderDate?: true
    categoryId?: true
    _all?: true
  }

  export type ChecklistItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChecklistItem to aggregate.
     */
    where?: ChecklistItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChecklistItems to fetch.
     */
    orderBy?: ChecklistItemOrderByWithRelationInput | ChecklistItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChecklistItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChecklistItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChecklistItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChecklistItems
    **/
    _count?: true | ChecklistItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChecklistItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChecklistItemMaxAggregateInputType
  }

  export type GetChecklistItemAggregateType<T extends ChecklistItemAggregateArgs> = {
        [P in keyof T & keyof AggregateChecklistItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChecklistItem[P]>
      : GetScalarType<T[P], AggregateChecklistItem[P]>
  }




  export type ChecklistItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChecklistItemWhereInput
    orderBy?: ChecklistItemOrderByWithAggregationInput | ChecklistItemOrderByWithAggregationInput[]
    by: ChecklistItemScalarFieldEnum[] | ChecklistItemScalarFieldEnum
    having?: ChecklistItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChecklistItemCountAggregateInputType | true
    _min?: ChecklistItemMinAggregateInputType
    _max?: ChecklistItemMaxAggregateInputType
  }

  export type ChecklistItemGroupByOutputType = {
    id: string
    titre: string
    description: string | null
    isChecked: boolean
    reminderDate: Date | null
    categoryId: string
    _count: ChecklistItemCountAggregateOutputType | null
    _min: ChecklistItemMinAggregateOutputType | null
    _max: ChecklistItemMaxAggregateOutputType | null
  }

  type GetChecklistItemGroupByPayload<T extends ChecklistItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChecklistItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChecklistItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChecklistItemGroupByOutputType[P]>
            : GetScalarType<T[P], ChecklistItemGroupByOutputType[P]>
        }
      >
    >


  export type ChecklistItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titre?: boolean
    description?: boolean
    isChecked?: boolean
    reminderDate?: boolean
    categoryId?: boolean
    category?: boolean | ChecklistCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["checklistItem"]>



  export type ChecklistItemSelectScalar = {
    id?: boolean
    titre?: boolean
    description?: boolean
    isChecked?: boolean
    reminderDate?: boolean
    categoryId?: boolean
  }

  export type ChecklistItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titre" | "description" | "isChecked" | "reminderDate" | "categoryId", ExtArgs["result"]["checklistItem"]>
  export type ChecklistItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | ChecklistCategoryDefaultArgs<ExtArgs>
  }

  export type $ChecklistItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChecklistItem"
    objects: {
      category: Prisma.$ChecklistCategoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      titre: string
      description: string | null
      isChecked: boolean
      reminderDate: Date | null
      categoryId: string
    }, ExtArgs["result"]["checklistItem"]>
    composites: {}
  }

  type ChecklistItemGetPayload<S extends boolean | null | undefined | ChecklistItemDefaultArgs> = $Result.GetResult<Prisma.$ChecklistItemPayload, S>

  type ChecklistItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChecklistItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChecklistItemCountAggregateInputType | true
    }

  export interface ChecklistItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChecklistItem'], meta: { name: 'ChecklistItem' } }
    /**
     * Find zero or one ChecklistItem that matches the filter.
     * @param {ChecklistItemFindUniqueArgs} args - Arguments to find a ChecklistItem
     * @example
     * // Get one ChecklistItem
     * const checklistItem = await prisma.checklistItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChecklistItemFindUniqueArgs>(args: SelectSubset<T, ChecklistItemFindUniqueArgs<ExtArgs>>): Prisma__ChecklistItemClient<$Result.GetResult<Prisma.$ChecklistItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChecklistItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChecklistItemFindUniqueOrThrowArgs} args - Arguments to find a ChecklistItem
     * @example
     * // Get one ChecklistItem
     * const checklistItem = await prisma.checklistItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChecklistItemFindUniqueOrThrowArgs>(args: SelectSubset<T, ChecklistItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChecklistItemClient<$Result.GetResult<Prisma.$ChecklistItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChecklistItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChecklistItemFindFirstArgs} args - Arguments to find a ChecklistItem
     * @example
     * // Get one ChecklistItem
     * const checklistItem = await prisma.checklistItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChecklistItemFindFirstArgs>(args?: SelectSubset<T, ChecklistItemFindFirstArgs<ExtArgs>>): Prisma__ChecklistItemClient<$Result.GetResult<Prisma.$ChecklistItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChecklistItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChecklistItemFindFirstOrThrowArgs} args - Arguments to find a ChecklistItem
     * @example
     * // Get one ChecklistItem
     * const checklistItem = await prisma.checklistItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChecklistItemFindFirstOrThrowArgs>(args?: SelectSubset<T, ChecklistItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChecklistItemClient<$Result.GetResult<Prisma.$ChecklistItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChecklistItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChecklistItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChecklistItems
     * const checklistItems = await prisma.checklistItem.findMany()
     * 
     * // Get first 10 ChecklistItems
     * const checklistItems = await prisma.checklistItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const checklistItemWithIdOnly = await prisma.checklistItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChecklistItemFindManyArgs>(args?: SelectSubset<T, ChecklistItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChecklistItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChecklistItem.
     * @param {ChecklistItemCreateArgs} args - Arguments to create a ChecklistItem.
     * @example
     * // Create one ChecklistItem
     * const ChecklistItem = await prisma.checklistItem.create({
     *   data: {
     *     // ... data to create a ChecklistItem
     *   }
     * })
     * 
     */
    create<T extends ChecklistItemCreateArgs>(args: SelectSubset<T, ChecklistItemCreateArgs<ExtArgs>>): Prisma__ChecklistItemClient<$Result.GetResult<Prisma.$ChecklistItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChecklistItems.
     * @param {ChecklistItemCreateManyArgs} args - Arguments to create many ChecklistItems.
     * @example
     * // Create many ChecklistItems
     * const checklistItem = await prisma.checklistItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChecklistItemCreateManyArgs>(args?: SelectSubset<T, ChecklistItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ChecklistItem.
     * @param {ChecklistItemDeleteArgs} args - Arguments to delete one ChecklistItem.
     * @example
     * // Delete one ChecklistItem
     * const ChecklistItem = await prisma.checklistItem.delete({
     *   where: {
     *     // ... filter to delete one ChecklistItem
     *   }
     * })
     * 
     */
    delete<T extends ChecklistItemDeleteArgs>(args: SelectSubset<T, ChecklistItemDeleteArgs<ExtArgs>>): Prisma__ChecklistItemClient<$Result.GetResult<Prisma.$ChecklistItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChecklistItem.
     * @param {ChecklistItemUpdateArgs} args - Arguments to update one ChecklistItem.
     * @example
     * // Update one ChecklistItem
     * const checklistItem = await prisma.checklistItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChecklistItemUpdateArgs>(args: SelectSubset<T, ChecklistItemUpdateArgs<ExtArgs>>): Prisma__ChecklistItemClient<$Result.GetResult<Prisma.$ChecklistItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChecklistItems.
     * @param {ChecklistItemDeleteManyArgs} args - Arguments to filter ChecklistItems to delete.
     * @example
     * // Delete a few ChecklistItems
     * const { count } = await prisma.checklistItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChecklistItemDeleteManyArgs>(args?: SelectSubset<T, ChecklistItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChecklistItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChecklistItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChecklistItems
     * const checklistItem = await prisma.checklistItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChecklistItemUpdateManyArgs>(args: SelectSubset<T, ChecklistItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ChecklistItem.
     * @param {ChecklistItemUpsertArgs} args - Arguments to update or create a ChecklistItem.
     * @example
     * // Update or create a ChecklistItem
     * const checklistItem = await prisma.checklistItem.upsert({
     *   create: {
     *     // ... data to create a ChecklistItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChecklistItem we want to update
     *   }
     * })
     */
    upsert<T extends ChecklistItemUpsertArgs>(args: SelectSubset<T, ChecklistItemUpsertArgs<ExtArgs>>): Prisma__ChecklistItemClient<$Result.GetResult<Prisma.$ChecklistItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChecklistItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChecklistItemCountArgs} args - Arguments to filter ChecklistItems to count.
     * @example
     * // Count the number of ChecklistItems
     * const count = await prisma.checklistItem.count({
     *   where: {
     *     // ... the filter for the ChecklistItems we want to count
     *   }
     * })
    **/
    count<T extends ChecklistItemCountArgs>(
      args?: Subset<T, ChecklistItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChecklistItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChecklistItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChecklistItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChecklistItemAggregateArgs>(args: Subset<T, ChecklistItemAggregateArgs>): Prisma.PrismaPromise<GetChecklistItemAggregateType<T>>

    /**
     * Group by ChecklistItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChecklistItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChecklistItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChecklistItemGroupByArgs['orderBy'] }
        : { orderBy?: ChecklistItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChecklistItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChecklistItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChecklistItem model
   */
  readonly fields: ChecklistItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChecklistItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChecklistItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends ChecklistCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChecklistCategoryDefaultArgs<ExtArgs>>): Prisma__ChecklistCategoryClient<$Result.GetResult<Prisma.$ChecklistCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ChecklistItem model
   */
  interface ChecklistItemFieldRefs {
    readonly id: FieldRef<"ChecklistItem", 'String'>
    readonly titre: FieldRef<"ChecklistItem", 'String'>
    readonly description: FieldRef<"ChecklistItem", 'String'>
    readonly isChecked: FieldRef<"ChecklistItem", 'Boolean'>
    readonly reminderDate: FieldRef<"ChecklistItem", 'DateTime'>
    readonly categoryId: FieldRef<"ChecklistItem", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ChecklistItem findUnique
   */
  export type ChecklistItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChecklistItem
     */
    select?: ChecklistItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChecklistItem
     */
    omit?: ChecklistItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistItemInclude<ExtArgs> | null
    /**
     * Filter, which ChecklistItem to fetch.
     */
    where: ChecklistItemWhereUniqueInput
  }

  /**
   * ChecklistItem findUniqueOrThrow
   */
  export type ChecklistItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChecklistItem
     */
    select?: ChecklistItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChecklistItem
     */
    omit?: ChecklistItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistItemInclude<ExtArgs> | null
    /**
     * Filter, which ChecklistItem to fetch.
     */
    where: ChecklistItemWhereUniqueInput
  }

  /**
   * ChecklistItem findFirst
   */
  export type ChecklistItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChecklistItem
     */
    select?: ChecklistItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChecklistItem
     */
    omit?: ChecklistItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistItemInclude<ExtArgs> | null
    /**
     * Filter, which ChecklistItem to fetch.
     */
    where?: ChecklistItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChecklistItems to fetch.
     */
    orderBy?: ChecklistItemOrderByWithRelationInput | ChecklistItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChecklistItems.
     */
    cursor?: ChecklistItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChecklistItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChecklistItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChecklistItems.
     */
    distinct?: ChecklistItemScalarFieldEnum | ChecklistItemScalarFieldEnum[]
  }

  /**
   * ChecklistItem findFirstOrThrow
   */
  export type ChecklistItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChecklistItem
     */
    select?: ChecklistItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChecklistItem
     */
    omit?: ChecklistItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistItemInclude<ExtArgs> | null
    /**
     * Filter, which ChecklistItem to fetch.
     */
    where?: ChecklistItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChecklistItems to fetch.
     */
    orderBy?: ChecklistItemOrderByWithRelationInput | ChecklistItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChecklistItems.
     */
    cursor?: ChecklistItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChecklistItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChecklistItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChecklistItems.
     */
    distinct?: ChecklistItemScalarFieldEnum | ChecklistItemScalarFieldEnum[]
  }

  /**
   * ChecklistItem findMany
   */
  export type ChecklistItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChecklistItem
     */
    select?: ChecklistItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChecklistItem
     */
    omit?: ChecklistItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistItemInclude<ExtArgs> | null
    /**
     * Filter, which ChecklistItems to fetch.
     */
    where?: ChecklistItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChecklistItems to fetch.
     */
    orderBy?: ChecklistItemOrderByWithRelationInput | ChecklistItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChecklistItems.
     */
    cursor?: ChecklistItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChecklistItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChecklistItems.
     */
    skip?: number
    distinct?: ChecklistItemScalarFieldEnum | ChecklistItemScalarFieldEnum[]
  }

  /**
   * ChecklistItem create
   */
  export type ChecklistItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChecklistItem
     */
    select?: ChecklistItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChecklistItem
     */
    omit?: ChecklistItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistItemInclude<ExtArgs> | null
    /**
     * The data needed to create a ChecklistItem.
     */
    data: XOR<ChecklistItemCreateInput, ChecklistItemUncheckedCreateInput>
  }

  /**
   * ChecklistItem createMany
   */
  export type ChecklistItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChecklistItems.
     */
    data: ChecklistItemCreateManyInput | ChecklistItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChecklistItem update
   */
  export type ChecklistItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChecklistItem
     */
    select?: ChecklistItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChecklistItem
     */
    omit?: ChecklistItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistItemInclude<ExtArgs> | null
    /**
     * The data needed to update a ChecklistItem.
     */
    data: XOR<ChecklistItemUpdateInput, ChecklistItemUncheckedUpdateInput>
    /**
     * Choose, which ChecklistItem to update.
     */
    where: ChecklistItemWhereUniqueInput
  }

  /**
   * ChecklistItem updateMany
   */
  export type ChecklistItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChecklistItems.
     */
    data: XOR<ChecklistItemUpdateManyMutationInput, ChecklistItemUncheckedUpdateManyInput>
    /**
     * Filter which ChecklistItems to update
     */
    where?: ChecklistItemWhereInput
    /**
     * Limit how many ChecklistItems to update.
     */
    limit?: number
  }

  /**
   * ChecklistItem upsert
   */
  export type ChecklistItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChecklistItem
     */
    select?: ChecklistItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChecklistItem
     */
    omit?: ChecklistItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistItemInclude<ExtArgs> | null
    /**
     * The filter to search for the ChecklistItem to update in case it exists.
     */
    where: ChecklistItemWhereUniqueInput
    /**
     * In case the ChecklistItem found by the `where` argument doesn't exist, create a new ChecklistItem with this data.
     */
    create: XOR<ChecklistItemCreateInput, ChecklistItemUncheckedCreateInput>
    /**
     * In case the ChecklistItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChecklistItemUpdateInput, ChecklistItemUncheckedUpdateInput>
  }

  /**
   * ChecklistItem delete
   */
  export type ChecklistItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChecklistItem
     */
    select?: ChecklistItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChecklistItem
     */
    omit?: ChecklistItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistItemInclude<ExtArgs> | null
    /**
     * Filter which ChecklistItem to delete.
     */
    where: ChecklistItemWhereUniqueInput
  }

  /**
   * ChecklistItem deleteMany
   */
  export type ChecklistItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChecklistItems to delete
     */
    where?: ChecklistItemWhereInput
    /**
     * Limit how many ChecklistItems to delete.
     */
    limit?: number
  }

  /**
   * ChecklistItem without action
   */
  export type ChecklistItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChecklistItem
     */
    select?: ChecklistItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChecklistItem
     */
    omit?: ChecklistItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChecklistItemInclude<ExtArgs> | null
  }


  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    userId: number | null
    rating: number | null
  }

  export type ReviewSumAggregateOutputType = {
    userId: number | null
    rating: number | null
  }

  export type ReviewMinAggregateOutputType = {
    id: string | null
    userId: number | null
    destinationId: string | null
    rating: number | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: string | null
    userId: number | null
    destinationId: string | null
    rating: number | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    userId: number
    destinationId: number
    rating: number
    content: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    userId?: true
    rating?: true
  }

  export type ReviewSumAggregateInputType = {
    userId?: true
    rating?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    userId?: true
    destinationId?: true
    rating?: true
    content?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    userId?: true
    destinationId?: true
    rating?: true
    content?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    userId?: true
    destinationId?: true
    rating?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithAggregationInput | ReviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: string
    userId: number
    destinationId: string
    rating: number
    content: string
    createdAt: Date
    updatedAt: Date
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    destinationId?: boolean
    rating?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    destination?: boolean | DestinationDefaultArgs<ExtArgs>
    likes?: boolean | Review$likesArgs<ExtArgs>
    _count?: boolean | ReviewCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>



  export type ReviewSelectScalar = {
    id?: boolean
    userId?: boolean
    destinationId?: boolean
    rating?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "destinationId" | "rating" | "content" | "createdAt" | "updatedAt", ExtArgs["result"]["review"]>
  export type ReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    destination?: boolean | DestinationDefaultArgs<ExtArgs>
    likes?: boolean | Review$likesArgs<ExtArgs>
    _count?: boolean | ReviewCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      destination: Prisma.$DestinationPayload<ExtArgs>
      likes: Prisma.$ReviewLikePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: number
      destinationId: string
      rating: number
      content: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = $Result.GetResult<Prisma.$ReviewPayload, S>

  type ReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Review'], meta: { name: 'Review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindUniqueArgs>(args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindFirstArgs>(args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewFindManyArgs>(args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends ReviewCreateArgs>(args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewCreateManyArgs>(args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends ReviewDeleteArgs>(args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewUpdateArgs>(args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewDeleteManyArgs>(args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewUpdateManyArgs>(args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends ReviewUpsertArgs>(args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Review model
   */
  readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    destination<T extends DestinationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DestinationDefaultArgs<ExtArgs>>): Prisma__DestinationClient<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    likes<T extends Review$likesArgs<ExtArgs> = {}>(args?: Subset<T, Review$likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewLikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Review model
   */
  interface ReviewFieldRefs {
    readonly id: FieldRef<"Review", 'String'>
    readonly userId: FieldRef<"Review", 'Int'>
    readonly destinationId: FieldRef<"Review", 'String'>
    readonly rating: FieldRef<"Review", 'Int'>
    readonly content: FieldRef<"Review", 'String'>
    readonly createdAt: FieldRef<"Review", 'DateTime'>
    readonly updatedAt: FieldRef<"Review", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review create
   */
  export type ReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Review update
   */
  export type ReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
  }

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to delete.
     */
    limit?: number
  }

  /**
   * Review.likes
   */
  export type Review$likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewLike
     */
    select?: ReviewLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewLike
     */
    omit?: ReviewLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewLikeInclude<ExtArgs> | null
    where?: ReviewLikeWhereInput
    orderBy?: ReviewLikeOrderByWithRelationInput | ReviewLikeOrderByWithRelationInput[]
    cursor?: ReviewLikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewLikeScalarFieldEnum | ReviewLikeScalarFieldEnum[]
  }

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
  }


  /**
   * Model ReviewLike
   */

  export type AggregateReviewLike = {
    _count: ReviewLikeCountAggregateOutputType | null
    _avg: ReviewLikeAvgAggregateOutputType | null
    _sum: ReviewLikeSumAggregateOutputType | null
    _min: ReviewLikeMinAggregateOutputType | null
    _max: ReviewLikeMaxAggregateOutputType | null
  }

  export type ReviewLikeAvgAggregateOutputType = {
    userId: number | null
  }

  export type ReviewLikeSumAggregateOutputType = {
    userId: number | null
  }

  export type ReviewLikeMinAggregateOutputType = {
    id: string | null
    userId: number | null
    reviewId: string | null
  }

  export type ReviewLikeMaxAggregateOutputType = {
    id: string | null
    userId: number | null
    reviewId: string | null
  }

  export type ReviewLikeCountAggregateOutputType = {
    id: number
    userId: number
    reviewId: number
    _all: number
  }


  export type ReviewLikeAvgAggregateInputType = {
    userId?: true
  }

  export type ReviewLikeSumAggregateInputType = {
    userId?: true
  }

  export type ReviewLikeMinAggregateInputType = {
    id?: true
    userId?: true
    reviewId?: true
  }

  export type ReviewLikeMaxAggregateInputType = {
    id?: true
    userId?: true
    reviewId?: true
  }

  export type ReviewLikeCountAggregateInputType = {
    id?: true
    userId?: true
    reviewId?: true
    _all?: true
  }

  export type ReviewLikeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReviewLike to aggregate.
     */
    where?: ReviewLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewLikes to fetch.
     */
    orderBy?: ReviewLikeOrderByWithRelationInput | ReviewLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReviewLikes
    **/
    _count?: true | ReviewLikeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewLikeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewLikeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewLikeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewLikeMaxAggregateInputType
  }

  export type GetReviewLikeAggregateType<T extends ReviewLikeAggregateArgs> = {
        [P in keyof T & keyof AggregateReviewLike]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReviewLike[P]>
      : GetScalarType<T[P], AggregateReviewLike[P]>
  }




  export type ReviewLikeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewLikeWhereInput
    orderBy?: ReviewLikeOrderByWithAggregationInput | ReviewLikeOrderByWithAggregationInput[]
    by: ReviewLikeScalarFieldEnum[] | ReviewLikeScalarFieldEnum
    having?: ReviewLikeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewLikeCountAggregateInputType | true
    _avg?: ReviewLikeAvgAggregateInputType
    _sum?: ReviewLikeSumAggregateInputType
    _min?: ReviewLikeMinAggregateInputType
    _max?: ReviewLikeMaxAggregateInputType
  }

  export type ReviewLikeGroupByOutputType = {
    id: string
    userId: number
    reviewId: string
    _count: ReviewLikeCountAggregateOutputType | null
    _avg: ReviewLikeAvgAggregateOutputType | null
    _sum: ReviewLikeSumAggregateOutputType | null
    _min: ReviewLikeMinAggregateOutputType | null
    _max: ReviewLikeMaxAggregateOutputType | null
  }

  type GetReviewLikeGroupByPayload<T extends ReviewLikeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewLikeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewLikeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewLikeGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewLikeGroupByOutputType[P]>
        }
      >
    >


  export type ReviewLikeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    reviewId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    review?: boolean | ReviewDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviewLike"]>



  export type ReviewLikeSelectScalar = {
    id?: boolean
    userId?: boolean
    reviewId?: boolean
  }

  export type ReviewLikeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "reviewId", ExtArgs["result"]["reviewLike"]>
  export type ReviewLikeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    review?: boolean | ReviewDefaultArgs<ExtArgs>
  }

  export type $ReviewLikePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReviewLike"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      review: Prisma.$ReviewPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: number
      reviewId: string
    }, ExtArgs["result"]["reviewLike"]>
    composites: {}
  }

  type ReviewLikeGetPayload<S extends boolean | null | undefined | ReviewLikeDefaultArgs> = $Result.GetResult<Prisma.$ReviewLikePayload, S>

  type ReviewLikeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewLikeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewLikeCountAggregateInputType | true
    }

  export interface ReviewLikeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReviewLike'], meta: { name: 'ReviewLike' } }
    /**
     * Find zero or one ReviewLike that matches the filter.
     * @param {ReviewLikeFindUniqueArgs} args - Arguments to find a ReviewLike
     * @example
     * // Get one ReviewLike
     * const reviewLike = await prisma.reviewLike.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewLikeFindUniqueArgs>(args: SelectSubset<T, ReviewLikeFindUniqueArgs<ExtArgs>>): Prisma__ReviewLikeClient<$Result.GetResult<Prisma.$ReviewLikePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ReviewLike that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewLikeFindUniqueOrThrowArgs} args - Arguments to find a ReviewLike
     * @example
     * // Get one ReviewLike
     * const reviewLike = await prisma.reviewLike.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewLikeFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewLikeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewLikeClient<$Result.GetResult<Prisma.$ReviewLikePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReviewLike that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewLikeFindFirstArgs} args - Arguments to find a ReviewLike
     * @example
     * // Get one ReviewLike
     * const reviewLike = await prisma.reviewLike.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewLikeFindFirstArgs>(args?: SelectSubset<T, ReviewLikeFindFirstArgs<ExtArgs>>): Prisma__ReviewLikeClient<$Result.GetResult<Prisma.$ReviewLikePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReviewLike that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewLikeFindFirstOrThrowArgs} args - Arguments to find a ReviewLike
     * @example
     * // Get one ReviewLike
     * const reviewLike = await prisma.reviewLike.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewLikeFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewLikeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewLikeClient<$Result.GetResult<Prisma.$ReviewLikePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ReviewLikes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewLikeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReviewLikes
     * const reviewLikes = await prisma.reviewLike.findMany()
     * 
     * // Get first 10 ReviewLikes
     * const reviewLikes = await prisma.reviewLike.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewLikeWithIdOnly = await prisma.reviewLike.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewLikeFindManyArgs>(args?: SelectSubset<T, ReviewLikeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewLikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ReviewLike.
     * @param {ReviewLikeCreateArgs} args - Arguments to create a ReviewLike.
     * @example
     * // Create one ReviewLike
     * const ReviewLike = await prisma.reviewLike.create({
     *   data: {
     *     // ... data to create a ReviewLike
     *   }
     * })
     * 
     */
    create<T extends ReviewLikeCreateArgs>(args: SelectSubset<T, ReviewLikeCreateArgs<ExtArgs>>): Prisma__ReviewLikeClient<$Result.GetResult<Prisma.$ReviewLikePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ReviewLikes.
     * @param {ReviewLikeCreateManyArgs} args - Arguments to create many ReviewLikes.
     * @example
     * // Create many ReviewLikes
     * const reviewLike = await prisma.reviewLike.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewLikeCreateManyArgs>(args?: SelectSubset<T, ReviewLikeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ReviewLike.
     * @param {ReviewLikeDeleteArgs} args - Arguments to delete one ReviewLike.
     * @example
     * // Delete one ReviewLike
     * const ReviewLike = await prisma.reviewLike.delete({
     *   where: {
     *     // ... filter to delete one ReviewLike
     *   }
     * })
     * 
     */
    delete<T extends ReviewLikeDeleteArgs>(args: SelectSubset<T, ReviewLikeDeleteArgs<ExtArgs>>): Prisma__ReviewLikeClient<$Result.GetResult<Prisma.$ReviewLikePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ReviewLike.
     * @param {ReviewLikeUpdateArgs} args - Arguments to update one ReviewLike.
     * @example
     * // Update one ReviewLike
     * const reviewLike = await prisma.reviewLike.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewLikeUpdateArgs>(args: SelectSubset<T, ReviewLikeUpdateArgs<ExtArgs>>): Prisma__ReviewLikeClient<$Result.GetResult<Prisma.$ReviewLikePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ReviewLikes.
     * @param {ReviewLikeDeleteManyArgs} args - Arguments to filter ReviewLikes to delete.
     * @example
     * // Delete a few ReviewLikes
     * const { count } = await prisma.reviewLike.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewLikeDeleteManyArgs>(args?: SelectSubset<T, ReviewLikeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReviewLikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewLikeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReviewLikes
     * const reviewLike = await prisma.reviewLike.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewLikeUpdateManyArgs>(args: SelectSubset<T, ReviewLikeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ReviewLike.
     * @param {ReviewLikeUpsertArgs} args - Arguments to update or create a ReviewLike.
     * @example
     * // Update or create a ReviewLike
     * const reviewLike = await prisma.reviewLike.upsert({
     *   create: {
     *     // ... data to create a ReviewLike
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReviewLike we want to update
     *   }
     * })
     */
    upsert<T extends ReviewLikeUpsertArgs>(args: SelectSubset<T, ReviewLikeUpsertArgs<ExtArgs>>): Prisma__ReviewLikeClient<$Result.GetResult<Prisma.$ReviewLikePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ReviewLikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewLikeCountArgs} args - Arguments to filter ReviewLikes to count.
     * @example
     * // Count the number of ReviewLikes
     * const count = await prisma.reviewLike.count({
     *   where: {
     *     // ... the filter for the ReviewLikes we want to count
     *   }
     * })
    **/
    count<T extends ReviewLikeCountArgs>(
      args?: Subset<T, ReviewLikeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewLikeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReviewLike.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewLikeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReviewLikeAggregateArgs>(args: Subset<T, ReviewLikeAggregateArgs>): Prisma.PrismaPromise<GetReviewLikeAggregateType<T>>

    /**
     * Group by ReviewLike.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewLikeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReviewLikeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewLikeGroupByArgs['orderBy'] }
        : { orderBy?: ReviewLikeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReviewLikeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewLikeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReviewLike model
   */
  readonly fields: ReviewLikeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReviewLike.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewLikeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    review<T extends ReviewDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReviewDefaultArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ReviewLike model
   */
  interface ReviewLikeFieldRefs {
    readonly id: FieldRef<"ReviewLike", 'String'>
    readonly userId: FieldRef<"ReviewLike", 'Int'>
    readonly reviewId: FieldRef<"ReviewLike", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ReviewLike findUnique
   */
  export type ReviewLikeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewLike
     */
    select?: ReviewLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewLike
     */
    omit?: ReviewLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewLikeInclude<ExtArgs> | null
    /**
     * Filter, which ReviewLike to fetch.
     */
    where: ReviewLikeWhereUniqueInput
  }

  /**
   * ReviewLike findUniqueOrThrow
   */
  export type ReviewLikeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewLike
     */
    select?: ReviewLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewLike
     */
    omit?: ReviewLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewLikeInclude<ExtArgs> | null
    /**
     * Filter, which ReviewLike to fetch.
     */
    where: ReviewLikeWhereUniqueInput
  }

  /**
   * ReviewLike findFirst
   */
  export type ReviewLikeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewLike
     */
    select?: ReviewLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewLike
     */
    omit?: ReviewLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewLikeInclude<ExtArgs> | null
    /**
     * Filter, which ReviewLike to fetch.
     */
    where?: ReviewLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewLikes to fetch.
     */
    orderBy?: ReviewLikeOrderByWithRelationInput | ReviewLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReviewLikes.
     */
    cursor?: ReviewLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReviewLikes.
     */
    distinct?: ReviewLikeScalarFieldEnum | ReviewLikeScalarFieldEnum[]
  }

  /**
   * ReviewLike findFirstOrThrow
   */
  export type ReviewLikeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewLike
     */
    select?: ReviewLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewLike
     */
    omit?: ReviewLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewLikeInclude<ExtArgs> | null
    /**
     * Filter, which ReviewLike to fetch.
     */
    where?: ReviewLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewLikes to fetch.
     */
    orderBy?: ReviewLikeOrderByWithRelationInput | ReviewLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReviewLikes.
     */
    cursor?: ReviewLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReviewLikes.
     */
    distinct?: ReviewLikeScalarFieldEnum | ReviewLikeScalarFieldEnum[]
  }

  /**
   * ReviewLike findMany
   */
  export type ReviewLikeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewLike
     */
    select?: ReviewLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewLike
     */
    omit?: ReviewLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewLikeInclude<ExtArgs> | null
    /**
     * Filter, which ReviewLikes to fetch.
     */
    where?: ReviewLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewLikes to fetch.
     */
    orderBy?: ReviewLikeOrderByWithRelationInput | ReviewLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReviewLikes.
     */
    cursor?: ReviewLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewLikes.
     */
    skip?: number
    distinct?: ReviewLikeScalarFieldEnum | ReviewLikeScalarFieldEnum[]
  }

  /**
   * ReviewLike create
   */
  export type ReviewLikeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewLike
     */
    select?: ReviewLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewLike
     */
    omit?: ReviewLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewLikeInclude<ExtArgs> | null
    /**
     * The data needed to create a ReviewLike.
     */
    data: XOR<ReviewLikeCreateInput, ReviewLikeUncheckedCreateInput>
  }

  /**
   * ReviewLike createMany
   */
  export type ReviewLikeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReviewLikes.
     */
    data: ReviewLikeCreateManyInput | ReviewLikeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReviewLike update
   */
  export type ReviewLikeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewLike
     */
    select?: ReviewLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewLike
     */
    omit?: ReviewLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewLikeInclude<ExtArgs> | null
    /**
     * The data needed to update a ReviewLike.
     */
    data: XOR<ReviewLikeUpdateInput, ReviewLikeUncheckedUpdateInput>
    /**
     * Choose, which ReviewLike to update.
     */
    where: ReviewLikeWhereUniqueInput
  }

  /**
   * ReviewLike updateMany
   */
  export type ReviewLikeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReviewLikes.
     */
    data: XOR<ReviewLikeUpdateManyMutationInput, ReviewLikeUncheckedUpdateManyInput>
    /**
     * Filter which ReviewLikes to update
     */
    where?: ReviewLikeWhereInput
    /**
     * Limit how many ReviewLikes to update.
     */
    limit?: number
  }

  /**
   * ReviewLike upsert
   */
  export type ReviewLikeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewLike
     */
    select?: ReviewLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewLike
     */
    omit?: ReviewLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewLikeInclude<ExtArgs> | null
    /**
     * The filter to search for the ReviewLike to update in case it exists.
     */
    where: ReviewLikeWhereUniqueInput
    /**
     * In case the ReviewLike found by the `where` argument doesn't exist, create a new ReviewLike with this data.
     */
    create: XOR<ReviewLikeCreateInput, ReviewLikeUncheckedCreateInput>
    /**
     * In case the ReviewLike was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewLikeUpdateInput, ReviewLikeUncheckedUpdateInput>
  }

  /**
   * ReviewLike delete
   */
  export type ReviewLikeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewLike
     */
    select?: ReviewLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewLike
     */
    omit?: ReviewLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewLikeInclude<ExtArgs> | null
    /**
     * Filter which ReviewLike to delete.
     */
    where: ReviewLikeWhereUniqueInput
  }

  /**
   * ReviewLike deleteMany
   */
  export type ReviewLikeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReviewLikes to delete
     */
    where?: ReviewLikeWhereInput
    /**
     * Limit how many ReviewLikes to delete.
     */
    limit?: number
  }

  /**
   * ReviewLike without action
   */
  export type ReviewLikeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewLike
     */
    select?: ReviewLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewLike
     */
    omit?: ReviewLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewLikeInclude<ExtArgs> | null
  }


  /**
   * Model UserVoyage
   */

  export type AggregateUserVoyage = {
    _count: UserVoyageCountAggregateOutputType | null
    _avg: UserVoyageAvgAggregateOutputType | null
    _sum: UserVoyageSumAggregateOutputType | null
    _min: UserVoyageMinAggregateOutputType | null
    _max: UserVoyageMaxAggregateOutputType | null
  }

  export type UserVoyageAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type UserVoyageSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type UserVoyageMinAggregateOutputType = {
    id: number | null
    userId: number | null
    destinationId: string | null
    createdAt: Date | null
  }

  export type UserVoyageMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    destinationId: string | null
    createdAt: Date | null
  }

  export type UserVoyageCountAggregateOutputType = {
    id: number
    userId: number
    destinationId: number
    createdAt: number
    _all: number
  }


  export type UserVoyageAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type UserVoyageSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type UserVoyageMinAggregateInputType = {
    id?: true
    userId?: true
    destinationId?: true
    createdAt?: true
  }

  export type UserVoyageMaxAggregateInputType = {
    id?: true
    userId?: true
    destinationId?: true
    createdAt?: true
  }

  export type UserVoyageCountAggregateInputType = {
    id?: true
    userId?: true
    destinationId?: true
    createdAt?: true
    _all?: true
  }

  export type UserVoyageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserVoyage to aggregate.
     */
    where?: UserVoyageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserVoyages to fetch.
     */
    orderBy?: UserVoyageOrderByWithRelationInput | UserVoyageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserVoyageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserVoyages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserVoyages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserVoyages
    **/
    _count?: true | UserVoyageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserVoyageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserVoyageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserVoyageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserVoyageMaxAggregateInputType
  }

  export type GetUserVoyageAggregateType<T extends UserVoyageAggregateArgs> = {
        [P in keyof T & keyof AggregateUserVoyage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserVoyage[P]>
      : GetScalarType<T[P], AggregateUserVoyage[P]>
  }




  export type UserVoyageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserVoyageWhereInput
    orderBy?: UserVoyageOrderByWithAggregationInput | UserVoyageOrderByWithAggregationInput[]
    by: UserVoyageScalarFieldEnum[] | UserVoyageScalarFieldEnum
    having?: UserVoyageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserVoyageCountAggregateInputType | true
    _avg?: UserVoyageAvgAggregateInputType
    _sum?: UserVoyageSumAggregateInputType
    _min?: UserVoyageMinAggregateInputType
    _max?: UserVoyageMaxAggregateInputType
  }

  export type UserVoyageGroupByOutputType = {
    id: number
    userId: number
    destinationId: string
    createdAt: Date
    _count: UserVoyageCountAggregateOutputType | null
    _avg: UserVoyageAvgAggregateOutputType | null
    _sum: UserVoyageSumAggregateOutputType | null
    _min: UserVoyageMinAggregateOutputType | null
    _max: UserVoyageMaxAggregateOutputType | null
  }

  type GetUserVoyageGroupByPayload<T extends UserVoyageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserVoyageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserVoyageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserVoyageGroupByOutputType[P]>
            : GetScalarType<T[P], UserVoyageGroupByOutputType[P]>
        }
      >
    >


  export type UserVoyageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    destinationId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    destination?: boolean | DestinationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userVoyage"]>



  export type UserVoyageSelectScalar = {
    id?: boolean
    userId?: boolean
    destinationId?: boolean
    createdAt?: boolean
  }

  export type UserVoyageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "destinationId" | "createdAt", ExtArgs["result"]["userVoyage"]>
  export type UserVoyageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    destination?: boolean | DestinationDefaultArgs<ExtArgs>
  }

  export type $UserVoyagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserVoyage"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      destination: Prisma.$DestinationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      destinationId: string
      createdAt: Date
    }, ExtArgs["result"]["userVoyage"]>
    composites: {}
  }

  type UserVoyageGetPayload<S extends boolean | null | undefined | UserVoyageDefaultArgs> = $Result.GetResult<Prisma.$UserVoyagePayload, S>

  type UserVoyageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserVoyageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserVoyageCountAggregateInputType | true
    }

  export interface UserVoyageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserVoyage'], meta: { name: 'UserVoyage' } }
    /**
     * Find zero or one UserVoyage that matches the filter.
     * @param {UserVoyageFindUniqueArgs} args - Arguments to find a UserVoyage
     * @example
     * // Get one UserVoyage
     * const userVoyage = await prisma.userVoyage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserVoyageFindUniqueArgs>(args: SelectSubset<T, UserVoyageFindUniqueArgs<ExtArgs>>): Prisma__UserVoyageClient<$Result.GetResult<Prisma.$UserVoyagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserVoyage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserVoyageFindUniqueOrThrowArgs} args - Arguments to find a UserVoyage
     * @example
     * // Get one UserVoyage
     * const userVoyage = await prisma.userVoyage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserVoyageFindUniqueOrThrowArgs>(args: SelectSubset<T, UserVoyageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserVoyageClient<$Result.GetResult<Prisma.$UserVoyagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserVoyage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserVoyageFindFirstArgs} args - Arguments to find a UserVoyage
     * @example
     * // Get one UserVoyage
     * const userVoyage = await prisma.userVoyage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserVoyageFindFirstArgs>(args?: SelectSubset<T, UserVoyageFindFirstArgs<ExtArgs>>): Prisma__UserVoyageClient<$Result.GetResult<Prisma.$UserVoyagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserVoyage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserVoyageFindFirstOrThrowArgs} args - Arguments to find a UserVoyage
     * @example
     * // Get one UserVoyage
     * const userVoyage = await prisma.userVoyage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserVoyageFindFirstOrThrowArgs>(args?: SelectSubset<T, UserVoyageFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserVoyageClient<$Result.GetResult<Prisma.$UserVoyagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserVoyages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserVoyageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserVoyages
     * const userVoyages = await prisma.userVoyage.findMany()
     * 
     * // Get first 10 UserVoyages
     * const userVoyages = await prisma.userVoyage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userVoyageWithIdOnly = await prisma.userVoyage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserVoyageFindManyArgs>(args?: SelectSubset<T, UserVoyageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserVoyagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserVoyage.
     * @param {UserVoyageCreateArgs} args - Arguments to create a UserVoyage.
     * @example
     * // Create one UserVoyage
     * const UserVoyage = await prisma.userVoyage.create({
     *   data: {
     *     // ... data to create a UserVoyage
     *   }
     * })
     * 
     */
    create<T extends UserVoyageCreateArgs>(args: SelectSubset<T, UserVoyageCreateArgs<ExtArgs>>): Prisma__UserVoyageClient<$Result.GetResult<Prisma.$UserVoyagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserVoyages.
     * @param {UserVoyageCreateManyArgs} args - Arguments to create many UserVoyages.
     * @example
     * // Create many UserVoyages
     * const userVoyage = await prisma.userVoyage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserVoyageCreateManyArgs>(args?: SelectSubset<T, UserVoyageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserVoyage.
     * @param {UserVoyageDeleteArgs} args - Arguments to delete one UserVoyage.
     * @example
     * // Delete one UserVoyage
     * const UserVoyage = await prisma.userVoyage.delete({
     *   where: {
     *     // ... filter to delete one UserVoyage
     *   }
     * })
     * 
     */
    delete<T extends UserVoyageDeleteArgs>(args: SelectSubset<T, UserVoyageDeleteArgs<ExtArgs>>): Prisma__UserVoyageClient<$Result.GetResult<Prisma.$UserVoyagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserVoyage.
     * @param {UserVoyageUpdateArgs} args - Arguments to update one UserVoyage.
     * @example
     * // Update one UserVoyage
     * const userVoyage = await prisma.userVoyage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserVoyageUpdateArgs>(args: SelectSubset<T, UserVoyageUpdateArgs<ExtArgs>>): Prisma__UserVoyageClient<$Result.GetResult<Prisma.$UserVoyagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserVoyages.
     * @param {UserVoyageDeleteManyArgs} args - Arguments to filter UserVoyages to delete.
     * @example
     * // Delete a few UserVoyages
     * const { count } = await prisma.userVoyage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserVoyageDeleteManyArgs>(args?: SelectSubset<T, UserVoyageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserVoyages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserVoyageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserVoyages
     * const userVoyage = await prisma.userVoyage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserVoyageUpdateManyArgs>(args: SelectSubset<T, UserVoyageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserVoyage.
     * @param {UserVoyageUpsertArgs} args - Arguments to update or create a UserVoyage.
     * @example
     * // Update or create a UserVoyage
     * const userVoyage = await prisma.userVoyage.upsert({
     *   create: {
     *     // ... data to create a UserVoyage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserVoyage we want to update
     *   }
     * })
     */
    upsert<T extends UserVoyageUpsertArgs>(args: SelectSubset<T, UserVoyageUpsertArgs<ExtArgs>>): Prisma__UserVoyageClient<$Result.GetResult<Prisma.$UserVoyagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserVoyages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserVoyageCountArgs} args - Arguments to filter UserVoyages to count.
     * @example
     * // Count the number of UserVoyages
     * const count = await prisma.userVoyage.count({
     *   where: {
     *     // ... the filter for the UserVoyages we want to count
     *   }
     * })
    **/
    count<T extends UserVoyageCountArgs>(
      args?: Subset<T, UserVoyageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserVoyageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserVoyage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserVoyageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserVoyageAggregateArgs>(args: Subset<T, UserVoyageAggregateArgs>): Prisma.PrismaPromise<GetUserVoyageAggregateType<T>>

    /**
     * Group by UserVoyage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserVoyageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserVoyageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserVoyageGroupByArgs['orderBy'] }
        : { orderBy?: UserVoyageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserVoyageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserVoyageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserVoyage model
   */
  readonly fields: UserVoyageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserVoyage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserVoyageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    destination<T extends DestinationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DestinationDefaultArgs<ExtArgs>>): Prisma__DestinationClient<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserVoyage model
   */
  interface UserVoyageFieldRefs {
    readonly id: FieldRef<"UserVoyage", 'Int'>
    readonly userId: FieldRef<"UserVoyage", 'Int'>
    readonly destinationId: FieldRef<"UserVoyage", 'String'>
    readonly createdAt: FieldRef<"UserVoyage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserVoyage findUnique
   */
  export type UserVoyageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVoyage
     */
    select?: UserVoyageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserVoyage
     */
    omit?: UserVoyageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVoyageInclude<ExtArgs> | null
    /**
     * Filter, which UserVoyage to fetch.
     */
    where: UserVoyageWhereUniqueInput
  }

  /**
   * UserVoyage findUniqueOrThrow
   */
  export type UserVoyageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVoyage
     */
    select?: UserVoyageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserVoyage
     */
    omit?: UserVoyageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVoyageInclude<ExtArgs> | null
    /**
     * Filter, which UserVoyage to fetch.
     */
    where: UserVoyageWhereUniqueInput
  }

  /**
   * UserVoyage findFirst
   */
  export type UserVoyageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVoyage
     */
    select?: UserVoyageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserVoyage
     */
    omit?: UserVoyageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVoyageInclude<ExtArgs> | null
    /**
     * Filter, which UserVoyage to fetch.
     */
    where?: UserVoyageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserVoyages to fetch.
     */
    orderBy?: UserVoyageOrderByWithRelationInput | UserVoyageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserVoyages.
     */
    cursor?: UserVoyageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserVoyages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserVoyages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserVoyages.
     */
    distinct?: UserVoyageScalarFieldEnum | UserVoyageScalarFieldEnum[]
  }

  /**
   * UserVoyage findFirstOrThrow
   */
  export type UserVoyageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVoyage
     */
    select?: UserVoyageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserVoyage
     */
    omit?: UserVoyageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVoyageInclude<ExtArgs> | null
    /**
     * Filter, which UserVoyage to fetch.
     */
    where?: UserVoyageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserVoyages to fetch.
     */
    orderBy?: UserVoyageOrderByWithRelationInput | UserVoyageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserVoyages.
     */
    cursor?: UserVoyageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserVoyages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserVoyages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserVoyages.
     */
    distinct?: UserVoyageScalarFieldEnum | UserVoyageScalarFieldEnum[]
  }

  /**
   * UserVoyage findMany
   */
  export type UserVoyageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVoyage
     */
    select?: UserVoyageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserVoyage
     */
    omit?: UserVoyageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVoyageInclude<ExtArgs> | null
    /**
     * Filter, which UserVoyages to fetch.
     */
    where?: UserVoyageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserVoyages to fetch.
     */
    orderBy?: UserVoyageOrderByWithRelationInput | UserVoyageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserVoyages.
     */
    cursor?: UserVoyageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserVoyages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserVoyages.
     */
    skip?: number
    distinct?: UserVoyageScalarFieldEnum | UserVoyageScalarFieldEnum[]
  }

  /**
   * UserVoyage create
   */
  export type UserVoyageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVoyage
     */
    select?: UserVoyageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserVoyage
     */
    omit?: UserVoyageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVoyageInclude<ExtArgs> | null
    /**
     * The data needed to create a UserVoyage.
     */
    data: XOR<UserVoyageCreateInput, UserVoyageUncheckedCreateInput>
  }

  /**
   * UserVoyage createMany
   */
  export type UserVoyageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserVoyages.
     */
    data: UserVoyageCreateManyInput | UserVoyageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserVoyage update
   */
  export type UserVoyageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVoyage
     */
    select?: UserVoyageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserVoyage
     */
    omit?: UserVoyageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVoyageInclude<ExtArgs> | null
    /**
     * The data needed to update a UserVoyage.
     */
    data: XOR<UserVoyageUpdateInput, UserVoyageUncheckedUpdateInput>
    /**
     * Choose, which UserVoyage to update.
     */
    where: UserVoyageWhereUniqueInput
  }

  /**
   * UserVoyage updateMany
   */
  export type UserVoyageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserVoyages.
     */
    data: XOR<UserVoyageUpdateManyMutationInput, UserVoyageUncheckedUpdateManyInput>
    /**
     * Filter which UserVoyages to update
     */
    where?: UserVoyageWhereInput
    /**
     * Limit how many UserVoyages to update.
     */
    limit?: number
  }

  /**
   * UserVoyage upsert
   */
  export type UserVoyageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVoyage
     */
    select?: UserVoyageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserVoyage
     */
    omit?: UserVoyageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVoyageInclude<ExtArgs> | null
    /**
     * The filter to search for the UserVoyage to update in case it exists.
     */
    where: UserVoyageWhereUniqueInput
    /**
     * In case the UserVoyage found by the `where` argument doesn't exist, create a new UserVoyage with this data.
     */
    create: XOR<UserVoyageCreateInput, UserVoyageUncheckedCreateInput>
    /**
     * In case the UserVoyage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserVoyageUpdateInput, UserVoyageUncheckedUpdateInput>
  }

  /**
   * UserVoyage delete
   */
  export type UserVoyageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVoyage
     */
    select?: UserVoyageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserVoyage
     */
    omit?: UserVoyageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVoyageInclude<ExtArgs> | null
    /**
     * Filter which UserVoyage to delete.
     */
    where: UserVoyageWhereUniqueInput
  }

  /**
   * UserVoyage deleteMany
   */
  export type UserVoyageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserVoyages to delete
     */
    where?: UserVoyageWhereInput
    /**
     * Limit how many UserVoyages to delete.
     */
    limit?: number
  }

  /**
   * UserVoyage without action
   */
  export type UserVoyageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVoyage
     */
    select?: UserVoyageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserVoyage
     */
    omit?: UserVoyageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVoyageInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    nom: 'nom',
    prenom: 'prenom',
    email: 'email',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt',
    bio: 'bio',
    instagram: 'instagram',
    facebook: 'facebook',
    youtube: 'youtube',
    isPublic: 'isPublic',
    adventurerType: 'adventurerType',
    avatar: 'avatar',
    coverImage: 'coverImage'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const DestinationScalarFieldEnum: {
    id: 'id',
    titre: 'titre',
    pays: 'pays',
    continent: 'continent',
    description: 'description',
    imagePrincipale: 'imagePrincipale',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    utilisateurId: 'utilisateurId'
  };

  export type DestinationScalarFieldEnum = (typeof DestinationScalarFieldEnum)[keyof typeof DestinationScalarFieldEnum]


  export const SectionScalarFieldEnum: {
    id: 'id',
    titre: 'titre',
    contenu: 'contenu',
    ordre: 'ordre',
    type: 'type',
    destinationId: 'destinationId',
    updatedAt: 'updatedAt'
  };

  export type SectionScalarFieldEnum = (typeof SectionScalarFieldEnum)[keyof typeof SectionScalarFieldEnum]


  export const BulletPointScalarFieldEnum: {
    id: 'id',
    contenu: 'contenu',
    ordre: 'ordre',
    sectionId: 'sectionId'
  };

  export type BulletPointScalarFieldEnum = (typeof BulletPointScalarFieldEnum)[keyof typeof BulletPointScalarFieldEnum]


  export const GroupedBulletPointScalarFieldEnum: {
    id: 'id',
    titre: 'titre',
    ordre: 'ordre',
    sectionId: 'sectionId'
  };

  export type GroupedBulletPointScalarFieldEnum = (typeof GroupedBulletPointScalarFieldEnum)[keyof typeof GroupedBulletPointScalarFieldEnum]


  export const BulletPointContentScalarFieldEnum: {
    id: 'id',
    contenu: 'contenu',
    ordre: 'ordre',
    groupId: 'groupId'
  };

  export type BulletPointContentScalarFieldEnum = (typeof BulletPointContentScalarFieldEnum)[keyof typeof BulletPointContentScalarFieldEnum]


  export const ImageScalarFieldEnum: {
    id: 'id',
    url: 'url',
    alt: 'alt',
    sectionId: 'sectionId'
  };

  export type ImageScalarFieldEnum = (typeof ImageScalarFieldEnum)[keyof typeof ImageScalarFieldEnum]


  export const ChecklistScalarFieldEnum: {
    id: 'id',
    titre: 'titre',
    userId: 'userId',
    voyageId: 'voyageId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ChecklistScalarFieldEnum = (typeof ChecklistScalarFieldEnum)[keyof typeof ChecklistScalarFieldEnum]


  export const ChecklistCategoryScalarFieldEnum: {
    id: 'id',
    titre: 'titre',
    icone: 'icone',
    checklistId: 'checklistId'
  };

  export type ChecklistCategoryScalarFieldEnum = (typeof ChecklistCategoryScalarFieldEnum)[keyof typeof ChecklistCategoryScalarFieldEnum]


  export const ChecklistItemScalarFieldEnum: {
    id: 'id',
    titre: 'titre',
    description: 'description',
    isChecked: 'isChecked',
    reminderDate: 'reminderDate',
    categoryId: 'categoryId'
  };

  export type ChecklistItemScalarFieldEnum = (typeof ChecklistItemScalarFieldEnum)[keyof typeof ChecklistItemScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    destinationId: 'destinationId',
    rating: 'rating',
    content: 'content',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const ReviewLikeScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    reviewId: 'reviewId'
  };

  export type ReviewLikeScalarFieldEnum = (typeof ReviewLikeScalarFieldEnum)[keyof typeof ReviewLikeScalarFieldEnum]


  export const UserVoyageScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    destinationId: 'destinationId',
    createdAt: 'createdAt'
  };

  export type UserVoyageScalarFieldEnum = (typeof UserVoyageScalarFieldEnum)[keyof typeof UserVoyageScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserOrderByRelevanceFieldEnum: {
    nom: 'nom',
    prenom: 'prenom',
    email: 'email',
    password: 'password',
    bio: 'bio',
    instagram: 'instagram',
    facebook: 'facebook',
    youtube: 'youtube',
    adventurerType: 'adventurerType',
    avatar: 'avatar',
    coverImage: 'coverImage'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const DestinationOrderByRelevanceFieldEnum: {
    id: 'id',
    titre: 'titre',
    pays: 'pays',
    continent: 'continent',
    description: 'description',
    imagePrincipale: 'imagePrincipale'
  };

  export type DestinationOrderByRelevanceFieldEnum = (typeof DestinationOrderByRelevanceFieldEnum)[keyof typeof DestinationOrderByRelevanceFieldEnum]


  export const SectionOrderByRelevanceFieldEnum: {
    id: 'id',
    titre: 'titre',
    contenu: 'contenu',
    destinationId: 'destinationId'
  };

  export type SectionOrderByRelevanceFieldEnum = (typeof SectionOrderByRelevanceFieldEnum)[keyof typeof SectionOrderByRelevanceFieldEnum]


  export const BulletPointOrderByRelevanceFieldEnum: {
    id: 'id',
    contenu: 'contenu',
    sectionId: 'sectionId'
  };

  export type BulletPointOrderByRelevanceFieldEnum = (typeof BulletPointOrderByRelevanceFieldEnum)[keyof typeof BulletPointOrderByRelevanceFieldEnum]


  export const GroupedBulletPointOrderByRelevanceFieldEnum: {
    id: 'id',
    titre: 'titre',
    sectionId: 'sectionId'
  };

  export type GroupedBulletPointOrderByRelevanceFieldEnum = (typeof GroupedBulletPointOrderByRelevanceFieldEnum)[keyof typeof GroupedBulletPointOrderByRelevanceFieldEnum]


  export const BulletPointContentOrderByRelevanceFieldEnum: {
    id: 'id',
    contenu: 'contenu',
    groupId: 'groupId'
  };

  export type BulletPointContentOrderByRelevanceFieldEnum = (typeof BulletPointContentOrderByRelevanceFieldEnum)[keyof typeof BulletPointContentOrderByRelevanceFieldEnum]


  export const ImageOrderByRelevanceFieldEnum: {
    id: 'id',
    url: 'url',
    alt: 'alt',
    sectionId: 'sectionId'
  };

  export type ImageOrderByRelevanceFieldEnum = (typeof ImageOrderByRelevanceFieldEnum)[keyof typeof ImageOrderByRelevanceFieldEnum]


  export const ChecklistOrderByRelevanceFieldEnum: {
    id: 'id',
    titre: 'titre',
    voyageId: 'voyageId'
  };

  export type ChecklistOrderByRelevanceFieldEnum = (typeof ChecklistOrderByRelevanceFieldEnum)[keyof typeof ChecklistOrderByRelevanceFieldEnum]


  export const ChecklistCategoryOrderByRelevanceFieldEnum: {
    id: 'id',
    titre: 'titre',
    icone: 'icone',
    checklistId: 'checklistId'
  };

  export type ChecklistCategoryOrderByRelevanceFieldEnum = (typeof ChecklistCategoryOrderByRelevanceFieldEnum)[keyof typeof ChecklistCategoryOrderByRelevanceFieldEnum]


  export const ChecklistItemOrderByRelevanceFieldEnum: {
    id: 'id',
    titre: 'titre',
    description: 'description',
    categoryId: 'categoryId'
  };

  export type ChecklistItemOrderByRelevanceFieldEnum = (typeof ChecklistItemOrderByRelevanceFieldEnum)[keyof typeof ChecklistItemOrderByRelevanceFieldEnum]


  export const ReviewOrderByRelevanceFieldEnum: {
    id: 'id',
    destinationId: 'destinationId',
    content: 'content'
  };

  export type ReviewOrderByRelevanceFieldEnum = (typeof ReviewOrderByRelevanceFieldEnum)[keyof typeof ReviewOrderByRelevanceFieldEnum]


  export const ReviewLikeOrderByRelevanceFieldEnum: {
    id: 'id',
    reviewId: 'reviewId'
  };

  export type ReviewLikeOrderByRelevanceFieldEnum = (typeof ReviewLikeOrderByRelevanceFieldEnum)[keyof typeof ReviewLikeOrderByRelevanceFieldEnum]


  export const UserVoyageOrderByRelevanceFieldEnum: {
    destinationId: 'destinationId'
  };

  export type UserVoyageOrderByRelevanceFieldEnum = (typeof UserVoyageOrderByRelevanceFieldEnum)[keyof typeof UserVoyageOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'SectionType'
   */
  export type EnumSectionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SectionType'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    nom?: StringFilter<"User"> | string
    prenom?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    bio?: StringNullableFilter<"User"> | string | null
    instagram?: StringNullableFilter<"User"> | string | null
    facebook?: StringNullableFilter<"User"> | string | null
    youtube?: StringNullableFilter<"User"> | string | null
    isPublic?: BoolFilter<"User"> | boolean
    adventurerType?: StringNullableFilter<"User"> | string | null
    avatar?: StringNullableFilter<"User"> | string | null
    coverImage?: StringNullableFilter<"User"> | string | null
    voyages?: DestinationListRelationFilter
    checklists?: ChecklistListRelationFilter
    reviews?: ReviewListRelationFilter
    reviewLikes?: ReviewLikeListRelationFilter
    userVoyages?: UserVoyageListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    bio?: SortOrderInput | SortOrder
    instagram?: SortOrderInput | SortOrder
    facebook?: SortOrderInput | SortOrder
    youtube?: SortOrderInput | SortOrder
    isPublic?: SortOrder
    adventurerType?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    coverImage?: SortOrderInput | SortOrder
    voyages?: DestinationOrderByRelationAggregateInput
    checklists?: ChecklistOrderByRelationAggregateInput
    reviews?: ReviewOrderByRelationAggregateInput
    reviewLikes?: ReviewLikeOrderByRelationAggregateInput
    userVoyages?: UserVoyageOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    nom?: StringFilter<"User"> | string
    prenom?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    bio?: StringNullableFilter<"User"> | string | null
    instagram?: StringNullableFilter<"User"> | string | null
    facebook?: StringNullableFilter<"User"> | string | null
    youtube?: StringNullableFilter<"User"> | string | null
    isPublic?: BoolFilter<"User"> | boolean
    adventurerType?: StringNullableFilter<"User"> | string | null
    avatar?: StringNullableFilter<"User"> | string | null
    coverImage?: StringNullableFilter<"User"> | string | null
    voyages?: DestinationListRelationFilter
    checklists?: ChecklistListRelationFilter
    reviews?: ReviewListRelationFilter
    reviewLikes?: ReviewLikeListRelationFilter
    userVoyages?: UserVoyageListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    bio?: SortOrderInput | SortOrder
    instagram?: SortOrderInput | SortOrder
    facebook?: SortOrderInput | SortOrder
    youtube?: SortOrderInput | SortOrder
    isPublic?: SortOrder
    adventurerType?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    coverImage?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    nom?: StringWithAggregatesFilter<"User"> | string
    prenom?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    bio?: StringNullableWithAggregatesFilter<"User"> | string | null
    instagram?: StringNullableWithAggregatesFilter<"User"> | string | null
    facebook?: StringNullableWithAggregatesFilter<"User"> | string | null
    youtube?: StringNullableWithAggregatesFilter<"User"> | string | null
    isPublic?: BoolWithAggregatesFilter<"User"> | boolean
    adventurerType?: StringNullableWithAggregatesFilter<"User"> | string | null
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
    coverImage?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type DestinationWhereInput = {
    AND?: DestinationWhereInput | DestinationWhereInput[]
    OR?: DestinationWhereInput[]
    NOT?: DestinationWhereInput | DestinationWhereInput[]
    id?: StringFilter<"Destination"> | string
    titre?: StringFilter<"Destination"> | string
    pays?: StringFilter<"Destination"> | string
    continent?: StringNullableFilter<"Destination"> | string | null
    description?: StringNullableFilter<"Destination"> | string | null
    imagePrincipale?: StringNullableFilter<"Destination"> | string | null
    createdAt?: DateTimeFilter<"Destination"> | Date | string
    updatedAt?: DateTimeFilter<"Destination"> | Date | string
    utilisateurId?: IntNullableFilter<"Destination"> | number | null
    sections?: SectionListRelationFilter
    utilisateur?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    checklists?: ChecklistListRelationFilter
    reviews?: ReviewListRelationFilter
    userVoyages?: UserVoyageListRelationFilter
  }

  export type DestinationOrderByWithRelationInput = {
    id?: SortOrder
    titre?: SortOrder
    pays?: SortOrder
    continent?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    imagePrincipale?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    utilisateurId?: SortOrderInput | SortOrder
    sections?: SectionOrderByRelationAggregateInput
    utilisateur?: UserOrderByWithRelationInput
    checklists?: ChecklistOrderByRelationAggregateInput
    reviews?: ReviewOrderByRelationAggregateInput
    userVoyages?: UserVoyageOrderByRelationAggregateInput
    _relevance?: DestinationOrderByRelevanceInput
  }

  export type DestinationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DestinationWhereInput | DestinationWhereInput[]
    OR?: DestinationWhereInput[]
    NOT?: DestinationWhereInput | DestinationWhereInput[]
    titre?: StringFilter<"Destination"> | string
    pays?: StringFilter<"Destination"> | string
    continent?: StringNullableFilter<"Destination"> | string | null
    description?: StringNullableFilter<"Destination"> | string | null
    imagePrincipale?: StringNullableFilter<"Destination"> | string | null
    createdAt?: DateTimeFilter<"Destination"> | Date | string
    updatedAt?: DateTimeFilter<"Destination"> | Date | string
    utilisateurId?: IntNullableFilter<"Destination"> | number | null
    sections?: SectionListRelationFilter
    utilisateur?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    checklists?: ChecklistListRelationFilter
    reviews?: ReviewListRelationFilter
    userVoyages?: UserVoyageListRelationFilter
  }, "id">

  export type DestinationOrderByWithAggregationInput = {
    id?: SortOrder
    titre?: SortOrder
    pays?: SortOrder
    continent?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    imagePrincipale?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    utilisateurId?: SortOrderInput | SortOrder
    _count?: DestinationCountOrderByAggregateInput
    _avg?: DestinationAvgOrderByAggregateInput
    _max?: DestinationMaxOrderByAggregateInput
    _min?: DestinationMinOrderByAggregateInput
    _sum?: DestinationSumOrderByAggregateInput
  }

  export type DestinationScalarWhereWithAggregatesInput = {
    AND?: DestinationScalarWhereWithAggregatesInput | DestinationScalarWhereWithAggregatesInput[]
    OR?: DestinationScalarWhereWithAggregatesInput[]
    NOT?: DestinationScalarWhereWithAggregatesInput | DestinationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Destination"> | string
    titre?: StringWithAggregatesFilter<"Destination"> | string
    pays?: StringWithAggregatesFilter<"Destination"> | string
    continent?: StringNullableWithAggregatesFilter<"Destination"> | string | null
    description?: StringNullableWithAggregatesFilter<"Destination"> | string | null
    imagePrincipale?: StringNullableWithAggregatesFilter<"Destination"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Destination"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Destination"> | Date | string
    utilisateurId?: IntNullableWithAggregatesFilter<"Destination"> | number | null
  }

  export type SectionWhereInput = {
    AND?: SectionWhereInput | SectionWhereInput[]
    OR?: SectionWhereInput[]
    NOT?: SectionWhereInput | SectionWhereInput[]
    id?: StringFilter<"Section"> | string
    titre?: StringFilter<"Section"> | string
    contenu?: StringNullableFilter<"Section"> | string | null
    ordre?: IntFilter<"Section"> | number
    type?: EnumSectionTypeFilter<"Section"> | $Enums.SectionType
    destinationId?: StringFilter<"Section"> | string
    updatedAt?: DateTimeFilter<"Section"> | Date | string
    bulletPoints?: BulletPointListRelationFilter
    groupedPoints?: GroupedBulletPointListRelationFilter
    images?: ImageListRelationFilter
    destination?: XOR<DestinationScalarRelationFilter, DestinationWhereInput>
  }

  export type SectionOrderByWithRelationInput = {
    id?: SortOrder
    titre?: SortOrder
    contenu?: SortOrderInput | SortOrder
    ordre?: SortOrder
    type?: SortOrder
    destinationId?: SortOrder
    updatedAt?: SortOrder
    bulletPoints?: BulletPointOrderByRelationAggregateInput
    groupedPoints?: GroupedBulletPointOrderByRelationAggregateInput
    images?: ImageOrderByRelationAggregateInput
    destination?: DestinationOrderByWithRelationInput
    _relevance?: SectionOrderByRelevanceInput
  }

  export type SectionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SectionWhereInput | SectionWhereInput[]
    OR?: SectionWhereInput[]
    NOT?: SectionWhereInput | SectionWhereInput[]
    titre?: StringFilter<"Section"> | string
    contenu?: StringNullableFilter<"Section"> | string | null
    ordre?: IntFilter<"Section"> | number
    type?: EnumSectionTypeFilter<"Section"> | $Enums.SectionType
    destinationId?: StringFilter<"Section"> | string
    updatedAt?: DateTimeFilter<"Section"> | Date | string
    bulletPoints?: BulletPointListRelationFilter
    groupedPoints?: GroupedBulletPointListRelationFilter
    images?: ImageListRelationFilter
    destination?: XOR<DestinationScalarRelationFilter, DestinationWhereInput>
  }, "id">

  export type SectionOrderByWithAggregationInput = {
    id?: SortOrder
    titre?: SortOrder
    contenu?: SortOrderInput | SortOrder
    ordre?: SortOrder
    type?: SortOrder
    destinationId?: SortOrder
    updatedAt?: SortOrder
    _count?: SectionCountOrderByAggregateInput
    _avg?: SectionAvgOrderByAggregateInput
    _max?: SectionMaxOrderByAggregateInput
    _min?: SectionMinOrderByAggregateInput
    _sum?: SectionSumOrderByAggregateInput
  }

  export type SectionScalarWhereWithAggregatesInput = {
    AND?: SectionScalarWhereWithAggregatesInput | SectionScalarWhereWithAggregatesInput[]
    OR?: SectionScalarWhereWithAggregatesInput[]
    NOT?: SectionScalarWhereWithAggregatesInput | SectionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Section"> | string
    titre?: StringWithAggregatesFilter<"Section"> | string
    contenu?: StringNullableWithAggregatesFilter<"Section"> | string | null
    ordre?: IntWithAggregatesFilter<"Section"> | number
    type?: EnumSectionTypeWithAggregatesFilter<"Section"> | $Enums.SectionType
    destinationId?: StringWithAggregatesFilter<"Section"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"Section"> | Date | string
  }

  export type BulletPointWhereInput = {
    AND?: BulletPointWhereInput | BulletPointWhereInput[]
    OR?: BulletPointWhereInput[]
    NOT?: BulletPointWhereInput | BulletPointWhereInput[]
    id?: StringFilter<"BulletPoint"> | string
    contenu?: StringNullableFilter<"BulletPoint"> | string | null
    ordre?: IntFilter<"BulletPoint"> | number
    sectionId?: StringFilter<"BulletPoint"> | string
    section?: XOR<SectionScalarRelationFilter, SectionWhereInput>
  }

  export type BulletPointOrderByWithRelationInput = {
    id?: SortOrder
    contenu?: SortOrderInput | SortOrder
    ordre?: SortOrder
    sectionId?: SortOrder
    section?: SectionOrderByWithRelationInput
    _relevance?: BulletPointOrderByRelevanceInput
  }

  export type BulletPointWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BulletPointWhereInput | BulletPointWhereInput[]
    OR?: BulletPointWhereInput[]
    NOT?: BulletPointWhereInput | BulletPointWhereInput[]
    contenu?: StringNullableFilter<"BulletPoint"> | string | null
    ordre?: IntFilter<"BulletPoint"> | number
    sectionId?: StringFilter<"BulletPoint"> | string
    section?: XOR<SectionScalarRelationFilter, SectionWhereInput>
  }, "id">

  export type BulletPointOrderByWithAggregationInput = {
    id?: SortOrder
    contenu?: SortOrderInput | SortOrder
    ordre?: SortOrder
    sectionId?: SortOrder
    _count?: BulletPointCountOrderByAggregateInput
    _avg?: BulletPointAvgOrderByAggregateInput
    _max?: BulletPointMaxOrderByAggregateInput
    _min?: BulletPointMinOrderByAggregateInput
    _sum?: BulletPointSumOrderByAggregateInput
  }

  export type BulletPointScalarWhereWithAggregatesInput = {
    AND?: BulletPointScalarWhereWithAggregatesInput | BulletPointScalarWhereWithAggregatesInput[]
    OR?: BulletPointScalarWhereWithAggregatesInput[]
    NOT?: BulletPointScalarWhereWithAggregatesInput | BulletPointScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BulletPoint"> | string
    contenu?: StringNullableWithAggregatesFilter<"BulletPoint"> | string | null
    ordre?: IntWithAggregatesFilter<"BulletPoint"> | number
    sectionId?: StringWithAggregatesFilter<"BulletPoint"> | string
  }

  export type GroupedBulletPointWhereInput = {
    AND?: GroupedBulletPointWhereInput | GroupedBulletPointWhereInput[]
    OR?: GroupedBulletPointWhereInput[]
    NOT?: GroupedBulletPointWhereInput | GroupedBulletPointWhereInput[]
    id?: StringFilter<"GroupedBulletPoint"> | string
    titre?: StringFilter<"GroupedBulletPoint"> | string
    ordre?: IntFilter<"GroupedBulletPoint"> | number
    sectionId?: StringFilter<"GroupedBulletPoint"> | string
    section?: XOR<SectionScalarRelationFilter, SectionWhereInput>
    contents?: BulletPointContentListRelationFilter
  }

  export type GroupedBulletPointOrderByWithRelationInput = {
    id?: SortOrder
    titre?: SortOrder
    ordre?: SortOrder
    sectionId?: SortOrder
    section?: SectionOrderByWithRelationInput
    contents?: BulletPointContentOrderByRelationAggregateInput
    _relevance?: GroupedBulletPointOrderByRelevanceInput
  }

  export type GroupedBulletPointWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GroupedBulletPointWhereInput | GroupedBulletPointWhereInput[]
    OR?: GroupedBulletPointWhereInput[]
    NOT?: GroupedBulletPointWhereInput | GroupedBulletPointWhereInput[]
    titre?: StringFilter<"GroupedBulletPoint"> | string
    ordre?: IntFilter<"GroupedBulletPoint"> | number
    sectionId?: StringFilter<"GroupedBulletPoint"> | string
    section?: XOR<SectionScalarRelationFilter, SectionWhereInput>
    contents?: BulletPointContentListRelationFilter
  }, "id">

  export type GroupedBulletPointOrderByWithAggregationInput = {
    id?: SortOrder
    titre?: SortOrder
    ordre?: SortOrder
    sectionId?: SortOrder
    _count?: GroupedBulletPointCountOrderByAggregateInput
    _avg?: GroupedBulletPointAvgOrderByAggregateInput
    _max?: GroupedBulletPointMaxOrderByAggregateInput
    _min?: GroupedBulletPointMinOrderByAggregateInput
    _sum?: GroupedBulletPointSumOrderByAggregateInput
  }

  export type GroupedBulletPointScalarWhereWithAggregatesInput = {
    AND?: GroupedBulletPointScalarWhereWithAggregatesInput | GroupedBulletPointScalarWhereWithAggregatesInput[]
    OR?: GroupedBulletPointScalarWhereWithAggregatesInput[]
    NOT?: GroupedBulletPointScalarWhereWithAggregatesInput | GroupedBulletPointScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GroupedBulletPoint"> | string
    titre?: StringWithAggregatesFilter<"GroupedBulletPoint"> | string
    ordre?: IntWithAggregatesFilter<"GroupedBulletPoint"> | number
    sectionId?: StringWithAggregatesFilter<"GroupedBulletPoint"> | string
  }

  export type BulletPointContentWhereInput = {
    AND?: BulletPointContentWhereInput | BulletPointContentWhereInput[]
    OR?: BulletPointContentWhereInput[]
    NOT?: BulletPointContentWhereInput | BulletPointContentWhereInput[]
    id?: StringFilter<"BulletPointContent"> | string
    contenu?: StringNullableFilter<"BulletPointContent"> | string | null
    ordre?: IntFilter<"BulletPointContent"> | number
    groupId?: StringFilter<"BulletPointContent"> | string
    group?: XOR<GroupedBulletPointScalarRelationFilter, GroupedBulletPointWhereInput>
  }

  export type BulletPointContentOrderByWithRelationInput = {
    id?: SortOrder
    contenu?: SortOrderInput | SortOrder
    ordre?: SortOrder
    groupId?: SortOrder
    group?: GroupedBulletPointOrderByWithRelationInput
    _relevance?: BulletPointContentOrderByRelevanceInput
  }

  export type BulletPointContentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BulletPointContentWhereInput | BulletPointContentWhereInput[]
    OR?: BulletPointContentWhereInput[]
    NOT?: BulletPointContentWhereInput | BulletPointContentWhereInput[]
    contenu?: StringNullableFilter<"BulletPointContent"> | string | null
    ordre?: IntFilter<"BulletPointContent"> | number
    groupId?: StringFilter<"BulletPointContent"> | string
    group?: XOR<GroupedBulletPointScalarRelationFilter, GroupedBulletPointWhereInput>
  }, "id">

  export type BulletPointContentOrderByWithAggregationInput = {
    id?: SortOrder
    contenu?: SortOrderInput | SortOrder
    ordre?: SortOrder
    groupId?: SortOrder
    _count?: BulletPointContentCountOrderByAggregateInput
    _avg?: BulletPointContentAvgOrderByAggregateInput
    _max?: BulletPointContentMaxOrderByAggregateInput
    _min?: BulletPointContentMinOrderByAggregateInput
    _sum?: BulletPointContentSumOrderByAggregateInput
  }

  export type BulletPointContentScalarWhereWithAggregatesInput = {
    AND?: BulletPointContentScalarWhereWithAggregatesInput | BulletPointContentScalarWhereWithAggregatesInput[]
    OR?: BulletPointContentScalarWhereWithAggregatesInput[]
    NOT?: BulletPointContentScalarWhereWithAggregatesInput | BulletPointContentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BulletPointContent"> | string
    contenu?: StringNullableWithAggregatesFilter<"BulletPointContent"> | string | null
    ordre?: IntWithAggregatesFilter<"BulletPointContent"> | number
    groupId?: StringWithAggregatesFilter<"BulletPointContent"> | string
  }

  export type ImageWhereInput = {
    AND?: ImageWhereInput | ImageWhereInput[]
    OR?: ImageWhereInput[]
    NOT?: ImageWhereInput | ImageWhereInput[]
    id?: StringFilter<"Image"> | string
    url?: StringFilter<"Image"> | string
    alt?: StringNullableFilter<"Image"> | string | null
    sectionId?: StringFilter<"Image"> | string
    section?: XOR<SectionScalarRelationFilter, SectionWhereInput>
  }

  export type ImageOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    alt?: SortOrderInput | SortOrder
    sectionId?: SortOrder
    section?: SectionOrderByWithRelationInput
    _relevance?: ImageOrderByRelevanceInput
  }

  export type ImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ImageWhereInput | ImageWhereInput[]
    OR?: ImageWhereInput[]
    NOT?: ImageWhereInput | ImageWhereInput[]
    url?: StringFilter<"Image"> | string
    alt?: StringNullableFilter<"Image"> | string | null
    sectionId?: StringFilter<"Image"> | string
    section?: XOR<SectionScalarRelationFilter, SectionWhereInput>
  }, "id">

  export type ImageOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    alt?: SortOrderInput | SortOrder
    sectionId?: SortOrder
    _count?: ImageCountOrderByAggregateInput
    _max?: ImageMaxOrderByAggregateInput
    _min?: ImageMinOrderByAggregateInput
  }

  export type ImageScalarWhereWithAggregatesInput = {
    AND?: ImageScalarWhereWithAggregatesInput | ImageScalarWhereWithAggregatesInput[]
    OR?: ImageScalarWhereWithAggregatesInput[]
    NOT?: ImageScalarWhereWithAggregatesInput | ImageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Image"> | string
    url?: StringWithAggregatesFilter<"Image"> | string
    alt?: StringNullableWithAggregatesFilter<"Image"> | string | null
    sectionId?: StringWithAggregatesFilter<"Image"> | string
  }

  export type ChecklistWhereInput = {
    AND?: ChecklistWhereInput | ChecklistWhereInput[]
    OR?: ChecklistWhereInput[]
    NOT?: ChecklistWhereInput | ChecklistWhereInput[]
    id?: StringFilter<"Checklist"> | string
    titre?: StringFilter<"Checklist"> | string
    userId?: IntFilter<"Checklist"> | number
    voyageId?: StringFilter<"Checklist"> | string
    createdAt?: DateTimeFilter<"Checklist"> | Date | string
    updatedAt?: DateTimeFilter<"Checklist"> | Date | string
    categories?: ChecklistCategoryListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    voyage?: XOR<DestinationScalarRelationFilter, DestinationWhereInput>
  }

  export type ChecklistOrderByWithRelationInput = {
    id?: SortOrder
    titre?: SortOrder
    userId?: SortOrder
    voyageId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categories?: ChecklistCategoryOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
    voyage?: DestinationOrderByWithRelationInput
    _relevance?: ChecklistOrderByRelevanceInput
  }

  export type ChecklistWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChecklistWhereInput | ChecklistWhereInput[]
    OR?: ChecklistWhereInput[]
    NOT?: ChecklistWhereInput | ChecklistWhereInput[]
    titre?: StringFilter<"Checklist"> | string
    userId?: IntFilter<"Checklist"> | number
    voyageId?: StringFilter<"Checklist"> | string
    createdAt?: DateTimeFilter<"Checklist"> | Date | string
    updatedAt?: DateTimeFilter<"Checklist"> | Date | string
    categories?: ChecklistCategoryListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    voyage?: XOR<DestinationScalarRelationFilter, DestinationWhereInput>
  }, "id">

  export type ChecklistOrderByWithAggregationInput = {
    id?: SortOrder
    titre?: SortOrder
    userId?: SortOrder
    voyageId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ChecklistCountOrderByAggregateInput
    _avg?: ChecklistAvgOrderByAggregateInput
    _max?: ChecklistMaxOrderByAggregateInput
    _min?: ChecklistMinOrderByAggregateInput
    _sum?: ChecklistSumOrderByAggregateInput
  }

  export type ChecklistScalarWhereWithAggregatesInput = {
    AND?: ChecklistScalarWhereWithAggregatesInput | ChecklistScalarWhereWithAggregatesInput[]
    OR?: ChecklistScalarWhereWithAggregatesInput[]
    NOT?: ChecklistScalarWhereWithAggregatesInput | ChecklistScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Checklist"> | string
    titre?: StringWithAggregatesFilter<"Checklist"> | string
    userId?: IntWithAggregatesFilter<"Checklist"> | number
    voyageId?: StringWithAggregatesFilter<"Checklist"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Checklist"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Checklist"> | Date | string
  }

  export type ChecklistCategoryWhereInput = {
    AND?: ChecklistCategoryWhereInput | ChecklistCategoryWhereInput[]
    OR?: ChecklistCategoryWhereInput[]
    NOT?: ChecklistCategoryWhereInput | ChecklistCategoryWhereInput[]
    id?: StringFilter<"ChecklistCategory"> | string
    titre?: StringFilter<"ChecklistCategory"> | string
    icone?: StringNullableFilter<"ChecklistCategory"> | string | null
    checklistId?: StringFilter<"ChecklistCategory"> | string
    items?: ChecklistItemListRelationFilter
    checklist?: XOR<ChecklistScalarRelationFilter, ChecklistWhereInput>
  }

  export type ChecklistCategoryOrderByWithRelationInput = {
    id?: SortOrder
    titre?: SortOrder
    icone?: SortOrderInput | SortOrder
    checklistId?: SortOrder
    items?: ChecklistItemOrderByRelationAggregateInput
    checklist?: ChecklistOrderByWithRelationInput
    _relevance?: ChecklistCategoryOrderByRelevanceInput
  }

  export type ChecklistCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChecklistCategoryWhereInput | ChecklistCategoryWhereInput[]
    OR?: ChecklistCategoryWhereInput[]
    NOT?: ChecklistCategoryWhereInput | ChecklistCategoryWhereInput[]
    titre?: StringFilter<"ChecklistCategory"> | string
    icone?: StringNullableFilter<"ChecklistCategory"> | string | null
    checklistId?: StringFilter<"ChecklistCategory"> | string
    items?: ChecklistItemListRelationFilter
    checklist?: XOR<ChecklistScalarRelationFilter, ChecklistWhereInput>
  }, "id">

  export type ChecklistCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    titre?: SortOrder
    icone?: SortOrderInput | SortOrder
    checklistId?: SortOrder
    _count?: ChecklistCategoryCountOrderByAggregateInput
    _max?: ChecklistCategoryMaxOrderByAggregateInput
    _min?: ChecklistCategoryMinOrderByAggregateInput
  }

  export type ChecklistCategoryScalarWhereWithAggregatesInput = {
    AND?: ChecklistCategoryScalarWhereWithAggregatesInput | ChecklistCategoryScalarWhereWithAggregatesInput[]
    OR?: ChecklistCategoryScalarWhereWithAggregatesInput[]
    NOT?: ChecklistCategoryScalarWhereWithAggregatesInput | ChecklistCategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ChecklistCategory"> | string
    titre?: StringWithAggregatesFilter<"ChecklistCategory"> | string
    icone?: StringNullableWithAggregatesFilter<"ChecklistCategory"> | string | null
    checklistId?: StringWithAggregatesFilter<"ChecklistCategory"> | string
  }

  export type ChecklistItemWhereInput = {
    AND?: ChecklistItemWhereInput | ChecklistItemWhereInput[]
    OR?: ChecklistItemWhereInput[]
    NOT?: ChecklistItemWhereInput | ChecklistItemWhereInput[]
    id?: StringFilter<"ChecklistItem"> | string
    titre?: StringFilter<"ChecklistItem"> | string
    description?: StringNullableFilter<"ChecklistItem"> | string | null
    isChecked?: BoolFilter<"ChecklistItem"> | boolean
    reminderDate?: DateTimeNullableFilter<"ChecklistItem"> | Date | string | null
    categoryId?: StringFilter<"ChecklistItem"> | string
    category?: XOR<ChecklistCategoryScalarRelationFilter, ChecklistCategoryWhereInput>
  }

  export type ChecklistItemOrderByWithRelationInput = {
    id?: SortOrder
    titre?: SortOrder
    description?: SortOrderInput | SortOrder
    isChecked?: SortOrder
    reminderDate?: SortOrderInput | SortOrder
    categoryId?: SortOrder
    category?: ChecklistCategoryOrderByWithRelationInput
    _relevance?: ChecklistItemOrderByRelevanceInput
  }

  export type ChecklistItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChecklistItemWhereInput | ChecklistItemWhereInput[]
    OR?: ChecklistItemWhereInput[]
    NOT?: ChecklistItemWhereInput | ChecklistItemWhereInput[]
    titre?: StringFilter<"ChecklistItem"> | string
    description?: StringNullableFilter<"ChecklistItem"> | string | null
    isChecked?: BoolFilter<"ChecklistItem"> | boolean
    reminderDate?: DateTimeNullableFilter<"ChecklistItem"> | Date | string | null
    categoryId?: StringFilter<"ChecklistItem"> | string
    category?: XOR<ChecklistCategoryScalarRelationFilter, ChecklistCategoryWhereInput>
  }, "id">

  export type ChecklistItemOrderByWithAggregationInput = {
    id?: SortOrder
    titre?: SortOrder
    description?: SortOrderInput | SortOrder
    isChecked?: SortOrder
    reminderDate?: SortOrderInput | SortOrder
    categoryId?: SortOrder
    _count?: ChecklistItemCountOrderByAggregateInput
    _max?: ChecklistItemMaxOrderByAggregateInput
    _min?: ChecklistItemMinOrderByAggregateInput
  }

  export type ChecklistItemScalarWhereWithAggregatesInput = {
    AND?: ChecklistItemScalarWhereWithAggregatesInput | ChecklistItemScalarWhereWithAggregatesInput[]
    OR?: ChecklistItemScalarWhereWithAggregatesInput[]
    NOT?: ChecklistItemScalarWhereWithAggregatesInput | ChecklistItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ChecklistItem"> | string
    titre?: StringWithAggregatesFilter<"ChecklistItem"> | string
    description?: StringNullableWithAggregatesFilter<"ChecklistItem"> | string | null
    isChecked?: BoolWithAggregatesFilter<"ChecklistItem"> | boolean
    reminderDate?: DateTimeNullableWithAggregatesFilter<"ChecklistItem"> | Date | string | null
    categoryId?: StringWithAggregatesFilter<"ChecklistItem"> | string
  }

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    id?: StringFilter<"Review"> | string
    userId?: IntFilter<"Review"> | number
    destinationId?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    content?: StringFilter<"Review"> | string
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    destination?: XOR<DestinationScalarRelationFilter, DestinationWhereInput>
    likes?: ReviewLikeListRelationFilter
  }

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    destinationId?: SortOrder
    rating?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    destination?: DestinationOrderByWithRelationInput
    likes?: ReviewLikeOrderByRelationAggregateInput
    _relevance?: ReviewOrderByRelevanceInput
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    userId?: IntFilter<"Review"> | number
    destinationId?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    content?: StringFilter<"Review"> | string
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    destination?: XOR<DestinationScalarRelationFilter, DestinationWhereInput>
    likes?: ReviewLikeListRelationFilter
  }, "id">

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    destinationId?: SortOrder
    rating?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _avg?: ReviewAvgOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
    _sum?: ReviewSumOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    OR?: ReviewScalarWhereWithAggregatesInput[]
    NOT?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Review"> | string
    userId?: IntWithAggregatesFilter<"Review"> | number
    destinationId?: StringWithAggregatesFilter<"Review"> | string
    rating?: IntWithAggregatesFilter<"Review"> | number
    content?: StringWithAggregatesFilter<"Review"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
  }

  export type ReviewLikeWhereInput = {
    AND?: ReviewLikeWhereInput | ReviewLikeWhereInput[]
    OR?: ReviewLikeWhereInput[]
    NOT?: ReviewLikeWhereInput | ReviewLikeWhereInput[]
    id?: StringFilter<"ReviewLike"> | string
    userId?: IntFilter<"ReviewLike"> | number
    reviewId?: StringFilter<"ReviewLike"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    review?: XOR<ReviewScalarRelationFilter, ReviewWhereInput>
  }

  export type ReviewLikeOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    reviewId?: SortOrder
    user?: UserOrderByWithRelationInput
    review?: ReviewOrderByWithRelationInput
    _relevance?: ReviewLikeOrderByRelevanceInput
  }

  export type ReviewLikeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_reviewId?: ReviewLikeUserIdReviewIdCompoundUniqueInput
    AND?: ReviewLikeWhereInput | ReviewLikeWhereInput[]
    OR?: ReviewLikeWhereInput[]
    NOT?: ReviewLikeWhereInput | ReviewLikeWhereInput[]
    userId?: IntFilter<"ReviewLike"> | number
    reviewId?: StringFilter<"ReviewLike"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    review?: XOR<ReviewScalarRelationFilter, ReviewWhereInput>
  }, "id" | "userId_reviewId">

  export type ReviewLikeOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    reviewId?: SortOrder
    _count?: ReviewLikeCountOrderByAggregateInput
    _avg?: ReviewLikeAvgOrderByAggregateInput
    _max?: ReviewLikeMaxOrderByAggregateInput
    _min?: ReviewLikeMinOrderByAggregateInput
    _sum?: ReviewLikeSumOrderByAggregateInput
  }

  export type ReviewLikeScalarWhereWithAggregatesInput = {
    AND?: ReviewLikeScalarWhereWithAggregatesInput | ReviewLikeScalarWhereWithAggregatesInput[]
    OR?: ReviewLikeScalarWhereWithAggregatesInput[]
    NOT?: ReviewLikeScalarWhereWithAggregatesInput | ReviewLikeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ReviewLike"> | string
    userId?: IntWithAggregatesFilter<"ReviewLike"> | number
    reviewId?: StringWithAggregatesFilter<"ReviewLike"> | string
  }

  export type UserVoyageWhereInput = {
    AND?: UserVoyageWhereInput | UserVoyageWhereInput[]
    OR?: UserVoyageWhereInput[]
    NOT?: UserVoyageWhereInput | UserVoyageWhereInput[]
    id?: IntFilter<"UserVoyage"> | number
    userId?: IntFilter<"UserVoyage"> | number
    destinationId?: StringFilter<"UserVoyage"> | string
    createdAt?: DateTimeFilter<"UserVoyage"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    destination?: XOR<DestinationScalarRelationFilter, DestinationWhereInput>
  }

  export type UserVoyageOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    destinationId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    destination?: DestinationOrderByWithRelationInput
    _relevance?: UserVoyageOrderByRelevanceInput
  }

  export type UserVoyageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_destinationId?: UserVoyageUserIdDestinationIdCompoundUniqueInput
    AND?: UserVoyageWhereInput | UserVoyageWhereInput[]
    OR?: UserVoyageWhereInput[]
    NOT?: UserVoyageWhereInput | UserVoyageWhereInput[]
    userId?: IntFilter<"UserVoyage"> | number
    destinationId?: StringFilter<"UserVoyage"> | string
    createdAt?: DateTimeFilter<"UserVoyage"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    destination?: XOR<DestinationScalarRelationFilter, DestinationWhereInput>
  }, "id" | "userId_destinationId">

  export type UserVoyageOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    destinationId?: SortOrder
    createdAt?: SortOrder
    _count?: UserVoyageCountOrderByAggregateInput
    _avg?: UserVoyageAvgOrderByAggregateInput
    _max?: UserVoyageMaxOrderByAggregateInput
    _min?: UserVoyageMinOrderByAggregateInput
    _sum?: UserVoyageSumOrderByAggregateInput
  }

  export type UserVoyageScalarWhereWithAggregatesInput = {
    AND?: UserVoyageScalarWhereWithAggregatesInput | UserVoyageScalarWhereWithAggregatesInput[]
    OR?: UserVoyageScalarWhereWithAggregatesInput[]
    NOT?: UserVoyageScalarWhereWithAggregatesInput | UserVoyageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserVoyage"> | number
    userId?: IntWithAggregatesFilter<"UserVoyage"> | number
    destinationId?: StringWithAggregatesFilter<"UserVoyage"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UserVoyage"> | Date | string
  }

  export type UserCreateInput = {
    nom: string
    prenom: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    bio?: string | null
    instagram?: string | null
    facebook?: string | null
    youtube?: string | null
    isPublic?: boolean
    adventurerType?: string | null
    avatar?: string | null
    coverImage?: string | null
    voyages?: DestinationCreateNestedManyWithoutUtilisateurInput
    checklists?: ChecklistCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    reviewLikes?: ReviewLikeCreateNestedManyWithoutUserInput
    userVoyages?: UserVoyageCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    nom: string
    prenom: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    bio?: string | null
    instagram?: string | null
    facebook?: string | null
    youtube?: string | null
    isPublic?: boolean
    adventurerType?: string | null
    avatar?: string | null
    coverImage?: string | null
    voyages?: DestinationUncheckedCreateNestedManyWithoutUtilisateurInput
    checklists?: ChecklistUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    reviewLikes?: ReviewLikeUncheckedCreateNestedManyWithoutUserInput
    userVoyages?: UserVoyageUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    youtube?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    adventurerType?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    voyages?: DestinationUpdateManyWithoutUtilisateurNestedInput
    checklists?: ChecklistUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    reviewLikes?: ReviewLikeUpdateManyWithoutUserNestedInput
    userVoyages?: UserVoyageUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    youtube?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    adventurerType?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    voyages?: DestinationUncheckedUpdateManyWithoutUtilisateurNestedInput
    checklists?: ChecklistUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    reviewLikes?: ReviewLikeUncheckedUpdateManyWithoutUserNestedInput
    userVoyages?: UserVoyageUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    nom: string
    prenom: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    bio?: string | null
    instagram?: string | null
    facebook?: string | null
    youtube?: string | null
    isPublic?: boolean
    adventurerType?: string | null
    avatar?: string | null
    coverImage?: string | null
  }

  export type UserUpdateManyMutationInput = {
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    youtube?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    adventurerType?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    youtube?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    adventurerType?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DestinationCreateInput = {
    id?: string
    titre: string
    pays: string
    continent?: string | null
    description?: string | null
    imagePrincipale?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sections?: SectionCreateNestedManyWithoutDestinationInput
    utilisateur?: UserCreateNestedOneWithoutVoyagesInput
    checklists?: ChecklistCreateNestedManyWithoutVoyageInput
    reviews?: ReviewCreateNestedManyWithoutDestinationInput
    userVoyages?: UserVoyageCreateNestedManyWithoutDestinationInput
  }

  export type DestinationUncheckedCreateInput = {
    id?: string
    titre: string
    pays: string
    continent?: string | null
    description?: string | null
    imagePrincipale?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    utilisateurId?: number | null
    sections?: SectionUncheckedCreateNestedManyWithoutDestinationInput
    checklists?: ChecklistUncheckedCreateNestedManyWithoutVoyageInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutDestinationInput
    userVoyages?: UserVoyageUncheckedCreateNestedManyWithoutDestinationInput
  }

  export type DestinationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    pays?: StringFieldUpdateOperationsInput | string
    continent?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imagePrincipale?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sections?: SectionUpdateManyWithoutDestinationNestedInput
    utilisateur?: UserUpdateOneWithoutVoyagesNestedInput
    checklists?: ChecklistUpdateManyWithoutVoyageNestedInput
    reviews?: ReviewUpdateManyWithoutDestinationNestedInput
    userVoyages?: UserVoyageUpdateManyWithoutDestinationNestedInput
  }

  export type DestinationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    pays?: StringFieldUpdateOperationsInput | string
    continent?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imagePrincipale?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    utilisateurId?: NullableIntFieldUpdateOperationsInput | number | null
    sections?: SectionUncheckedUpdateManyWithoutDestinationNestedInput
    checklists?: ChecklistUncheckedUpdateManyWithoutVoyageNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutDestinationNestedInput
    userVoyages?: UserVoyageUncheckedUpdateManyWithoutDestinationNestedInput
  }

  export type DestinationCreateManyInput = {
    id?: string
    titre: string
    pays: string
    continent?: string | null
    description?: string | null
    imagePrincipale?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    utilisateurId?: number | null
  }

  export type DestinationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    pays?: StringFieldUpdateOperationsInput | string
    continent?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imagePrincipale?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DestinationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    pays?: StringFieldUpdateOperationsInput | string
    continent?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imagePrincipale?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    utilisateurId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SectionCreateInput = {
    id?: string
    titre: string
    contenu?: string | null
    ordre: number
    type: $Enums.SectionType
    updatedAt?: Date | string
    bulletPoints?: BulletPointCreateNestedManyWithoutSectionInput
    groupedPoints?: GroupedBulletPointCreateNestedManyWithoutSectionInput
    images?: ImageCreateNestedManyWithoutSectionInput
    destination: DestinationCreateNestedOneWithoutSectionsInput
  }

  export type SectionUncheckedCreateInput = {
    id?: string
    titre: string
    contenu?: string | null
    ordre: number
    type: $Enums.SectionType
    destinationId: string
    updatedAt?: Date | string
    bulletPoints?: BulletPointUncheckedCreateNestedManyWithoutSectionInput
    groupedPoints?: GroupedBulletPointUncheckedCreateNestedManyWithoutSectionInput
    images?: ImageUncheckedCreateNestedManyWithoutSectionInput
  }

  export type SectionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    contenu?: NullableStringFieldUpdateOperationsInput | string | null
    ordre?: IntFieldUpdateOperationsInput | number
    type?: EnumSectionTypeFieldUpdateOperationsInput | $Enums.SectionType
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bulletPoints?: BulletPointUpdateManyWithoutSectionNestedInput
    groupedPoints?: GroupedBulletPointUpdateManyWithoutSectionNestedInput
    images?: ImageUpdateManyWithoutSectionNestedInput
    destination?: DestinationUpdateOneRequiredWithoutSectionsNestedInput
  }

  export type SectionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    contenu?: NullableStringFieldUpdateOperationsInput | string | null
    ordre?: IntFieldUpdateOperationsInput | number
    type?: EnumSectionTypeFieldUpdateOperationsInput | $Enums.SectionType
    destinationId?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bulletPoints?: BulletPointUncheckedUpdateManyWithoutSectionNestedInput
    groupedPoints?: GroupedBulletPointUncheckedUpdateManyWithoutSectionNestedInput
    images?: ImageUncheckedUpdateManyWithoutSectionNestedInput
  }

  export type SectionCreateManyInput = {
    id?: string
    titre: string
    contenu?: string | null
    ordre: number
    type: $Enums.SectionType
    destinationId: string
    updatedAt?: Date | string
  }

  export type SectionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    contenu?: NullableStringFieldUpdateOperationsInput | string | null
    ordre?: IntFieldUpdateOperationsInput | number
    type?: EnumSectionTypeFieldUpdateOperationsInput | $Enums.SectionType
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SectionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    contenu?: NullableStringFieldUpdateOperationsInput | string | null
    ordre?: IntFieldUpdateOperationsInput | number
    type?: EnumSectionTypeFieldUpdateOperationsInput | $Enums.SectionType
    destinationId?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BulletPointCreateInput = {
    id?: string
    contenu?: string | null
    ordre: number
    section: SectionCreateNestedOneWithoutBulletPointsInput
  }

  export type BulletPointUncheckedCreateInput = {
    id?: string
    contenu?: string | null
    ordre: number
    sectionId: string
  }

  export type BulletPointUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    contenu?: NullableStringFieldUpdateOperationsInput | string | null
    ordre?: IntFieldUpdateOperationsInput | number
    section?: SectionUpdateOneRequiredWithoutBulletPointsNestedInput
  }

  export type BulletPointUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    contenu?: NullableStringFieldUpdateOperationsInput | string | null
    ordre?: IntFieldUpdateOperationsInput | number
    sectionId?: StringFieldUpdateOperationsInput | string
  }

  export type BulletPointCreateManyInput = {
    id?: string
    contenu?: string | null
    ordre: number
    sectionId: string
  }

  export type BulletPointUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    contenu?: NullableStringFieldUpdateOperationsInput | string | null
    ordre?: IntFieldUpdateOperationsInput | number
  }

  export type BulletPointUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    contenu?: NullableStringFieldUpdateOperationsInput | string | null
    ordre?: IntFieldUpdateOperationsInput | number
    sectionId?: StringFieldUpdateOperationsInput | string
  }

  export type GroupedBulletPointCreateInput = {
    id?: string
    titre: string
    ordre: number
    section: SectionCreateNestedOneWithoutGroupedPointsInput
    contents?: BulletPointContentCreateNestedManyWithoutGroupInput
  }

  export type GroupedBulletPointUncheckedCreateInput = {
    id?: string
    titre: string
    ordre: number
    sectionId: string
    contents?: BulletPointContentUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupedBulletPointUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    ordre?: IntFieldUpdateOperationsInput | number
    section?: SectionUpdateOneRequiredWithoutGroupedPointsNestedInput
    contents?: BulletPointContentUpdateManyWithoutGroupNestedInput
  }

  export type GroupedBulletPointUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    ordre?: IntFieldUpdateOperationsInput | number
    sectionId?: StringFieldUpdateOperationsInput | string
    contents?: BulletPointContentUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type GroupedBulletPointCreateManyInput = {
    id?: string
    titre: string
    ordre: number
    sectionId: string
  }

  export type GroupedBulletPointUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    ordre?: IntFieldUpdateOperationsInput | number
  }

  export type GroupedBulletPointUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    ordre?: IntFieldUpdateOperationsInput | number
    sectionId?: StringFieldUpdateOperationsInput | string
  }

  export type BulletPointContentCreateInput = {
    id?: string
    contenu?: string | null
    ordre: number
    group: GroupedBulletPointCreateNestedOneWithoutContentsInput
  }

  export type BulletPointContentUncheckedCreateInput = {
    id?: string
    contenu?: string | null
    ordre: number
    groupId: string
  }

  export type BulletPointContentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    contenu?: NullableStringFieldUpdateOperationsInput | string | null
    ordre?: IntFieldUpdateOperationsInput | number
    group?: GroupedBulletPointUpdateOneRequiredWithoutContentsNestedInput
  }

  export type BulletPointContentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    contenu?: NullableStringFieldUpdateOperationsInput | string | null
    ordre?: IntFieldUpdateOperationsInput | number
    groupId?: StringFieldUpdateOperationsInput | string
  }

  export type BulletPointContentCreateManyInput = {
    id?: string
    contenu?: string | null
    ordre: number
    groupId: string
  }

  export type BulletPointContentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    contenu?: NullableStringFieldUpdateOperationsInput | string | null
    ordre?: IntFieldUpdateOperationsInput | number
  }

  export type BulletPointContentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    contenu?: NullableStringFieldUpdateOperationsInput | string | null
    ordre?: IntFieldUpdateOperationsInput | number
    groupId?: StringFieldUpdateOperationsInput | string
  }

  export type ImageCreateInput = {
    id?: string
    url: string
    alt?: string | null
    section: SectionCreateNestedOneWithoutImagesInput
  }

  export type ImageUncheckedCreateInput = {
    id?: string
    url: string
    alt?: string | null
    sectionId: string
  }

  export type ImageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    alt?: NullableStringFieldUpdateOperationsInput | string | null
    section?: SectionUpdateOneRequiredWithoutImagesNestedInput
  }

  export type ImageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    alt?: NullableStringFieldUpdateOperationsInput | string | null
    sectionId?: StringFieldUpdateOperationsInput | string
  }

  export type ImageCreateManyInput = {
    id?: string
    url: string
    alt?: string | null
    sectionId: string
  }

  export type ImageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    alt?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ImageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    alt?: NullableStringFieldUpdateOperationsInput | string | null
    sectionId?: StringFieldUpdateOperationsInput | string
  }

  export type ChecklistCreateInput = {
    id?: string
    titre: string
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: ChecklistCategoryCreateNestedManyWithoutChecklistInput
    user: UserCreateNestedOneWithoutChecklistsInput
    voyage: DestinationCreateNestedOneWithoutChecklistsInput
  }

  export type ChecklistUncheckedCreateInput = {
    id?: string
    titre: string
    userId: number
    voyageId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: ChecklistCategoryUncheckedCreateNestedManyWithoutChecklistInput
  }

  export type ChecklistUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: ChecklistCategoryUpdateManyWithoutChecklistNestedInput
    user?: UserUpdateOneRequiredWithoutChecklistsNestedInput
    voyage?: DestinationUpdateOneRequiredWithoutChecklistsNestedInput
  }

  export type ChecklistUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    voyageId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: ChecklistCategoryUncheckedUpdateManyWithoutChecklistNestedInput
  }

  export type ChecklistCreateManyInput = {
    id?: string
    titre: string
    userId: number
    voyageId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChecklistUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChecklistUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    voyageId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChecklistCategoryCreateInput = {
    id?: string
    titre: string
    icone?: string | null
    items?: ChecklistItemCreateNestedManyWithoutCategoryInput
    checklist: ChecklistCreateNestedOneWithoutCategoriesInput
  }

  export type ChecklistCategoryUncheckedCreateInput = {
    id?: string
    titre: string
    icone?: string | null
    checklistId: string
    items?: ChecklistItemUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type ChecklistCategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    icone?: NullableStringFieldUpdateOperationsInput | string | null
    items?: ChecklistItemUpdateManyWithoutCategoryNestedInput
    checklist?: ChecklistUpdateOneRequiredWithoutCategoriesNestedInput
  }

  export type ChecklistCategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    icone?: NullableStringFieldUpdateOperationsInput | string | null
    checklistId?: StringFieldUpdateOperationsInput | string
    items?: ChecklistItemUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type ChecklistCategoryCreateManyInput = {
    id?: string
    titre: string
    icone?: string | null
    checklistId: string
  }

  export type ChecklistCategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    icone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ChecklistCategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    icone?: NullableStringFieldUpdateOperationsInput | string | null
    checklistId?: StringFieldUpdateOperationsInput | string
  }

  export type ChecklistItemCreateInput = {
    id?: string
    titre: string
    description?: string | null
    isChecked?: boolean
    reminderDate?: Date | string | null
    category: ChecklistCategoryCreateNestedOneWithoutItemsInput
  }

  export type ChecklistItemUncheckedCreateInput = {
    id?: string
    titre: string
    description?: string | null
    isChecked?: boolean
    reminderDate?: Date | string | null
    categoryId: string
  }

  export type ChecklistItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isChecked?: BoolFieldUpdateOperationsInput | boolean
    reminderDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: ChecklistCategoryUpdateOneRequiredWithoutItemsNestedInput
  }

  export type ChecklistItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isChecked?: BoolFieldUpdateOperationsInput | boolean
    reminderDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    categoryId?: StringFieldUpdateOperationsInput | string
  }

  export type ChecklistItemCreateManyInput = {
    id?: string
    titre: string
    description?: string | null
    isChecked?: boolean
    reminderDate?: Date | string | null
    categoryId: string
  }

  export type ChecklistItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isChecked?: BoolFieldUpdateOperationsInput | boolean
    reminderDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ChecklistItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isChecked?: BoolFieldUpdateOperationsInput | boolean
    reminderDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    categoryId?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewCreateInput = {
    id?: string
    rating: number
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutReviewsInput
    destination: DestinationCreateNestedOneWithoutReviewsInput
    likes?: ReviewLikeCreateNestedManyWithoutReviewInput
  }

  export type ReviewUncheckedCreateInput = {
    id?: string
    userId: number
    destinationId: string
    rating: number
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    likes?: ReviewLikeUncheckedCreateNestedManyWithoutReviewInput
  }

  export type ReviewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
    destination?: DestinationUpdateOneRequiredWithoutReviewsNestedInput
    likes?: ReviewLikeUpdateManyWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    destinationId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: ReviewLikeUncheckedUpdateManyWithoutReviewNestedInput
  }

  export type ReviewCreateManyInput = {
    id?: string
    userId: number
    destinationId: string
    rating: number
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    destinationId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewLikeCreateInput = {
    id?: string
    user: UserCreateNestedOneWithoutReviewLikesInput
    review: ReviewCreateNestedOneWithoutLikesInput
  }

  export type ReviewLikeUncheckedCreateInput = {
    id?: string
    userId: number
    reviewId: string
  }

  export type ReviewLikeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutReviewLikesNestedInput
    review?: ReviewUpdateOneRequiredWithoutLikesNestedInput
  }

  export type ReviewLikeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    reviewId?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewLikeCreateManyInput = {
    id?: string
    userId: number
    reviewId: string
  }

  export type ReviewLikeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewLikeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    reviewId?: StringFieldUpdateOperationsInput | string
  }

  export type UserVoyageCreateInput = {
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutUserVoyagesInput
    destination: DestinationCreateNestedOneWithoutUserVoyagesInput
  }

  export type UserVoyageUncheckedCreateInput = {
    id?: number
    userId: number
    destinationId: string
    createdAt?: Date | string
  }

  export type UserVoyageUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserVoyagesNestedInput
    destination?: DestinationUpdateOneRequiredWithoutUserVoyagesNestedInput
  }

  export type UserVoyageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    destinationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserVoyageCreateManyInput = {
    id?: number
    userId: number
    destinationId: string
    createdAt?: Date | string
  }

  export type UserVoyageUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserVoyageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    destinationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DestinationListRelationFilter = {
    every?: DestinationWhereInput
    some?: DestinationWhereInput
    none?: DestinationWhereInput
  }

  export type ChecklistListRelationFilter = {
    every?: ChecklistWhereInput
    some?: ChecklistWhereInput
    none?: ChecklistWhereInput
  }

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput
    some?: ReviewWhereInput
    none?: ReviewWhereInput
  }

  export type ReviewLikeListRelationFilter = {
    every?: ReviewLikeWhereInput
    some?: ReviewLikeWhereInput
    none?: ReviewLikeWhereInput
  }

  export type UserVoyageListRelationFilter = {
    every?: UserVoyageWhereInput
    some?: UserVoyageWhereInput
    none?: UserVoyageWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DestinationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChecklistOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewLikeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserVoyageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    bio?: SortOrder
    instagram?: SortOrder
    facebook?: SortOrder
    youtube?: SortOrder
    isPublic?: SortOrder
    adventurerType?: SortOrder
    avatar?: SortOrder
    coverImage?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    bio?: SortOrder
    instagram?: SortOrder
    facebook?: SortOrder
    youtube?: SortOrder
    isPublic?: SortOrder
    adventurerType?: SortOrder
    avatar?: SortOrder
    coverImage?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    bio?: SortOrder
    instagram?: SortOrder
    facebook?: SortOrder
    youtube?: SortOrder
    isPublic?: SortOrder
    adventurerType?: SortOrder
    avatar?: SortOrder
    coverImage?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type SectionListRelationFilter = {
    every?: SectionWhereInput
    some?: SectionWhereInput
    none?: SectionWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type SectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DestinationOrderByRelevanceInput = {
    fields: DestinationOrderByRelevanceFieldEnum | DestinationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DestinationCountOrderByAggregateInput = {
    id?: SortOrder
    titre?: SortOrder
    pays?: SortOrder
    continent?: SortOrder
    description?: SortOrder
    imagePrincipale?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    utilisateurId?: SortOrder
  }

  export type DestinationAvgOrderByAggregateInput = {
    utilisateurId?: SortOrder
  }

  export type DestinationMaxOrderByAggregateInput = {
    id?: SortOrder
    titre?: SortOrder
    pays?: SortOrder
    continent?: SortOrder
    description?: SortOrder
    imagePrincipale?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    utilisateurId?: SortOrder
  }

  export type DestinationMinOrderByAggregateInput = {
    id?: SortOrder
    titre?: SortOrder
    pays?: SortOrder
    continent?: SortOrder
    description?: SortOrder
    imagePrincipale?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    utilisateurId?: SortOrder
  }

  export type DestinationSumOrderByAggregateInput = {
    utilisateurId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumSectionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SectionType | EnumSectionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SectionType[]
    notIn?: $Enums.SectionType[]
    not?: NestedEnumSectionTypeFilter<$PrismaModel> | $Enums.SectionType
  }

  export type BulletPointListRelationFilter = {
    every?: BulletPointWhereInput
    some?: BulletPointWhereInput
    none?: BulletPointWhereInput
  }

  export type GroupedBulletPointListRelationFilter = {
    every?: GroupedBulletPointWhereInput
    some?: GroupedBulletPointWhereInput
    none?: GroupedBulletPointWhereInput
  }

  export type ImageListRelationFilter = {
    every?: ImageWhereInput
    some?: ImageWhereInput
    none?: ImageWhereInput
  }

  export type DestinationScalarRelationFilter = {
    is?: DestinationWhereInput
    isNot?: DestinationWhereInput
  }

  export type BulletPointOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GroupedBulletPointOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SectionOrderByRelevanceInput = {
    fields: SectionOrderByRelevanceFieldEnum | SectionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SectionCountOrderByAggregateInput = {
    id?: SortOrder
    titre?: SortOrder
    contenu?: SortOrder
    ordre?: SortOrder
    type?: SortOrder
    destinationId?: SortOrder
    updatedAt?: SortOrder
  }

  export type SectionAvgOrderByAggregateInput = {
    ordre?: SortOrder
  }

  export type SectionMaxOrderByAggregateInput = {
    id?: SortOrder
    titre?: SortOrder
    contenu?: SortOrder
    ordre?: SortOrder
    type?: SortOrder
    destinationId?: SortOrder
    updatedAt?: SortOrder
  }

  export type SectionMinOrderByAggregateInput = {
    id?: SortOrder
    titre?: SortOrder
    contenu?: SortOrder
    ordre?: SortOrder
    type?: SortOrder
    destinationId?: SortOrder
    updatedAt?: SortOrder
  }

  export type SectionSumOrderByAggregateInput = {
    ordre?: SortOrder
  }

  export type EnumSectionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SectionType | EnumSectionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SectionType[]
    notIn?: $Enums.SectionType[]
    not?: NestedEnumSectionTypeWithAggregatesFilter<$PrismaModel> | $Enums.SectionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSectionTypeFilter<$PrismaModel>
    _max?: NestedEnumSectionTypeFilter<$PrismaModel>
  }

  export type SectionScalarRelationFilter = {
    is?: SectionWhereInput
    isNot?: SectionWhereInput
  }

  export type BulletPointOrderByRelevanceInput = {
    fields: BulletPointOrderByRelevanceFieldEnum | BulletPointOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BulletPointCountOrderByAggregateInput = {
    id?: SortOrder
    contenu?: SortOrder
    ordre?: SortOrder
    sectionId?: SortOrder
  }

  export type BulletPointAvgOrderByAggregateInput = {
    ordre?: SortOrder
  }

  export type BulletPointMaxOrderByAggregateInput = {
    id?: SortOrder
    contenu?: SortOrder
    ordre?: SortOrder
    sectionId?: SortOrder
  }

  export type BulletPointMinOrderByAggregateInput = {
    id?: SortOrder
    contenu?: SortOrder
    ordre?: SortOrder
    sectionId?: SortOrder
  }

  export type BulletPointSumOrderByAggregateInput = {
    ordre?: SortOrder
  }

  export type BulletPointContentListRelationFilter = {
    every?: BulletPointContentWhereInput
    some?: BulletPointContentWhereInput
    none?: BulletPointContentWhereInput
  }

  export type BulletPointContentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GroupedBulletPointOrderByRelevanceInput = {
    fields: GroupedBulletPointOrderByRelevanceFieldEnum | GroupedBulletPointOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type GroupedBulletPointCountOrderByAggregateInput = {
    id?: SortOrder
    titre?: SortOrder
    ordre?: SortOrder
    sectionId?: SortOrder
  }

  export type GroupedBulletPointAvgOrderByAggregateInput = {
    ordre?: SortOrder
  }

  export type GroupedBulletPointMaxOrderByAggregateInput = {
    id?: SortOrder
    titre?: SortOrder
    ordre?: SortOrder
    sectionId?: SortOrder
  }

  export type GroupedBulletPointMinOrderByAggregateInput = {
    id?: SortOrder
    titre?: SortOrder
    ordre?: SortOrder
    sectionId?: SortOrder
  }

  export type GroupedBulletPointSumOrderByAggregateInput = {
    ordre?: SortOrder
  }

  export type GroupedBulletPointScalarRelationFilter = {
    is?: GroupedBulletPointWhereInput
    isNot?: GroupedBulletPointWhereInput
  }

  export type BulletPointContentOrderByRelevanceInput = {
    fields: BulletPointContentOrderByRelevanceFieldEnum | BulletPointContentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BulletPointContentCountOrderByAggregateInput = {
    id?: SortOrder
    contenu?: SortOrder
    ordre?: SortOrder
    groupId?: SortOrder
  }

  export type BulletPointContentAvgOrderByAggregateInput = {
    ordre?: SortOrder
  }

  export type BulletPointContentMaxOrderByAggregateInput = {
    id?: SortOrder
    contenu?: SortOrder
    ordre?: SortOrder
    groupId?: SortOrder
  }

  export type BulletPointContentMinOrderByAggregateInput = {
    id?: SortOrder
    contenu?: SortOrder
    ordre?: SortOrder
    groupId?: SortOrder
  }

  export type BulletPointContentSumOrderByAggregateInput = {
    ordre?: SortOrder
  }

  export type ImageOrderByRelevanceInput = {
    fields: ImageOrderByRelevanceFieldEnum | ImageOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ImageCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    alt?: SortOrder
    sectionId?: SortOrder
  }

  export type ImageMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    alt?: SortOrder
    sectionId?: SortOrder
  }

  export type ImageMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    alt?: SortOrder
    sectionId?: SortOrder
  }

  export type ChecklistCategoryListRelationFilter = {
    every?: ChecklistCategoryWhereInput
    some?: ChecklistCategoryWhereInput
    none?: ChecklistCategoryWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ChecklistCategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChecklistOrderByRelevanceInput = {
    fields: ChecklistOrderByRelevanceFieldEnum | ChecklistOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ChecklistCountOrderByAggregateInput = {
    id?: SortOrder
    titre?: SortOrder
    userId?: SortOrder
    voyageId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChecklistAvgOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type ChecklistMaxOrderByAggregateInput = {
    id?: SortOrder
    titre?: SortOrder
    userId?: SortOrder
    voyageId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChecklistMinOrderByAggregateInput = {
    id?: SortOrder
    titre?: SortOrder
    userId?: SortOrder
    voyageId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChecklistSumOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type ChecklistItemListRelationFilter = {
    every?: ChecklistItemWhereInput
    some?: ChecklistItemWhereInput
    none?: ChecklistItemWhereInput
  }

  export type ChecklistScalarRelationFilter = {
    is?: ChecklistWhereInput
    isNot?: ChecklistWhereInput
  }

  export type ChecklistItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChecklistCategoryOrderByRelevanceInput = {
    fields: ChecklistCategoryOrderByRelevanceFieldEnum | ChecklistCategoryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ChecklistCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    titre?: SortOrder
    icone?: SortOrder
    checklistId?: SortOrder
  }

  export type ChecklistCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    titre?: SortOrder
    icone?: SortOrder
    checklistId?: SortOrder
  }

  export type ChecklistCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    titre?: SortOrder
    icone?: SortOrder
    checklistId?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ChecklistCategoryScalarRelationFilter = {
    is?: ChecklistCategoryWhereInput
    isNot?: ChecklistCategoryWhereInput
  }

  export type ChecklistItemOrderByRelevanceInput = {
    fields: ChecklistItemOrderByRelevanceFieldEnum | ChecklistItemOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ChecklistItemCountOrderByAggregateInput = {
    id?: SortOrder
    titre?: SortOrder
    description?: SortOrder
    isChecked?: SortOrder
    reminderDate?: SortOrder
    categoryId?: SortOrder
  }

  export type ChecklistItemMaxOrderByAggregateInput = {
    id?: SortOrder
    titre?: SortOrder
    description?: SortOrder
    isChecked?: SortOrder
    reminderDate?: SortOrder
    categoryId?: SortOrder
  }

  export type ChecklistItemMinOrderByAggregateInput = {
    id?: SortOrder
    titre?: SortOrder
    description?: SortOrder
    isChecked?: SortOrder
    reminderDate?: SortOrder
    categoryId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ReviewOrderByRelevanceInput = {
    fields: ReviewOrderByRelevanceFieldEnum | ReviewOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    destinationId?: SortOrder
    rating?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    userId?: SortOrder
    rating?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    destinationId?: SortOrder
    rating?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    destinationId?: SortOrder
    rating?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    userId?: SortOrder
    rating?: SortOrder
  }

  export type ReviewScalarRelationFilter = {
    is?: ReviewWhereInput
    isNot?: ReviewWhereInput
  }

  export type ReviewLikeOrderByRelevanceInput = {
    fields: ReviewLikeOrderByRelevanceFieldEnum | ReviewLikeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ReviewLikeUserIdReviewIdCompoundUniqueInput = {
    userId: number
    reviewId: string
  }

  export type ReviewLikeCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    reviewId?: SortOrder
  }

  export type ReviewLikeAvgOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type ReviewLikeMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    reviewId?: SortOrder
  }

  export type ReviewLikeMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    reviewId?: SortOrder
  }

  export type ReviewLikeSumOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type UserVoyageOrderByRelevanceInput = {
    fields: UserVoyageOrderByRelevanceFieldEnum | UserVoyageOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserVoyageUserIdDestinationIdCompoundUniqueInput = {
    userId: number
    destinationId: string
  }

  export type UserVoyageCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    destinationId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserVoyageAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type UserVoyageMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    destinationId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserVoyageMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    destinationId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserVoyageSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type DestinationCreateNestedManyWithoutUtilisateurInput = {
    create?: XOR<DestinationCreateWithoutUtilisateurInput, DestinationUncheckedCreateWithoutUtilisateurInput> | DestinationCreateWithoutUtilisateurInput[] | DestinationUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: DestinationCreateOrConnectWithoutUtilisateurInput | DestinationCreateOrConnectWithoutUtilisateurInput[]
    createMany?: DestinationCreateManyUtilisateurInputEnvelope
    connect?: DestinationWhereUniqueInput | DestinationWhereUniqueInput[]
  }

  export type ChecklistCreateNestedManyWithoutUserInput = {
    create?: XOR<ChecklistCreateWithoutUserInput, ChecklistUncheckedCreateWithoutUserInput> | ChecklistCreateWithoutUserInput[] | ChecklistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChecklistCreateOrConnectWithoutUserInput | ChecklistCreateOrConnectWithoutUserInput[]
    createMany?: ChecklistCreateManyUserInputEnvelope
    connect?: ChecklistWhereUniqueInput | ChecklistWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type ReviewLikeCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewLikeCreateWithoutUserInput, ReviewLikeUncheckedCreateWithoutUserInput> | ReviewLikeCreateWithoutUserInput[] | ReviewLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewLikeCreateOrConnectWithoutUserInput | ReviewLikeCreateOrConnectWithoutUserInput[]
    createMany?: ReviewLikeCreateManyUserInputEnvelope
    connect?: ReviewLikeWhereUniqueInput | ReviewLikeWhereUniqueInput[]
  }

  export type UserVoyageCreateNestedManyWithoutUserInput = {
    create?: XOR<UserVoyageCreateWithoutUserInput, UserVoyageUncheckedCreateWithoutUserInput> | UserVoyageCreateWithoutUserInput[] | UserVoyageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserVoyageCreateOrConnectWithoutUserInput | UserVoyageCreateOrConnectWithoutUserInput[]
    createMany?: UserVoyageCreateManyUserInputEnvelope
    connect?: UserVoyageWhereUniqueInput | UserVoyageWhereUniqueInput[]
  }

  export type DestinationUncheckedCreateNestedManyWithoutUtilisateurInput = {
    create?: XOR<DestinationCreateWithoutUtilisateurInput, DestinationUncheckedCreateWithoutUtilisateurInput> | DestinationCreateWithoutUtilisateurInput[] | DestinationUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: DestinationCreateOrConnectWithoutUtilisateurInput | DestinationCreateOrConnectWithoutUtilisateurInput[]
    createMany?: DestinationCreateManyUtilisateurInputEnvelope
    connect?: DestinationWhereUniqueInput | DestinationWhereUniqueInput[]
  }

  export type ChecklistUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ChecklistCreateWithoutUserInput, ChecklistUncheckedCreateWithoutUserInput> | ChecklistCreateWithoutUserInput[] | ChecklistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChecklistCreateOrConnectWithoutUserInput | ChecklistCreateOrConnectWithoutUserInput[]
    createMany?: ChecklistCreateManyUserInputEnvelope
    connect?: ChecklistWhereUniqueInput | ChecklistWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type ReviewLikeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewLikeCreateWithoutUserInput, ReviewLikeUncheckedCreateWithoutUserInput> | ReviewLikeCreateWithoutUserInput[] | ReviewLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewLikeCreateOrConnectWithoutUserInput | ReviewLikeCreateOrConnectWithoutUserInput[]
    createMany?: ReviewLikeCreateManyUserInputEnvelope
    connect?: ReviewLikeWhereUniqueInput | ReviewLikeWhereUniqueInput[]
  }

  export type UserVoyageUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserVoyageCreateWithoutUserInput, UserVoyageUncheckedCreateWithoutUserInput> | UserVoyageCreateWithoutUserInput[] | UserVoyageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserVoyageCreateOrConnectWithoutUserInput | UserVoyageCreateOrConnectWithoutUserInput[]
    createMany?: UserVoyageCreateManyUserInputEnvelope
    connect?: UserVoyageWhereUniqueInput | UserVoyageWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DestinationUpdateManyWithoutUtilisateurNestedInput = {
    create?: XOR<DestinationCreateWithoutUtilisateurInput, DestinationUncheckedCreateWithoutUtilisateurInput> | DestinationCreateWithoutUtilisateurInput[] | DestinationUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: DestinationCreateOrConnectWithoutUtilisateurInput | DestinationCreateOrConnectWithoutUtilisateurInput[]
    upsert?: DestinationUpsertWithWhereUniqueWithoutUtilisateurInput | DestinationUpsertWithWhereUniqueWithoutUtilisateurInput[]
    createMany?: DestinationCreateManyUtilisateurInputEnvelope
    set?: DestinationWhereUniqueInput | DestinationWhereUniqueInput[]
    disconnect?: DestinationWhereUniqueInput | DestinationWhereUniqueInput[]
    delete?: DestinationWhereUniqueInput | DestinationWhereUniqueInput[]
    connect?: DestinationWhereUniqueInput | DestinationWhereUniqueInput[]
    update?: DestinationUpdateWithWhereUniqueWithoutUtilisateurInput | DestinationUpdateWithWhereUniqueWithoutUtilisateurInput[]
    updateMany?: DestinationUpdateManyWithWhereWithoutUtilisateurInput | DestinationUpdateManyWithWhereWithoutUtilisateurInput[]
    deleteMany?: DestinationScalarWhereInput | DestinationScalarWhereInput[]
  }

  export type ChecklistUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChecklistCreateWithoutUserInput, ChecklistUncheckedCreateWithoutUserInput> | ChecklistCreateWithoutUserInput[] | ChecklistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChecklistCreateOrConnectWithoutUserInput | ChecklistCreateOrConnectWithoutUserInput[]
    upsert?: ChecklistUpsertWithWhereUniqueWithoutUserInput | ChecklistUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChecklistCreateManyUserInputEnvelope
    set?: ChecklistWhereUniqueInput | ChecklistWhereUniqueInput[]
    disconnect?: ChecklistWhereUniqueInput | ChecklistWhereUniqueInput[]
    delete?: ChecklistWhereUniqueInput | ChecklistWhereUniqueInput[]
    connect?: ChecklistWhereUniqueInput | ChecklistWhereUniqueInput[]
    update?: ChecklistUpdateWithWhereUniqueWithoutUserInput | ChecklistUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChecklistUpdateManyWithWhereWithoutUserInput | ChecklistUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChecklistScalarWhereInput | ChecklistScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutUserInput | ReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutUserInput | ReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutUserInput | ReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type ReviewLikeUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewLikeCreateWithoutUserInput, ReviewLikeUncheckedCreateWithoutUserInput> | ReviewLikeCreateWithoutUserInput[] | ReviewLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewLikeCreateOrConnectWithoutUserInput | ReviewLikeCreateOrConnectWithoutUserInput[]
    upsert?: ReviewLikeUpsertWithWhereUniqueWithoutUserInput | ReviewLikeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewLikeCreateManyUserInputEnvelope
    set?: ReviewLikeWhereUniqueInput | ReviewLikeWhereUniqueInput[]
    disconnect?: ReviewLikeWhereUniqueInput | ReviewLikeWhereUniqueInput[]
    delete?: ReviewLikeWhereUniqueInput | ReviewLikeWhereUniqueInput[]
    connect?: ReviewLikeWhereUniqueInput | ReviewLikeWhereUniqueInput[]
    update?: ReviewLikeUpdateWithWhereUniqueWithoutUserInput | ReviewLikeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewLikeUpdateManyWithWhereWithoutUserInput | ReviewLikeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewLikeScalarWhereInput | ReviewLikeScalarWhereInput[]
  }

  export type UserVoyageUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserVoyageCreateWithoutUserInput, UserVoyageUncheckedCreateWithoutUserInput> | UserVoyageCreateWithoutUserInput[] | UserVoyageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserVoyageCreateOrConnectWithoutUserInput | UserVoyageCreateOrConnectWithoutUserInput[]
    upsert?: UserVoyageUpsertWithWhereUniqueWithoutUserInput | UserVoyageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserVoyageCreateManyUserInputEnvelope
    set?: UserVoyageWhereUniqueInput | UserVoyageWhereUniqueInput[]
    disconnect?: UserVoyageWhereUniqueInput | UserVoyageWhereUniqueInput[]
    delete?: UserVoyageWhereUniqueInput | UserVoyageWhereUniqueInput[]
    connect?: UserVoyageWhereUniqueInput | UserVoyageWhereUniqueInput[]
    update?: UserVoyageUpdateWithWhereUniqueWithoutUserInput | UserVoyageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserVoyageUpdateManyWithWhereWithoutUserInput | UserVoyageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserVoyageScalarWhereInput | UserVoyageScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DestinationUncheckedUpdateManyWithoutUtilisateurNestedInput = {
    create?: XOR<DestinationCreateWithoutUtilisateurInput, DestinationUncheckedCreateWithoutUtilisateurInput> | DestinationCreateWithoutUtilisateurInput[] | DestinationUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: DestinationCreateOrConnectWithoutUtilisateurInput | DestinationCreateOrConnectWithoutUtilisateurInput[]
    upsert?: DestinationUpsertWithWhereUniqueWithoutUtilisateurInput | DestinationUpsertWithWhereUniqueWithoutUtilisateurInput[]
    createMany?: DestinationCreateManyUtilisateurInputEnvelope
    set?: DestinationWhereUniqueInput | DestinationWhereUniqueInput[]
    disconnect?: DestinationWhereUniqueInput | DestinationWhereUniqueInput[]
    delete?: DestinationWhereUniqueInput | DestinationWhereUniqueInput[]
    connect?: DestinationWhereUniqueInput | DestinationWhereUniqueInput[]
    update?: DestinationUpdateWithWhereUniqueWithoutUtilisateurInput | DestinationUpdateWithWhereUniqueWithoutUtilisateurInput[]
    updateMany?: DestinationUpdateManyWithWhereWithoutUtilisateurInput | DestinationUpdateManyWithWhereWithoutUtilisateurInput[]
    deleteMany?: DestinationScalarWhereInput | DestinationScalarWhereInput[]
  }

  export type ChecklistUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChecklistCreateWithoutUserInput, ChecklistUncheckedCreateWithoutUserInput> | ChecklistCreateWithoutUserInput[] | ChecklistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChecklistCreateOrConnectWithoutUserInput | ChecklistCreateOrConnectWithoutUserInput[]
    upsert?: ChecklistUpsertWithWhereUniqueWithoutUserInput | ChecklistUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChecklistCreateManyUserInputEnvelope
    set?: ChecklistWhereUniqueInput | ChecklistWhereUniqueInput[]
    disconnect?: ChecklistWhereUniqueInput | ChecklistWhereUniqueInput[]
    delete?: ChecklistWhereUniqueInput | ChecklistWhereUniqueInput[]
    connect?: ChecklistWhereUniqueInput | ChecklistWhereUniqueInput[]
    update?: ChecklistUpdateWithWhereUniqueWithoutUserInput | ChecklistUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChecklistUpdateManyWithWhereWithoutUserInput | ChecklistUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChecklistScalarWhereInput | ChecklistScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutUserInput | ReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutUserInput | ReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutUserInput | ReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type ReviewLikeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewLikeCreateWithoutUserInput, ReviewLikeUncheckedCreateWithoutUserInput> | ReviewLikeCreateWithoutUserInput[] | ReviewLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewLikeCreateOrConnectWithoutUserInput | ReviewLikeCreateOrConnectWithoutUserInput[]
    upsert?: ReviewLikeUpsertWithWhereUniqueWithoutUserInput | ReviewLikeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewLikeCreateManyUserInputEnvelope
    set?: ReviewLikeWhereUniqueInput | ReviewLikeWhereUniqueInput[]
    disconnect?: ReviewLikeWhereUniqueInput | ReviewLikeWhereUniqueInput[]
    delete?: ReviewLikeWhereUniqueInput | ReviewLikeWhereUniqueInput[]
    connect?: ReviewLikeWhereUniqueInput | ReviewLikeWhereUniqueInput[]
    update?: ReviewLikeUpdateWithWhereUniqueWithoutUserInput | ReviewLikeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewLikeUpdateManyWithWhereWithoutUserInput | ReviewLikeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewLikeScalarWhereInput | ReviewLikeScalarWhereInput[]
  }

  export type UserVoyageUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserVoyageCreateWithoutUserInput, UserVoyageUncheckedCreateWithoutUserInput> | UserVoyageCreateWithoutUserInput[] | UserVoyageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserVoyageCreateOrConnectWithoutUserInput | UserVoyageCreateOrConnectWithoutUserInput[]
    upsert?: UserVoyageUpsertWithWhereUniqueWithoutUserInput | UserVoyageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserVoyageCreateManyUserInputEnvelope
    set?: UserVoyageWhereUniqueInput | UserVoyageWhereUniqueInput[]
    disconnect?: UserVoyageWhereUniqueInput | UserVoyageWhereUniqueInput[]
    delete?: UserVoyageWhereUniqueInput | UserVoyageWhereUniqueInput[]
    connect?: UserVoyageWhereUniqueInput | UserVoyageWhereUniqueInput[]
    update?: UserVoyageUpdateWithWhereUniqueWithoutUserInput | UserVoyageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserVoyageUpdateManyWithWhereWithoutUserInput | UserVoyageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserVoyageScalarWhereInput | UserVoyageScalarWhereInput[]
  }

  export type SectionCreateNestedManyWithoutDestinationInput = {
    create?: XOR<SectionCreateWithoutDestinationInput, SectionUncheckedCreateWithoutDestinationInput> | SectionCreateWithoutDestinationInput[] | SectionUncheckedCreateWithoutDestinationInput[]
    connectOrCreate?: SectionCreateOrConnectWithoutDestinationInput | SectionCreateOrConnectWithoutDestinationInput[]
    createMany?: SectionCreateManyDestinationInputEnvelope
    connect?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutVoyagesInput = {
    create?: XOR<UserCreateWithoutVoyagesInput, UserUncheckedCreateWithoutVoyagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutVoyagesInput
    connect?: UserWhereUniqueInput
  }

  export type ChecklistCreateNestedManyWithoutVoyageInput = {
    create?: XOR<ChecklistCreateWithoutVoyageInput, ChecklistUncheckedCreateWithoutVoyageInput> | ChecklistCreateWithoutVoyageInput[] | ChecklistUncheckedCreateWithoutVoyageInput[]
    connectOrCreate?: ChecklistCreateOrConnectWithoutVoyageInput | ChecklistCreateOrConnectWithoutVoyageInput[]
    createMany?: ChecklistCreateManyVoyageInputEnvelope
    connect?: ChecklistWhereUniqueInput | ChecklistWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutDestinationInput = {
    create?: XOR<ReviewCreateWithoutDestinationInput, ReviewUncheckedCreateWithoutDestinationInput> | ReviewCreateWithoutDestinationInput[] | ReviewUncheckedCreateWithoutDestinationInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutDestinationInput | ReviewCreateOrConnectWithoutDestinationInput[]
    createMany?: ReviewCreateManyDestinationInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type UserVoyageCreateNestedManyWithoutDestinationInput = {
    create?: XOR<UserVoyageCreateWithoutDestinationInput, UserVoyageUncheckedCreateWithoutDestinationInput> | UserVoyageCreateWithoutDestinationInput[] | UserVoyageUncheckedCreateWithoutDestinationInput[]
    connectOrCreate?: UserVoyageCreateOrConnectWithoutDestinationInput | UserVoyageCreateOrConnectWithoutDestinationInput[]
    createMany?: UserVoyageCreateManyDestinationInputEnvelope
    connect?: UserVoyageWhereUniqueInput | UserVoyageWhereUniqueInput[]
  }

  export type SectionUncheckedCreateNestedManyWithoutDestinationInput = {
    create?: XOR<SectionCreateWithoutDestinationInput, SectionUncheckedCreateWithoutDestinationInput> | SectionCreateWithoutDestinationInput[] | SectionUncheckedCreateWithoutDestinationInput[]
    connectOrCreate?: SectionCreateOrConnectWithoutDestinationInput | SectionCreateOrConnectWithoutDestinationInput[]
    createMany?: SectionCreateManyDestinationInputEnvelope
    connect?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
  }

  export type ChecklistUncheckedCreateNestedManyWithoutVoyageInput = {
    create?: XOR<ChecklistCreateWithoutVoyageInput, ChecklistUncheckedCreateWithoutVoyageInput> | ChecklistCreateWithoutVoyageInput[] | ChecklistUncheckedCreateWithoutVoyageInput[]
    connectOrCreate?: ChecklistCreateOrConnectWithoutVoyageInput | ChecklistCreateOrConnectWithoutVoyageInput[]
    createMany?: ChecklistCreateManyVoyageInputEnvelope
    connect?: ChecklistWhereUniqueInput | ChecklistWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutDestinationInput = {
    create?: XOR<ReviewCreateWithoutDestinationInput, ReviewUncheckedCreateWithoutDestinationInput> | ReviewCreateWithoutDestinationInput[] | ReviewUncheckedCreateWithoutDestinationInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutDestinationInput | ReviewCreateOrConnectWithoutDestinationInput[]
    createMany?: ReviewCreateManyDestinationInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type UserVoyageUncheckedCreateNestedManyWithoutDestinationInput = {
    create?: XOR<UserVoyageCreateWithoutDestinationInput, UserVoyageUncheckedCreateWithoutDestinationInput> | UserVoyageCreateWithoutDestinationInput[] | UserVoyageUncheckedCreateWithoutDestinationInput[]
    connectOrCreate?: UserVoyageCreateOrConnectWithoutDestinationInput | UserVoyageCreateOrConnectWithoutDestinationInput[]
    createMany?: UserVoyageCreateManyDestinationInputEnvelope
    connect?: UserVoyageWhereUniqueInput | UserVoyageWhereUniqueInput[]
  }

  export type SectionUpdateManyWithoutDestinationNestedInput = {
    create?: XOR<SectionCreateWithoutDestinationInput, SectionUncheckedCreateWithoutDestinationInput> | SectionCreateWithoutDestinationInput[] | SectionUncheckedCreateWithoutDestinationInput[]
    connectOrCreate?: SectionCreateOrConnectWithoutDestinationInput | SectionCreateOrConnectWithoutDestinationInput[]
    upsert?: SectionUpsertWithWhereUniqueWithoutDestinationInput | SectionUpsertWithWhereUniqueWithoutDestinationInput[]
    createMany?: SectionCreateManyDestinationInputEnvelope
    set?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    disconnect?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    delete?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    connect?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    update?: SectionUpdateWithWhereUniqueWithoutDestinationInput | SectionUpdateWithWhereUniqueWithoutDestinationInput[]
    updateMany?: SectionUpdateManyWithWhereWithoutDestinationInput | SectionUpdateManyWithWhereWithoutDestinationInput[]
    deleteMany?: SectionScalarWhereInput | SectionScalarWhereInput[]
  }

  export type UserUpdateOneWithoutVoyagesNestedInput = {
    create?: XOR<UserCreateWithoutVoyagesInput, UserUncheckedCreateWithoutVoyagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutVoyagesInput
    upsert?: UserUpsertWithoutVoyagesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVoyagesInput, UserUpdateWithoutVoyagesInput>, UserUncheckedUpdateWithoutVoyagesInput>
  }

  export type ChecklistUpdateManyWithoutVoyageNestedInput = {
    create?: XOR<ChecklistCreateWithoutVoyageInput, ChecklistUncheckedCreateWithoutVoyageInput> | ChecklistCreateWithoutVoyageInput[] | ChecklistUncheckedCreateWithoutVoyageInput[]
    connectOrCreate?: ChecklistCreateOrConnectWithoutVoyageInput | ChecklistCreateOrConnectWithoutVoyageInput[]
    upsert?: ChecklistUpsertWithWhereUniqueWithoutVoyageInput | ChecklistUpsertWithWhereUniqueWithoutVoyageInput[]
    createMany?: ChecklistCreateManyVoyageInputEnvelope
    set?: ChecklistWhereUniqueInput | ChecklistWhereUniqueInput[]
    disconnect?: ChecklistWhereUniqueInput | ChecklistWhereUniqueInput[]
    delete?: ChecklistWhereUniqueInput | ChecklistWhereUniqueInput[]
    connect?: ChecklistWhereUniqueInput | ChecklistWhereUniqueInput[]
    update?: ChecklistUpdateWithWhereUniqueWithoutVoyageInput | ChecklistUpdateWithWhereUniqueWithoutVoyageInput[]
    updateMany?: ChecklistUpdateManyWithWhereWithoutVoyageInput | ChecklistUpdateManyWithWhereWithoutVoyageInput[]
    deleteMany?: ChecklistScalarWhereInput | ChecklistScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutDestinationNestedInput = {
    create?: XOR<ReviewCreateWithoutDestinationInput, ReviewUncheckedCreateWithoutDestinationInput> | ReviewCreateWithoutDestinationInput[] | ReviewUncheckedCreateWithoutDestinationInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutDestinationInput | ReviewCreateOrConnectWithoutDestinationInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutDestinationInput | ReviewUpsertWithWhereUniqueWithoutDestinationInput[]
    createMany?: ReviewCreateManyDestinationInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutDestinationInput | ReviewUpdateWithWhereUniqueWithoutDestinationInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutDestinationInput | ReviewUpdateManyWithWhereWithoutDestinationInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type UserVoyageUpdateManyWithoutDestinationNestedInput = {
    create?: XOR<UserVoyageCreateWithoutDestinationInput, UserVoyageUncheckedCreateWithoutDestinationInput> | UserVoyageCreateWithoutDestinationInput[] | UserVoyageUncheckedCreateWithoutDestinationInput[]
    connectOrCreate?: UserVoyageCreateOrConnectWithoutDestinationInput | UserVoyageCreateOrConnectWithoutDestinationInput[]
    upsert?: UserVoyageUpsertWithWhereUniqueWithoutDestinationInput | UserVoyageUpsertWithWhereUniqueWithoutDestinationInput[]
    createMany?: UserVoyageCreateManyDestinationInputEnvelope
    set?: UserVoyageWhereUniqueInput | UserVoyageWhereUniqueInput[]
    disconnect?: UserVoyageWhereUniqueInput | UserVoyageWhereUniqueInput[]
    delete?: UserVoyageWhereUniqueInput | UserVoyageWhereUniqueInput[]
    connect?: UserVoyageWhereUniqueInput | UserVoyageWhereUniqueInput[]
    update?: UserVoyageUpdateWithWhereUniqueWithoutDestinationInput | UserVoyageUpdateWithWhereUniqueWithoutDestinationInput[]
    updateMany?: UserVoyageUpdateManyWithWhereWithoutDestinationInput | UserVoyageUpdateManyWithWhereWithoutDestinationInput[]
    deleteMany?: UserVoyageScalarWhereInput | UserVoyageScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SectionUncheckedUpdateManyWithoutDestinationNestedInput = {
    create?: XOR<SectionCreateWithoutDestinationInput, SectionUncheckedCreateWithoutDestinationInput> | SectionCreateWithoutDestinationInput[] | SectionUncheckedCreateWithoutDestinationInput[]
    connectOrCreate?: SectionCreateOrConnectWithoutDestinationInput | SectionCreateOrConnectWithoutDestinationInput[]
    upsert?: SectionUpsertWithWhereUniqueWithoutDestinationInput | SectionUpsertWithWhereUniqueWithoutDestinationInput[]
    createMany?: SectionCreateManyDestinationInputEnvelope
    set?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    disconnect?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    delete?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    connect?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    update?: SectionUpdateWithWhereUniqueWithoutDestinationInput | SectionUpdateWithWhereUniqueWithoutDestinationInput[]
    updateMany?: SectionUpdateManyWithWhereWithoutDestinationInput | SectionUpdateManyWithWhereWithoutDestinationInput[]
    deleteMany?: SectionScalarWhereInput | SectionScalarWhereInput[]
  }

  export type ChecklistUncheckedUpdateManyWithoutVoyageNestedInput = {
    create?: XOR<ChecklistCreateWithoutVoyageInput, ChecklistUncheckedCreateWithoutVoyageInput> | ChecklistCreateWithoutVoyageInput[] | ChecklistUncheckedCreateWithoutVoyageInput[]
    connectOrCreate?: ChecklistCreateOrConnectWithoutVoyageInput | ChecklistCreateOrConnectWithoutVoyageInput[]
    upsert?: ChecklistUpsertWithWhereUniqueWithoutVoyageInput | ChecklistUpsertWithWhereUniqueWithoutVoyageInput[]
    createMany?: ChecklistCreateManyVoyageInputEnvelope
    set?: ChecklistWhereUniqueInput | ChecklistWhereUniqueInput[]
    disconnect?: ChecklistWhereUniqueInput | ChecklistWhereUniqueInput[]
    delete?: ChecklistWhereUniqueInput | ChecklistWhereUniqueInput[]
    connect?: ChecklistWhereUniqueInput | ChecklistWhereUniqueInput[]
    update?: ChecklistUpdateWithWhereUniqueWithoutVoyageInput | ChecklistUpdateWithWhereUniqueWithoutVoyageInput[]
    updateMany?: ChecklistUpdateManyWithWhereWithoutVoyageInput | ChecklistUpdateManyWithWhereWithoutVoyageInput[]
    deleteMany?: ChecklistScalarWhereInput | ChecklistScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutDestinationNestedInput = {
    create?: XOR<ReviewCreateWithoutDestinationInput, ReviewUncheckedCreateWithoutDestinationInput> | ReviewCreateWithoutDestinationInput[] | ReviewUncheckedCreateWithoutDestinationInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutDestinationInput | ReviewCreateOrConnectWithoutDestinationInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutDestinationInput | ReviewUpsertWithWhereUniqueWithoutDestinationInput[]
    createMany?: ReviewCreateManyDestinationInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutDestinationInput | ReviewUpdateWithWhereUniqueWithoutDestinationInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutDestinationInput | ReviewUpdateManyWithWhereWithoutDestinationInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type UserVoyageUncheckedUpdateManyWithoutDestinationNestedInput = {
    create?: XOR<UserVoyageCreateWithoutDestinationInput, UserVoyageUncheckedCreateWithoutDestinationInput> | UserVoyageCreateWithoutDestinationInput[] | UserVoyageUncheckedCreateWithoutDestinationInput[]
    connectOrCreate?: UserVoyageCreateOrConnectWithoutDestinationInput | UserVoyageCreateOrConnectWithoutDestinationInput[]
    upsert?: UserVoyageUpsertWithWhereUniqueWithoutDestinationInput | UserVoyageUpsertWithWhereUniqueWithoutDestinationInput[]
    createMany?: UserVoyageCreateManyDestinationInputEnvelope
    set?: UserVoyageWhereUniqueInput | UserVoyageWhereUniqueInput[]
    disconnect?: UserVoyageWhereUniqueInput | UserVoyageWhereUniqueInput[]
    delete?: UserVoyageWhereUniqueInput | UserVoyageWhereUniqueInput[]
    connect?: UserVoyageWhereUniqueInput | UserVoyageWhereUniqueInput[]
    update?: UserVoyageUpdateWithWhereUniqueWithoutDestinationInput | UserVoyageUpdateWithWhereUniqueWithoutDestinationInput[]
    updateMany?: UserVoyageUpdateManyWithWhereWithoutDestinationInput | UserVoyageUpdateManyWithWhereWithoutDestinationInput[]
    deleteMany?: UserVoyageScalarWhereInput | UserVoyageScalarWhereInput[]
  }

  export type BulletPointCreateNestedManyWithoutSectionInput = {
    create?: XOR<BulletPointCreateWithoutSectionInput, BulletPointUncheckedCreateWithoutSectionInput> | BulletPointCreateWithoutSectionInput[] | BulletPointUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: BulletPointCreateOrConnectWithoutSectionInput | BulletPointCreateOrConnectWithoutSectionInput[]
    createMany?: BulletPointCreateManySectionInputEnvelope
    connect?: BulletPointWhereUniqueInput | BulletPointWhereUniqueInput[]
  }

  export type GroupedBulletPointCreateNestedManyWithoutSectionInput = {
    create?: XOR<GroupedBulletPointCreateWithoutSectionInput, GroupedBulletPointUncheckedCreateWithoutSectionInput> | GroupedBulletPointCreateWithoutSectionInput[] | GroupedBulletPointUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: GroupedBulletPointCreateOrConnectWithoutSectionInput | GroupedBulletPointCreateOrConnectWithoutSectionInput[]
    createMany?: GroupedBulletPointCreateManySectionInputEnvelope
    connect?: GroupedBulletPointWhereUniqueInput | GroupedBulletPointWhereUniqueInput[]
  }

  export type ImageCreateNestedManyWithoutSectionInput = {
    create?: XOR<ImageCreateWithoutSectionInput, ImageUncheckedCreateWithoutSectionInput> | ImageCreateWithoutSectionInput[] | ImageUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutSectionInput | ImageCreateOrConnectWithoutSectionInput[]
    createMany?: ImageCreateManySectionInputEnvelope
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type DestinationCreateNestedOneWithoutSectionsInput = {
    create?: XOR<DestinationCreateWithoutSectionsInput, DestinationUncheckedCreateWithoutSectionsInput>
    connectOrCreate?: DestinationCreateOrConnectWithoutSectionsInput
    connect?: DestinationWhereUniqueInput
  }

  export type BulletPointUncheckedCreateNestedManyWithoutSectionInput = {
    create?: XOR<BulletPointCreateWithoutSectionInput, BulletPointUncheckedCreateWithoutSectionInput> | BulletPointCreateWithoutSectionInput[] | BulletPointUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: BulletPointCreateOrConnectWithoutSectionInput | BulletPointCreateOrConnectWithoutSectionInput[]
    createMany?: BulletPointCreateManySectionInputEnvelope
    connect?: BulletPointWhereUniqueInput | BulletPointWhereUniqueInput[]
  }

  export type GroupedBulletPointUncheckedCreateNestedManyWithoutSectionInput = {
    create?: XOR<GroupedBulletPointCreateWithoutSectionInput, GroupedBulletPointUncheckedCreateWithoutSectionInput> | GroupedBulletPointCreateWithoutSectionInput[] | GroupedBulletPointUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: GroupedBulletPointCreateOrConnectWithoutSectionInput | GroupedBulletPointCreateOrConnectWithoutSectionInput[]
    createMany?: GroupedBulletPointCreateManySectionInputEnvelope
    connect?: GroupedBulletPointWhereUniqueInput | GroupedBulletPointWhereUniqueInput[]
  }

  export type ImageUncheckedCreateNestedManyWithoutSectionInput = {
    create?: XOR<ImageCreateWithoutSectionInput, ImageUncheckedCreateWithoutSectionInput> | ImageCreateWithoutSectionInput[] | ImageUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutSectionInput | ImageCreateOrConnectWithoutSectionInput[]
    createMany?: ImageCreateManySectionInputEnvelope
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type EnumSectionTypeFieldUpdateOperationsInput = {
    set?: $Enums.SectionType
  }

  export type BulletPointUpdateManyWithoutSectionNestedInput = {
    create?: XOR<BulletPointCreateWithoutSectionInput, BulletPointUncheckedCreateWithoutSectionInput> | BulletPointCreateWithoutSectionInput[] | BulletPointUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: BulletPointCreateOrConnectWithoutSectionInput | BulletPointCreateOrConnectWithoutSectionInput[]
    upsert?: BulletPointUpsertWithWhereUniqueWithoutSectionInput | BulletPointUpsertWithWhereUniqueWithoutSectionInput[]
    createMany?: BulletPointCreateManySectionInputEnvelope
    set?: BulletPointWhereUniqueInput | BulletPointWhereUniqueInput[]
    disconnect?: BulletPointWhereUniqueInput | BulletPointWhereUniqueInput[]
    delete?: BulletPointWhereUniqueInput | BulletPointWhereUniqueInput[]
    connect?: BulletPointWhereUniqueInput | BulletPointWhereUniqueInput[]
    update?: BulletPointUpdateWithWhereUniqueWithoutSectionInput | BulletPointUpdateWithWhereUniqueWithoutSectionInput[]
    updateMany?: BulletPointUpdateManyWithWhereWithoutSectionInput | BulletPointUpdateManyWithWhereWithoutSectionInput[]
    deleteMany?: BulletPointScalarWhereInput | BulletPointScalarWhereInput[]
  }

  export type GroupedBulletPointUpdateManyWithoutSectionNestedInput = {
    create?: XOR<GroupedBulletPointCreateWithoutSectionInput, GroupedBulletPointUncheckedCreateWithoutSectionInput> | GroupedBulletPointCreateWithoutSectionInput[] | GroupedBulletPointUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: GroupedBulletPointCreateOrConnectWithoutSectionInput | GroupedBulletPointCreateOrConnectWithoutSectionInput[]
    upsert?: GroupedBulletPointUpsertWithWhereUniqueWithoutSectionInput | GroupedBulletPointUpsertWithWhereUniqueWithoutSectionInput[]
    createMany?: GroupedBulletPointCreateManySectionInputEnvelope
    set?: GroupedBulletPointWhereUniqueInput | GroupedBulletPointWhereUniqueInput[]
    disconnect?: GroupedBulletPointWhereUniqueInput | GroupedBulletPointWhereUniqueInput[]
    delete?: GroupedBulletPointWhereUniqueInput | GroupedBulletPointWhereUniqueInput[]
    connect?: GroupedBulletPointWhereUniqueInput | GroupedBulletPointWhereUniqueInput[]
    update?: GroupedBulletPointUpdateWithWhereUniqueWithoutSectionInput | GroupedBulletPointUpdateWithWhereUniqueWithoutSectionInput[]
    updateMany?: GroupedBulletPointUpdateManyWithWhereWithoutSectionInput | GroupedBulletPointUpdateManyWithWhereWithoutSectionInput[]
    deleteMany?: GroupedBulletPointScalarWhereInput | GroupedBulletPointScalarWhereInput[]
  }

  export type ImageUpdateManyWithoutSectionNestedInput = {
    create?: XOR<ImageCreateWithoutSectionInput, ImageUncheckedCreateWithoutSectionInput> | ImageCreateWithoutSectionInput[] | ImageUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutSectionInput | ImageCreateOrConnectWithoutSectionInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutSectionInput | ImageUpsertWithWhereUniqueWithoutSectionInput[]
    createMany?: ImageCreateManySectionInputEnvelope
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutSectionInput | ImageUpdateWithWhereUniqueWithoutSectionInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutSectionInput | ImageUpdateManyWithWhereWithoutSectionInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type DestinationUpdateOneRequiredWithoutSectionsNestedInput = {
    create?: XOR<DestinationCreateWithoutSectionsInput, DestinationUncheckedCreateWithoutSectionsInput>
    connectOrCreate?: DestinationCreateOrConnectWithoutSectionsInput
    upsert?: DestinationUpsertWithoutSectionsInput
    connect?: DestinationWhereUniqueInput
    update?: XOR<XOR<DestinationUpdateToOneWithWhereWithoutSectionsInput, DestinationUpdateWithoutSectionsInput>, DestinationUncheckedUpdateWithoutSectionsInput>
  }

  export type BulletPointUncheckedUpdateManyWithoutSectionNestedInput = {
    create?: XOR<BulletPointCreateWithoutSectionInput, BulletPointUncheckedCreateWithoutSectionInput> | BulletPointCreateWithoutSectionInput[] | BulletPointUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: BulletPointCreateOrConnectWithoutSectionInput | BulletPointCreateOrConnectWithoutSectionInput[]
    upsert?: BulletPointUpsertWithWhereUniqueWithoutSectionInput | BulletPointUpsertWithWhereUniqueWithoutSectionInput[]
    createMany?: BulletPointCreateManySectionInputEnvelope
    set?: BulletPointWhereUniqueInput | BulletPointWhereUniqueInput[]
    disconnect?: BulletPointWhereUniqueInput | BulletPointWhereUniqueInput[]
    delete?: BulletPointWhereUniqueInput | BulletPointWhereUniqueInput[]
    connect?: BulletPointWhereUniqueInput | BulletPointWhereUniqueInput[]
    update?: BulletPointUpdateWithWhereUniqueWithoutSectionInput | BulletPointUpdateWithWhereUniqueWithoutSectionInput[]
    updateMany?: BulletPointUpdateManyWithWhereWithoutSectionInput | BulletPointUpdateManyWithWhereWithoutSectionInput[]
    deleteMany?: BulletPointScalarWhereInput | BulletPointScalarWhereInput[]
  }

  export type GroupedBulletPointUncheckedUpdateManyWithoutSectionNestedInput = {
    create?: XOR<GroupedBulletPointCreateWithoutSectionInput, GroupedBulletPointUncheckedCreateWithoutSectionInput> | GroupedBulletPointCreateWithoutSectionInput[] | GroupedBulletPointUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: GroupedBulletPointCreateOrConnectWithoutSectionInput | GroupedBulletPointCreateOrConnectWithoutSectionInput[]
    upsert?: GroupedBulletPointUpsertWithWhereUniqueWithoutSectionInput | GroupedBulletPointUpsertWithWhereUniqueWithoutSectionInput[]
    createMany?: GroupedBulletPointCreateManySectionInputEnvelope
    set?: GroupedBulletPointWhereUniqueInput | GroupedBulletPointWhereUniqueInput[]
    disconnect?: GroupedBulletPointWhereUniqueInput | GroupedBulletPointWhereUniqueInput[]
    delete?: GroupedBulletPointWhereUniqueInput | GroupedBulletPointWhereUniqueInput[]
    connect?: GroupedBulletPointWhereUniqueInput | GroupedBulletPointWhereUniqueInput[]
    update?: GroupedBulletPointUpdateWithWhereUniqueWithoutSectionInput | GroupedBulletPointUpdateWithWhereUniqueWithoutSectionInput[]
    updateMany?: GroupedBulletPointUpdateManyWithWhereWithoutSectionInput | GroupedBulletPointUpdateManyWithWhereWithoutSectionInput[]
    deleteMany?: GroupedBulletPointScalarWhereInput | GroupedBulletPointScalarWhereInput[]
  }

  export type ImageUncheckedUpdateManyWithoutSectionNestedInput = {
    create?: XOR<ImageCreateWithoutSectionInput, ImageUncheckedCreateWithoutSectionInput> | ImageCreateWithoutSectionInput[] | ImageUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutSectionInput | ImageCreateOrConnectWithoutSectionInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutSectionInput | ImageUpsertWithWhereUniqueWithoutSectionInput[]
    createMany?: ImageCreateManySectionInputEnvelope
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutSectionInput | ImageUpdateWithWhereUniqueWithoutSectionInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutSectionInput | ImageUpdateManyWithWhereWithoutSectionInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type SectionCreateNestedOneWithoutBulletPointsInput = {
    create?: XOR<SectionCreateWithoutBulletPointsInput, SectionUncheckedCreateWithoutBulletPointsInput>
    connectOrCreate?: SectionCreateOrConnectWithoutBulletPointsInput
    connect?: SectionWhereUniqueInput
  }

  export type SectionUpdateOneRequiredWithoutBulletPointsNestedInput = {
    create?: XOR<SectionCreateWithoutBulletPointsInput, SectionUncheckedCreateWithoutBulletPointsInput>
    connectOrCreate?: SectionCreateOrConnectWithoutBulletPointsInput
    upsert?: SectionUpsertWithoutBulletPointsInput
    connect?: SectionWhereUniqueInput
    update?: XOR<XOR<SectionUpdateToOneWithWhereWithoutBulletPointsInput, SectionUpdateWithoutBulletPointsInput>, SectionUncheckedUpdateWithoutBulletPointsInput>
  }

  export type SectionCreateNestedOneWithoutGroupedPointsInput = {
    create?: XOR<SectionCreateWithoutGroupedPointsInput, SectionUncheckedCreateWithoutGroupedPointsInput>
    connectOrCreate?: SectionCreateOrConnectWithoutGroupedPointsInput
    connect?: SectionWhereUniqueInput
  }

  export type BulletPointContentCreateNestedManyWithoutGroupInput = {
    create?: XOR<BulletPointContentCreateWithoutGroupInput, BulletPointContentUncheckedCreateWithoutGroupInput> | BulletPointContentCreateWithoutGroupInput[] | BulletPointContentUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: BulletPointContentCreateOrConnectWithoutGroupInput | BulletPointContentCreateOrConnectWithoutGroupInput[]
    createMany?: BulletPointContentCreateManyGroupInputEnvelope
    connect?: BulletPointContentWhereUniqueInput | BulletPointContentWhereUniqueInput[]
  }

  export type BulletPointContentUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<BulletPointContentCreateWithoutGroupInput, BulletPointContentUncheckedCreateWithoutGroupInput> | BulletPointContentCreateWithoutGroupInput[] | BulletPointContentUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: BulletPointContentCreateOrConnectWithoutGroupInput | BulletPointContentCreateOrConnectWithoutGroupInput[]
    createMany?: BulletPointContentCreateManyGroupInputEnvelope
    connect?: BulletPointContentWhereUniqueInput | BulletPointContentWhereUniqueInput[]
  }

  export type SectionUpdateOneRequiredWithoutGroupedPointsNestedInput = {
    create?: XOR<SectionCreateWithoutGroupedPointsInput, SectionUncheckedCreateWithoutGroupedPointsInput>
    connectOrCreate?: SectionCreateOrConnectWithoutGroupedPointsInput
    upsert?: SectionUpsertWithoutGroupedPointsInput
    connect?: SectionWhereUniqueInput
    update?: XOR<XOR<SectionUpdateToOneWithWhereWithoutGroupedPointsInput, SectionUpdateWithoutGroupedPointsInput>, SectionUncheckedUpdateWithoutGroupedPointsInput>
  }

  export type BulletPointContentUpdateManyWithoutGroupNestedInput = {
    create?: XOR<BulletPointContentCreateWithoutGroupInput, BulletPointContentUncheckedCreateWithoutGroupInput> | BulletPointContentCreateWithoutGroupInput[] | BulletPointContentUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: BulletPointContentCreateOrConnectWithoutGroupInput | BulletPointContentCreateOrConnectWithoutGroupInput[]
    upsert?: BulletPointContentUpsertWithWhereUniqueWithoutGroupInput | BulletPointContentUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: BulletPointContentCreateManyGroupInputEnvelope
    set?: BulletPointContentWhereUniqueInput | BulletPointContentWhereUniqueInput[]
    disconnect?: BulletPointContentWhereUniqueInput | BulletPointContentWhereUniqueInput[]
    delete?: BulletPointContentWhereUniqueInput | BulletPointContentWhereUniqueInput[]
    connect?: BulletPointContentWhereUniqueInput | BulletPointContentWhereUniqueInput[]
    update?: BulletPointContentUpdateWithWhereUniqueWithoutGroupInput | BulletPointContentUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: BulletPointContentUpdateManyWithWhereWithoutGroupInput | BulletPointContentUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: BulletPointContentScalarWhereInput | BulletPointContentScalarWhereInput[]
  }

  export type BulletPointContentUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<BulletPointContentCreateWithoutGroupInput, BulletPointContentUncheckedCreateWithoutGroupInput> | BulletPointContentCreateWithoutGroupInput[] | BulletPointContentUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: BulletPointContentCreateOrConnectWithoutGroupInput | BulletPointContentCreateOrConnectWithoutGroupInput[]
    upsert?: BulletPointContentUpsertWithWhereUniqueWithoutGroupInput | BulletPointContentUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: BulletPointContentCreateManyGroupInputEnvelope
    set?: BulletPointContentWhereUniqueInput | BulletPointContentWhereUniqueInput[]
    disconnect?: BulletPointContentWhereUniqueInput | BulletPointContentWhereUniqueInput[]
    delete?: BulletPointContentWhereUniqueInput | BulletPointContentWhereUniqueInput[]
    connect?: BulletPointContentWhereUniqueInput | BulletPointContentWhereUniqueInput[]
    update?: BulletPointContentUpdateWithWhereUniqueWithoutGroupInput | BulletPointContentUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: BulletPointContentUpdateManyWithWhereWithoutGroupInput | BulletPointContentUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: BulletPointContentScalarWhereInput | BulletPointContentScalarWhereInput[]
  }

  export type GroupedBulletPointCreateNestedOneWithoutContentsInput = {
    create?: XOR<GroupedBulletPointCreateWithoutContentsInput, GroupedBulletPointUncheckedCreateWithoutContentsInput>
    connectOrCreate?: GroupedBulletPointCreateOrConnectWithoutContentsInput
    connect?: GroupedBulletPointWhereUniqueInput
  }

  export type GroupedBulletPointUpdateOneRequiredWithoutContentsNestedInput = {
    create?: XOR<GroupedBulletPointCreateWithoutContentsInput, GroupedBulletPointUncheckedCreateWithoutContentsInput>
    connectOrCreate?: GroupedBulletPointCreateOrConnectWithoutContentsInput
    upsert?: GroupedBulletPointUpsertWithoutContentsInput
    connect?: GroupedBulletPointWhereUniqueInput
    update?: XOR<XOR<GroupedBulletPointUpdateToOneWithWhereWithoutContentsInput, GroupedBulletPointUpdateWithoutContentsInput>, GroupedBulletPointUncheckedUpdateWithoutContentsInput>
  }

  export type SectionCreateNestedOneWithoutImagesInput = {
    create?: XOR<SectionCreateWithoutImagesInput, SectionUncheckedCreateWithoutImagesInput>
    connectOrCreate?: SectionCreateOrConnectWithoutImagesInput
    connect?: SectionWhereUniqueInput
  }

  export type SectionUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<SectionCreateWithoutImagesInput, SectionUncheckedCreateWithoutImagesInput>
    connectOrCreate?: SectionCreateOrConnectWithoutImagesInput
    upsert?: SectionUpsertWithoutImagesInput
    connect?: SectionWhereUniqueInput
    update?: XOR<XOR<SectionUpdateToOneWithWhereWithoutImagesInput, SectionUpdateWithoutImagesInput>, SectionUncheckedUpdateWithoutImagesInput>
  }

  export type ChecklistCategoryCreateNestedManyWithoutChecklistInput = {
    create?: XOR<ChecklistCategoryCreateWithoutChecklistInput, ChecklistCategoryUncheckedCreateWithoutChecklistInput> | ChecklistCategoryCreateWithoutChecklistInput[] | ChecklistCategoryUncheckedCreateWithoutChecklistInput[]
    connectOrCreate?: ChecklistCategoryCreateOrConnectWithoutChecklistInput | ChecklistCategoryCreateOrConnectWithoutChecklistInput[]
    createMany?: ChecklistCategoryCreateManyChecklistInputEnvelope
    connect?: ChecklistCategoryWhereUniqueInput | ChecklistCategoryWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutChecklistsInput = {
    create?: XOR<UserCreateWithoutChecklistsInput, UserUncheckedCreateWithoutChecklistsInput>
    connectOrCreate?: UserCreateOrConnectWithoutChecklistsInput
    connect?: UserWhereUniqueInput
  }

  export type DestinationCreateNestedOneWithoutChecklistsInput = {
    create?: XOR<DestinationCreateWithoutChecklistsInput, DestinationUncheckedCreateWithoutChecklistsInput>
    connectOrCreate?: DestinationCreateOrConnectWithoutChecklistsInput
    connect?: DestinationWhereUniqueInput
  }

  export type ChecklistCategoryUncheckedCreateNestedManyWithoutChecklistInput = {
    create?: XOR<ChecklistCategoryCreateWithoutChecklistInput, ChecklistCategoryUncheckedCreateWithoutChecklistInput> | ChecklistCategoryCreateWithoutChecklistInput[] | ChecklistCategoryUncheckedCreateWithoutChecklistInput[]
    connectOrCreate?: ChecklistCategoryCreateOrConnectWithoutChecklistInput | ChecklistCategoryCreateOrConnectWithoutChecklistInput[]
    createMany?: ChecklistCategoryCreateManyChecklistInputEnvelope
    connect?: ChecklistCategoryWhereUniqueInput | ChecklistCategoryWhereUniqueInput[]
  }

  export type ChecklistCategoryUpdateManyWithoutChecklistNestedInput = {
    create?: XOR<ChecklistCategoryCreateWithoutChecklistInput, ChecklistCategoryUncheckedCreateWithoutChecklistInput> | ChecklistCategoryCreateWithoutChecklistInput[] | ChecklistCategoryUncheckedCreateWithoutChecklistInput[]
    connectOrCreate?: ChecklistCategoryCreateOrConnectWithoutChecklistInput | ChecklistCategoryCreateOrConnectWithoutChecklistInput[]
    upsert?: ChecklistCategoryUpsertWithWhereUniqueWithoutChecklistInput | ChecklistCategoryUpsertWithWhereUniqueWithoutChecklistInput[]
    createMany?: ChecklistCategoryCreateManyChecklistInputEnvelope
    set?: ChecklistCategoryWhereUniqueInput | ChecklistCategoryWhereUniqueInput[]
    disconnect?: ChecklistCategoryWhereUniqueInput | ChecklistCategoryWhereUniqueInput[]
    delete?: ChecklistCategoryWhereUniqueInput | ChecklistCategoryWhereUniqueInput[]
    connect?: ChecklistCategoryWhereUniqueInput | ChecklistCategoryWhereUniqueInput[]
    update?: ChecklistCategoryUpdateWithWhereUniqueWithoutChecklistInput | ChecklistCategoryUpdateWithWhereUniqueWithoutChecklistInput[]
    updateMany?: ChecklistCategoryUpdateManyWithWhereWithoutChecklistInput | ChecklistCategoryUpdateManyWithWhereWithoutChecklistInput[]
    deleteMany?: ChecklistCategoryScalarWhereInput | ChecklistCategoryScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutChecklistsNestedInput = {
    create?: XOR<UserCreateWithoutChecklistsInput, UserUncheckedCreateWithoutChecklistsInput>
    connectOrCreate?: UserCreateOrConnectWithoutChecklistsInput
    upsert?: UserUpsertWithoutChecklistsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChecklistsInput, UserUpdateWithoutChecklistsInput>, UserUncheckedUpdateWithoutChecklistsInput>
  }

  export type DestinationUpdateOneRequiredWithoutChecklistsNestedInput = {
    create?: XOR<DestinationCreateWithoutChecklistsInput, DestinationUncheckedCreateWithoutChecklistsInput>
    connectOrCreate?: DestinationCreateOrConnectWithoutChecklistsInput
    upsert?: DestinationUpsertWithoutChecklistsInput
    connect?: DestinationWhereUniqueInput
    update?: XOR<XOR<DestinationUpdateToOneWithWhereWithoutChecklistsInput, DestinationUpdateWithoutChecklistsInput>, DestinationUncheckedUpdateWithoutChecklistsInput>
  }

  export type ChecklistCategoryUncheckedUpdateManyWithoutChecklistNestedInput = {
    create?: XOR<ChecklistCategoryCreateWithoutChecklistInput, ChecklistCategoryUncheckedCreateWithoutChecklistInput> | ChecklistCategoryCreateWithoutChecklistInput[] | ChecklistCategoryUncheckedCreateWithoutChecklistInput[]
    connectOrCreate?: ChecklistCategoryCreateOrConnectWithoutChecklistInput | ChecklistCategoryCreateOrConnectWithoutChecklistInput[]
    upsert?: ChecklistCategoryUpsertWithWhereUniqueWithoutChecklistInput | ChecklistCategoryUpsertWithWhereUniqueWithoutChecklistInput[]
    createMany?: ChecklistCategoryCreateManyChecklistInputEnvelope
    set?: ChecklistCategoryWhereUniqueInput | ChecklistCategoryWhereUniqueInput[]
    disconnect?: ChecklistCategoryWhereUniqueInput | ChecklistCategoryWhereUniqueInput[]
    delete?: ChecklistCategoryWhereUniqueInput | ChecklistCategoryWhereUniqueInput[]
    connect?: ChecklistCategoryWhereUniqueInput | ChecklistCategoryWhereUniqueInput[]
    update?: ChecklistCategoryUpdateWithWhereUniqueWithoutChecklistInput | ChecklistCategoryUpdateWithWhereUniqueWithoutChecklistInput[]
    updateMany?: ChecklistCategoryUpdateManyWithWhereWithoutChecklistInput | ChecklistCategoryUpdateManyWithWhereWithoutChecklistInput[]
    deleteMany?: ChecklistCategoryScalarWhereInput | ChecklistCategoryScalarWhereInput[]
  }

  export type ChecklistItemCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ChecklistItemCreateWithoutCategoryInput, ChecklistItemUncheckedCreateWithoutCategoryInput> | ChecklistItemCreateWithoutCategoryInput[] | ChecklistItemUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ChecklistItemCreateOrConnectWithoutCategoryInput | ChecklistItemCreateOrConnectWithoutCategoryInput[]
    createMany?: ChecklistItemCreateManyCategoryInputEnvelope
    connect?: ChecklistItemWhereUniqueInput | ChecklistItemWhereUniqueInput[]
  }

  export type ChecklistCreateNestedOneWithoutCategoriesInput = {
    create?: XOR<ChecklistCreateWithoutCategoriesInput, ChecklistUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: ChecklistCreateOrConnectWithoutCategoriesInput
    connect?: ChecklistWhereUniqueInput
  }

  export type ChecklistItemUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ChecklistItemCreateWithoutCategoryInput, ChecklistItemUncheckedCreateWithoutCategoryInput> | ChecklistItemCreateWithoutCategoryInput[] | ChecklistItemUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ChecklistItemCreateOrConnectWithoutCategoryInput | ChecklistItemCreateOrConnectWithoutCategoryInput[]
    createMany?: ChecklistItemCreateManyCategoryInputEnvelope
    connect?: ChecklistItemWhereUniqueInput | ChecklistItemWhereUniqueInput[]
  }

  export type ChecklistItemUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ChecklistItemCreateWithoutCategoryInput, ChecklistItemUncheckedCreateWithoutCategoryInput> | ChecklistItemCreateWithoutCategoryInput[] | ChecklistItemUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ChecklistItemCreateOrConnectWithoutCategoryInput | ChecklistItemCreateOrConnectWithoutCategoryInput[]
    upsert?: ChecklistItemUpsertWithWhereUniqueWithoutCategoryInput | ChecklistItemUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ChecklistItemCreateManyCategoryInputEnvelope
    set?: ChecklistItemWhereUniqueInput | ChecklistItemWhereUniqueInput[]
    disconnect?: ChecklistItemWhereUniqueInput | ChecklistItemWhereUniqueInput[]
    delete?: ChecklistItemWhereUniqueInput | ChecklistItemWhereUniqueInput[]
    connect?: ChecklistItemWhereUniqueInput | ChecklistItemWhereUniqueInput[]
    update?: ChecklistItemUpdateWithWhereUniqueWithoutCategoryInput | ChecklistItemUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ChecklistItemUpdateManyWithWhereWithoutCategoryInput | ChecklistItemUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ChecklistItemScalarWhereInput | ChecklistItemScalarWhereInput[]
  }

  export type ChecklistUpdateOneRequiredWithoutCategoriesNestedInput = {
    create?: XOR<ChecklistCreateWithoutCategoriesInput, ChecklistUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: ChecklistCreateOrConnectWithoutCategoriesInput
    upsert?: ChecklistUpsertWithoutCategoriesInput
    connect?: ChecklistWhereUniqueInput
    update?: XOR<XOR<ChecklistUpdateToOneWithWhereWithoutCategoriesInput, ChecklistUpdateWithoutCategoriesInput>, ChecklistUncheckedUpdateWithoutCategoriesInput>
  }

  export type ChecklistItemUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ChecklistItemCreateWithoutCategoryInput, ChecklistItemUncheckedCreateWithoutCategoryInput> | ChecklistItemCreateWithoutCategoryInput[] | ChecklistItemUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ChecklistItemCreateOrConnectWithoutCategoryInput | ChecklistItemCreateOrConnectWithoutCategoryInput[]
    upsert?: ChecklistItemUpsertWithWhereUniqueWithoutCategoryInput | ChecklistItemUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ChecklistItemCreateManyCategoryInputEnvelope
    set?: ChecklistItemWhereUniqueInput | ChecklistItemWhereUniqueInput[]
    disconnect?: ChecklistItemWhereUniqueInput | ChecklistItemWhereUniqueInput[]
    delete?: ChecklistItemWhereUniqueInput | ChecklistItemWhereUniqueInput[]
    connect?: ChecklistItemWhereUniqueInput | ChecklistItemWhereUniqueInput[]
    update?: ChecklistItemUpdateWithWhereUniqueWithoutCategoryInput | ChecklistItemUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ChecklistItemUpdateManyWithWhereWithoutCategoryInput | ChecklistItemUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ChecklistItemScalarWhereInput | ChecklistItemScalarWhereInput[]
  }

  export type ChecklistCategoryCreateNestedOneWithoutItemsInput = {
    create?: XOR<ChecklistCategoryCreateWithoutItemsInput, ChecklistCategoryUncheckedCreateWithoutItemsInput>
    connectOrCreate?: ChecklistCategoryCreateOrConnectWithoutItemsInput
    connect?: ChecklistCategoryWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ChecklistCategoryUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<ChecklistCategoryCreateWithoutItemsInput, ChecklistCategoryUncheckedCreateWithoutItemsInput>
    connectOrCreate?: ChecklistCategoryCreateOrConnectWithoutItemsInput
    upsert?: ChecklistCategoryUpsertWithoutItemsInput
    connect?: ChecklistCategoryWhereUniqueInput
    update?: XOR<XOR<ChecklistCategoryUpdateToOneWithWhereWithoutItemsInput, ChecklistCategoryUpdateWithoutItemsInput>, ChecklistCategoryUncheckedUpdateWithoutItemsInput>
  }

  export type UserCreateNestedOneWithoutReviewsInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    connect?: UserWhereUniqueInput
  }

  export type DestinationCreateNestedOneWithoutReviewsInput = {
    create?: XOR<DestinationCreateWithoutReviewsInput, DestinationUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: DestinationCreateOrConnectWithoutReviewsInput
    connect?: DestinationWhereUniqueInput
  }

  export type ReviewLikeCreateNestedManyWithoutReviewInput = {
    create?: XOR<ReviewLikeCreateWithoutReviewInput, ReviewLikeUncheckedCreateWithoutReviewInput> | ReviewLikeCreateWithoutReviewInput[] | ReviewLikeUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: ReviewLikeCreateOrConnectWithoutReviewInput | ReviewLikeCreateOrConnectWithoutReviewInput[]
    createMany?: ReviewLikeCreateManyReviewInputEnvelope
    connect?: ReviewLikeWhereUniqueInput | ReviewLikeWhereUniqueInput[]
  }

  export type ReviewLikeUncheckedCreateNestedManyWithoutReviewInput = {
    create?: XOR<ReviewLikeCreateWithoutReviewInput, ReviewLikeUncheckedCreateWithoutReviewInput> | ReviewLikeCreateWithoutReviewInput[] | ReviewLikeUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: ReviewLikeCreateOrConnectWithoutReviewInput | ReviewLikeCreateOrConnectWithoutReviewInput[]
    createMany?: ReviewLikeCreateManyReviewInputEnvelope
    connect?: ReviewLikeWhereUniqueInput | ReviewLikeWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    upsert?: UserUpsertWithoutReviewsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewsInput, UserUpdateWithoutReviewsInput>, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type DestinationUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<DestinationCreateWithoutReviewsInput, DestinationUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: DestinationCreateOrConnectWithoutReviewsInput
    upsert?: DestinationUpsertWithoutReviewsInput
    connect?: DestinationWhereUniqueInput
    update?: XOR<XOR<DestinationUpdateToOneWithWhereWithoutReviewsInput, DestinationUpdateWithoutReviewsInput>, DestinationUncheckedUpdateWithoutReviewsInput>
  }

  export type ReviewLikeUpdateManyWithoutReviewNestedInput = {
    create?: XOR<ReviewLikeCreateWithoutReviewInput, ReviewLikeUncheckedCreateWithoutReviewInput> | ReviewLikeCreateWithoutReviewInput[] | ReviewLikeUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: ReviewLikeCreateOrConnectWithoutReviewInput | ReviewLikeCreateOrConnectWithoutReviewInput[]
    upsert?: ReviewLikeUpsertWithWhereUniqueWithoutReviewInput | ReviewLikeUpsertWithWhereUniqueWithoutReviewInput[]
    createMany?: ReviewLikeCreateManyReviewInputEnvelope
    set?: ReviewLikeWhereUniqueInput | ReviewLikeWhereUniqueInput[]
    disconnect?: ReviewLikeWhereUniqueInput | ReviewLikeWhereUniqueInput[]
    delete?: ReviewLikeWhereUniqueInput | ReviewLikeWhereUniqueInput[]
    connect?: ReviewLikeWhereUniqueInput | ReviewLikeWhereUniqueInput[]
    update?: ReviewLikeUpdateWithWhereUniqueWithoutReviewInput | ReviewLikeUpdateWithWhereUniqueWithoutReviewInput[]
    updateMany?: ReviewLikeUpdateManyWithWhereWithoutReviewInput | ReviewLikeUpdateManyWithWhereWithoutReviewInput[]
    deleteMany?: ReviewLikeScalarWhereInput | ReviewLikeScalarWhereInput[]
  }

  export type ReviewLikeUncheckedUpdateManyWithoutReviewNestedInput = {
    create?: XOR<ReviewLikeCreateWithoutReviewInput, ReviewLikeUncheckedCreateWithoutReviewInput> | ReviewLikeCreateWithoutReviewInput[] | ReviewLikeUncheckedCreateWithoutReviewInput[]
    connectOrCreate?: ReviewLikeCreateOrConnectWithoutReviewInput | ReviewLikeCreateOrConnectWithoutReviewInput[]
    upsert?: ReviewLikeUpsertWithWhereUniqueWithoutReviewInput | ReviewLikeUpsertWithWhereUniqueWithoutReviewInput[]
    createMany?: ReviewLikeCreateManyReviewInputEnvelope
    set?: ReviewLikeWhereUniqueInput | ReviewLikeWhereUniqueInput[]
    disconnect?: ReviewLikeWhereUniqueInput | ReviewLikeWhereUniqueInput[]
    delete?: ReviewLikeWhereUniqueInput | ReviewLikeWhereUniqueInput[]
    connect?: ReviewLikeWhereUniqueInput | ReviewLikeWhereUniqueInput[]
    update?: ReviewLikeUpdateWithWhereUniqueWithoutReviewInput | ReviewLikeUpdateWithWhereUniqueWithoutReviewInput[]
    updateMany?: ReviewLikeUpdateManyWithWhereWithoutReviewInput | ReviewLikeUpdateManyWithWhereWithoutReviewInput[]
    deleteMany?: ReviewLikeScalarWhereInput | ReviewLikeScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutReviewLikesInput = {
    create?: XOR<UserCreateWithoutReviewLikesInput, UserUncheckedCreateWithoutReviewLikesInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewLikesInput
    connect?: UserWhereUniqueInput
  }

  export type ReviewCreateNestedOneWithoutLikesInput = {
    create?: XOR<ReviewCreateWithoutLikesInput, ReviewUncheckedCreateWithoutLikesInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutLikesInput
    connect?: ReviewWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutReviewLikesNestedInput = {
    create?: XOR<UserCreateWithoutReviewLikesInput, UserUncheckedCreateWithoutReviewLikesInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewLikesInput
    upsert?: UserUpsertWithoutReviewLikesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewLikesInput, UserUpdateWithoutReviewLikesInput>, UserUncheckedUpdateWithoutReviewLikesInput>
  }

  export type ReviewUpdateOneRequiredWithoutLikesNestedInput = {
    create?: XOR<ReviewCreateWithoutLikesInput, ReviewUncheckedCreateWithoutLikesInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutLikesInput
    upsert?: ReviewUpsertWithoutLikesInput
    connect?: ReviewWhereUniqueInput
    update?: XOR<XOR<ReviewUpdateToOneWithWhereWithoutLikesInput, ReviewUpdateWithoutLikesInput>, ReviewUncheckedUpdateWithoutLikesInput>
  }

  export type UserCreateNestedOneWithoutUserVoyagesInput = {
    create?: XOR<UserCreateWithoutUserVoyagesInput, UserUncheckedCreateWithoutUserVoyagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserVoyagesInput
    connect?: UserWhereUniqueInput
  }

  export type DestinationCreateNestedOneWithoutUserVoyagesInput = {
    create?: XOR<DestinationCreateWithoutUserVoyagesInput, DestinationUncheckedCreateWithoutUserVoyagesInput>
    connectOrCreate?: DestinationCreateOrConnectWithoutUserVoyagesInput
    connect?: DestinationWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserVoyagesNestedInput = {
    create?: XOR<UserCreateWithoutUserVoyagesInput, UserUncheckedCreateWithoutUserVoyagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserVoyagesInput
    upsert?: UserUpsertWithoutUserVoyagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserVoyagesInput, UserUpdateWithoutUserVoyagesInput>, UserUncheckedUpdateWithoutUserVoyagesInput>
  }

  export type DestinationUpdateOneRequiredWithoutUserVoyagesNestedInput = {
    create?: XOR<DestinationCreateWithoutUserVoyagesInput, DestinationUncheckedCreateWithoutUserVoyagesInput>
    connectOrCreate?: DestinationCreateOrConnectWithoutUserVoyagesInput
    upsert?: DestinationUpsertWithoutUserVoyagesInput
    connect?: DestinationWhereUniqueInput
    update?: XOR<XOR<DestinationUpdateToOneWithWhereWithoutUserVoyagesInput, DestinationUpdateWithoutUserVoyagesInput>, DestinationUncheckedUpdateWithoutUserVoyagesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumSectionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.SectionType | EnumSectionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SectionType[]
    notIn?: $Enums.SectionType[]
    not?: NestedEnumSectionTypeFilter<$PrismaModel> | $Enums.SectionType
  }

  export type NestedEnumSectionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SectionType | EnumSectionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.SectionType[]
    notIn?: $Enums.SectionType[]
    not?: NestedEnumSectionTypeWithAggregatesFilter<$PrismaModel> | $Enums.SectionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSectionTypeFilter<$PrismaModel>
    _max?: NestedEnumSectionTypeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DestinationCreateWithoutUtilisateurInput = {
    id?: string
    titre: string
    pays: string
    continent?: string | null
    description?: string | null
    imagePrincipale?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sections?: SectionCreateNestedManyWithoutDestinationInput
    checklists?: ChecklistCreateNestedManyWithoutVoyageInput
    reviews?: ReviewCreateNestedManyWithoutDestinationInput
    userVoyages?: UserVoyageCreateNestedManyWithoutDestinationInput
  }

  export type DestinationUncheckedCreateWithoutUtilisateurInput = {
    id?: string
    titre: string
    pays: string
    continent?: string | null
    description?: string | null
    imagePrincipale?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sections?: SectionUncheckedCreateNestedManyWithoutDestinationInput
    checklists?: ChecklistUncheckedCreateNestedManyWithoutVoyageInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutDestinationInput
    userVoyages?: UserVoyageUncheckedCreateNestedManyWithoutDestinationInput
  }

  export type DestinationCreateOrConnectWithoutUtilisateurInput = {
    where: DestinationWhereUniqueInput
    create: XOR<DestinationCreateWithoutUtilisateurInput, DestinationUncheckedCreateWithoutUtilisateurInput>
  }

  export type DestinationCreateManyUtilisateurInputEnvelope = {
    data: DestinationCreateManyUtilisateurInput | DestinationCreateManyUtilisateurInput[]
    skipDuplicates?: boolean
  }

  export type ChecklistCreateWithoutUserInput = {
    id?: string
    titre: string
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: ChecklistCategoryCreateNestedManyWithoutChecklistInput
    voyage: DestinationCreateNestedOneWithoutChecklistsInput
  }

  export type ChecklistUncheckedCreateWithoutUserInput = {
    id?: string
    titre: string
    voyageId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: ChecklistCategoryUncheckedCreateNestedManyWithoutChecklistInput
  }

  export type ChecklistCreateOrConnectWithoutUserInput = {
    where: ChecklistWhereUniqueInput
    create: XOR<ChecklistCreateWithoutUserInput, ChecklistUncheckedCreateWithoutUserInput>
  }

  export type ChecklistCreateManyUserInputEnvelope = {
    data: ChecklistCreateManyUserInput | ChecklistCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutUserInput = {
    id?: string
    rating: number
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    destination: DestinationCreateNestedOneWithoutReviewsInput
    likes?: ReviewLikeCreateNestedManyWithoutReviewInput
  }

  export type ReviewUncheckedCreateWithoutUserInput = {
    id?: string
    destinationId: string
    rating: number
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    likes?: ReviewLikeUncheckedCreateNestedManyWithoutReviewInput
  }

  export type ReviewCreateOrConnectWithoutUserInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
  }

  export type ReviewCreateManyUserInputEnvelope = {
    data: ReviewCreateManyUserInput | ReviewCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReviewLikeCreateWithoutUserInput = {
    id?: string
    review: ReviewCreateNestedOneWithoutLikesInput
  }

  export type ReviewLikeUncheckedCreateWithoutUserInput = {
    id?: string
    reviewId: string
  }

  export type ReviewLikeCreateOrConnectWithoutUserInput = {
    where: ReviewLikeWhereUniqueInput
    create: XOR<ReviewLikeCreateWithoutUserInput, ReviewLikeUncheckedCreateWithoutUserInput>
  }

  export type ReviewLikeCreateManyUserInputEnvelope = {
    data: ReviewLikeCreateManyUserInput | ReviewLikeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserVoyageCreateWithoutUserInput = {
    createdAt?: Date | string
    destination: DestinationCreateNestedOneWithoutUserVoyagesInput
  }

  export type UserVoyageUncheckedCreateWithoutUserInput = {
    id?: number
    destinationId: string
    createdAt?: Date | string
  }

  export type UserVoyageCreateOrConnectWithoutUserInput = {
    where: UserVoyageWhereUniqueInput
    create: XOR<UserVoyageCreateWithoutUserInput, UserVoyageUncheckedCreateWithoutUserInput>
  }

  export type UserVoyageCreateManyUserInputEnvelope = {
    data: UserVoyageCreateManyUserInput | UserVoyageCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DestinationUpsertWithWhereUniqueWithoutUtilisateurInput = {
    where: DestinationWhereUniqueInput
    update: XOR<DestinationUpdateWithoutUtilisateurInput, DestinationUncheckedUpdateWithoutUtilisateurInput>
    create: XOR<DestinationCreateWithoutUtilisateurInput, DestinationUncheckedCreateWithoutUtilisateurInput>
  }

  export type DestinationUpdateWithWhereUniqueWithoutUtilisateurInput = {
    where: DestinationWhereUniqueInput
    data: XOR<DestinationUpdateWithoutUtilisateurInput, DestinationUncheckedUpdateWithoutUtilisateurInput>
  }

  export type DestinationUpdateManyWithWhereWithoutUtilisateurInput = {
    where: DestinationScalarWhereInput
    data: XOR<DestinationUpdateManyMutationInput, DestinationUncheckedUpdateManyWithoutUtilisateurInput>
  }

  export type DestinationScalarWhereInput = {
    AND?: DestinationScalarWhereInput | DestinationScalarWhereInput[]
    OR?: DestinationScalarWhereInput[]
    NOT?: DestinationScalarWhereInput | DestinationScalarWhereInput[]
    id?: StringFilter<"Destination"> | string
    titre?: StringFilter<"Destination"> | string
    pays?: StringFilter<"Destination"> | string
    continent?: StringNullableFilter<"Destination"> | string | null
    description?: StringNullableFilter<"Destination"> | string | null
    imagePrincipale?: StringNullableFilter<"Destination"> | string | null
    createdAt?: DateTimeFilter<"Destination"> | Date | string
    updatedAt?: DateTimeFilter<"Destination"> | Date | string
    utilisateurId?: IntNullableFilter<"Destination"> | number | null
  }

  export type ChecklistUpsertWithWhereUniqueWithoutUserInput = {
    where: ChecklistWhereUniqueInput
    update: XOR<ChecklistUpdateWithoutUserInput, ChecklistUncheckedUpdateWithoutUserInput>
    create: XOR<ChecklistCreateWithoutUserInput, ChecklistUncheckedCreateWithoutUserInput>
  }

  export type ChecklistUpdateWithWhereUniqueWithoutUserInput = {
    where: ChecklistWhereUniqueInput
    data: XOR<ChecklistUpdateWithoutUserInput, ChecklistUncheckedUpdateWithoutUserInput>
  }

  export type ChecklistUpdateManyWithWhereWithoutUserInput = {
    where: ChecklistScalarWhereInput
    data: XOR<ChecklistUpdateManyMutationInput, ChecklistUncheckedUpdateManyWithoutUserInput>
  }

  export type ChecklistScalarWhereInput = {
    AND?: ChecklistScalarWhereInput | ChecklistScalarWhereInput[]
    OR?: ChecklistScalarWhereInput[]
    NOT?: ChecklistScalarWhereInput | ChecklistScalarWhereInput[]
    id?: StringFilter<"Checklist"> | string
    titre?: StringFilter<"Checklist"> | string
    userId?: IntFilter<"Checklist"> | number
    voyageId?: StringFilter<"Checklist"> | string
    createdAt?: DateTimeFilter<"Checklist"> | Date | string
    updatedAt?: DateTimeFilter<"Checklist"> | Date | string
  }

  export type ReviewUpsertWithWhereUniqueWithoutUserInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutUserInput, ReviewUncheckedUpdateWithoutUserInput>
    create: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutUserInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutUserInput, ReviewUncheckedUpdateWithoutUserInput>
  }

  export type ReviewUpdateManyWithWhereWithoutUserInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutUserInput>
  }

  export type ReviewScalarWhereInput = {
    AND?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    OR?: ReviewScalarWhereInput[]
    NOT?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    id?: StringFilter<"Review"> | string
    userId?: IntFilter<"Review"> | number
    destinationId?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    content?: StringFilter<"Review"> | string
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
  }

  export type ReviewLikeUpsertWithWhereUniqueWithoutUserInput = {
    where: ReviewLikeWhereUniqueInput
    update: XOR<ReviewLikeUpdateWithoutUserInput, ReviewLikeUncheckedUpdateWithoutUserInput>
    create: XOR<ReviewLikeCreateWithoutUserInput, ReviewLikeUncheckedCreateWithoutUserInput>
  }

  export type ReviewLikeUpdateWithWhereUniqueWithoutUserInput = {
    where: ReviewLikeWhereUniqueInput
    data: XOR<ReviewLikeUpdateWithoutUserInput, ReviewLikeUncheckedUpdateWithoutUserInput>
  }

  export type ReviewLikeUpdateManyWithWhereWithoutUserInput = {
    where: ReviewLikeScalarWhereInput
    data: XOR<ReviewLikeUpdateManyMutationInput, ReviewLikeUncheckedUpdateManyWithoutUserInput>
  }

  export type ReviewLikeScalarWhereInput = {
    AND?: ReviewLikeScalarWhereInput | ReviewLikeScalarWhereInput[]
    OR?: ReviewLikeScalarWhereInput[]
    NOT?: ReviewLikeScalarWhereInput | ReviewLikeScalarWhereInput[]
    id?: StringFilter<"ReviewLike"> | string
    userId?: IntFilter<"ReviewLike"> | number
    reviewId?: StringFilter<"ReviewLike"> | string
  }

  export type UserVoyageUpsertWithWhereUniqueWithoutUserInput = {
    where: UserVoyageWhereUniqueInput
    update: XOR<UserVoyageUpdateWithoutUserInput, UserVoyageUncheckedUpdateWithoutUserInput>
    create: XOR<UserVoyageCreateWithoutUserInput, UserVoyageUncheckedCreateWithoutUserInput>
  }

  export type UserVoyageUpdateWithWhereUniqueWithoutUserInput = {
    where: UserVoyageWhereUniqueInput
    data: XOR<UserVoyageUpdateWithoutUserInput, UserVoyageUncheckedUpdateWithoutUserInput>
  }

  export type UserVoyageUpdateManyWithWhereWithoutUserInput = {
    where: UserVoyageScalarWhereInput
    data: XOR<UserVoyageUpdateManyMutationInput, UserVoyageUncheckedUpdateManyWithoutUserInput>
  }

  export type UserVoyageScalarWhereInput = {
    AND?: UserVoyageScalarWhereInput | UserVoyageScalarWhereInput[]
    OR?: UserVoyageScalarWhereInput[]
    NOT?: UserVoyageScalarWhereInput | UserVoyageScalarWhereInput[]
    id?: IntFilter<"UserVoyage"> | number
    userId?: IntFilter<"UserVoyage"> | number
    destinationId?: StringFilter<"UserVoyage"> | string
    createdAt?: DateTimeFilter<"UserVoyage"> | Date | string
  }

  export type SectionCreateWithoutDestinationInput = {
    id?: string
    titre: string
    contenu?: string | null
    ordre: number
    type: $Enums.SectionType
    updatedAt?: Date | string
    bulletPoints?: BulletPointCreateNestedManyWithoutSectionInput
    groupedPoints?: GroupedBulletPointCreateNestedManyWithoutSectionInput
    images?: ImageCreateNestedManyWithoutSectionInput
  }

  export type SectionUncheckedCreateWithoutDestinationInput = {
    id?: string
    titre: string
    contenu?: string | null
    ordre: number
    type: $Enums.SectionType
    updatedAt?: Date | string
    bulletPoints?: BulletPointUncheckedCreateNestedManyWithoutSectionInput
    groupedPoints?: GroupedBulletPointUncheckedCreateNestedManyWithoutSectionInput
    images?: ImageUncheckedCreateNestedManyWithoutSectionInput
  }

  export type SectionCreateOrConnectWithoutDestinationInput = {
    where: SectionWhereUniqueInput
    create: XOR<SectionCreateWithoutDestinationInput, SectionUncheckedCreateWithoutDestinationInput>
  }

  export type SectionCreateManyDestinationInputEnvelope = {
    data: SectionCreateManyDestinationInput | SectionCreateManyDestinationInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutVoyagesInput = {
    nom: string
    prenom: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    bio?: string | null
    instagram?: string | null
    facebook?: string | null
    youtube?: string | null
    isPublic?: boolean
    adventurerType?: string | null
    avatar?: string | null
    coverImage?: string | null
    checklists?: ChecklistCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    reviewLikes?: ReviewLikeCreateNestedManyWithoutUserInput
    userVoyages?: UserVoyageCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutVoyagesInput = {
    id?: number
    nom: string
    prenom: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    bio?: string | null
    instagram?: string | null
    facebook?: string | null
    youtube?: string | null
    isPublic?: boolean
    adventurerType?: string | null
    avatar?: string | null
    coverImage?: string | null
    checklists?: ChecklistUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    reviewLikes?: ReviewLikeUncheckedCreateNestedManyWithoutUserInput
    userVoyages?: UserVoyageUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutVoyagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVoyagesInput, UserUncheckedCreateWithoutVoyagesInput>
  }

  export type ChecklistCreateWithoutVoyageInput = {
    id?: string
    titre: string
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: ChecklistCategoryCreateNestedManyWithoutChecklistInput
    user: UserCreateNestedOneWithoutChecklistsInput
  }

  export type ChecklistUncheckedCreateWithoutVoyageInput = {
    id?: string
    titre: string
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: ChecklistCategoryUncheckedCreateNestedManyWithoutChecklistInput
  }

  export type ChecklistCreateOrConnectWithoutVoyageInput = {
    where: ChecklistWhereUniqueInput
    create: XOR<ChecklistCreateWithoutVoyageInput, ChecklistUncheckedCreateWithoutVoyageInput>
  }

  export type ChecklistCreateManyVoyageInputEnvelope = {
    data: ChecklistCreateManyVoyageInput | ChecklistCreateManyVoyageInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutDestinationInput = {
    id?: string
    rating: number
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutReviewsInput
    likes?: ReviewLikeCreateNestedManyWithoutReviewInput
  }

  export type ReviewUncheckedCreateWithoutDestinationInput = {
    id?: string
    userId: number
    rating: number
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    likes?: ReviewLikeUncheckedCreateNestedManyWithoutReviewInput
  }

  export type ReviewCreateOrConnectWithoutDestinationInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutDestinationInput, ReviewUncheckedCreateWithoutDestinationInput>
  }

  export type ReviewCreateManyDestinationInputEnvelope = {
    data: ReviewCreateManyDestinationInput | ReviewCreateManyDestinationInput[]
    skipDuplicates?: boolean
  }

  export type UserVoyageCreateWithoutDestinationInput = {
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutUserVoyagesInput
  }

  export type UserVoyageUncheckedCreateWithoutDestinationInput = {
    id?: number
    userId: number
    createdAt?: Date | string
  }

  export type UserVoyageCreateOrConnectWithoutDestinationInput = {
    where: UserVoyageWhereUniqueInput
    create: XOR<UserVoyageCreateWithoutDestinationInput, UserVoyageUncheckedCreateWithoutDestinationInput>
  }

  export type UserVoyageCreateManyDestinationInputEnvelope = {
    data: UserVoyageCreateManyDestinationInput | UserVoyageCreateManyDestinationInput[]
    skipDuplicates?: boolean
  }

  export type SectionUpsertWithWhereUniqueWithoutDestinationInput = {
    where: SectionWhereUniqueInput
    update: XOR<SectionUpdateWithoutDestinationInput, SectionUncheckedUpdateWithoutDestinationInput>
    create: XOR<SectionCreateWithoutDestinationInput, SectionUncheckedCreateWithoutDestinationInput>
  }

  export type SectionUpdateWithWhereUniqueWithoutDestinationInput = {
    where: SectionWhereUniqueInput
    data: XOR<SectionUpdateWithoutDestinationInput, SectionUncheckedUpdateWithoutDestinationInput>
  }

  export type SectionUpdateManyWithWhereWithoutDestinationInput = {
    where: SectionScalarWhereInput
    data: XOR<SectionUpdateManyMutationInput, SectionUncheckedUpdateManyWithoutDestinationInput>
  }

  export type SectionScalarWhereInput = {
    AND?: SectionScalarWhereInput | SectionScalarWhereInput[]
    OR?: SectionScalarWhereInput[]
    NOT?: SectionScalarWhereInput | SectionScalarWhereInput[]
    id?: StringFilter<"Section"> | string
    titre?: StringFilter<"Section"> | string
    contenu?: StringNullableFilter<"Section"> | string | null
    ordre?: IntFilter<"Section"> | number
    type?: EnumSectionTypeFilter<"Section"> | $Enums.SectionType
    destinationId?: StringFilter<"Section"> | string
    updatedAt?: DateTimeFilter<"Section"> | Date | string
  }

  export type UserUpsertWithoutVoyagesInput = {
    update: XOR<UserUpdateWithoutVoyagesInput, UserUncheckedUpdateWithoutVoyagesInput>
    create: XOR<UserCreateWithoutVoyagesInput, UserUncheckedCreateWithoutVoyagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVoyagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVoyagesInput, UserUncheckedUpdateWithoutVoyagesInput>
  }

  export type UserUpdateWithoutVoyagesInput = {
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    youtube?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    adventurerType?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    checklists?: ChecklistUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    reviewLikes?: ReviewLikeUpdateManyWithoutUserNestedInput
    userVoyages?: UserVoyageUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutVoyagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    youtube?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    adventurerType?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    checklists?: ChecklistUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    reviewLikes?: ReviewLikeUncheckedUpdateManyWithoutUserNestedInput
    userVoyages?: UserVoyageUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ChecklistUpsertWithWhereUniqueWithoutVoyageInput = {
    where: ChecklistWhereUniqueInput
    update: XOR<ChecklistUpdateWithoutVoyageInput, ChecklistUncheckedUpdateWithoutVoyageInput>
    create: XOR<ChecklistCreateWithoutVoyageInput, ChecklistUncheckedCreateWithoutVoyageInput>
  }

  export type ChecklistUpdateWithWhereUniqueWithoutVoyageInput = {
    where: ChecklistWhereUniqueInput
    data: XOR<ChecklistUpdateWithoutVoyageInput, ChecklistUncheckedUpdateWithoutVoyageInput>
  }

  export type ChecklistUpdateManyWithWhereWithoutVoyageInput = {
    where: ChecklistScalarWhereInput
    data: XOR<ChecklistUpdateManyMutationInput, ChecklistUncheckedUpdateManyWithoutVoyageInput>
  }

  export type ReviewUpsertWithWhereUniqueWithoutDestinationInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutDestinationInput, ReviewUncheckedUpdateWithoutDestinationInput>
    create: XOR<ReviewCreateWithoutDestinationInput, ReviewUncheckedCreateWithoutDestinationInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutDestinationInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutDestinationInput, ReviewUncheckedUpdateWithoutDestinationInput>
  }

  export type ReviewUpdateManyWithWhereWithoutDestinationInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutDestinationInput>
  }

  export type UserVoyageUpsertWithWhereUniqueWithoutDestinationInput = {
    where: UserVoyageWhereUniqueInput
    update: XOR<UserVoyageUpdateWithoutDestinationInput, UserVoyageUncheckedUpdateWithoutDestinationInput>
    create: XOR<UserVoyageCreateWithoutDestinationInput, UserVoyageUncheckedCreateWithoutDestinationInput>
  }

  export type UserVoyageUpdateWithWhereUniqueWithoutDestinationInput = {
    where: UserVoyageWhereUniqueInput
    data: XOR<UserVoyageUpdateWithoutDestinationInput, UserVoyageUncheckedUpdateWithoutDestinationInput>
  }

  export type UserVoyageUpdateManyWithWhereWithoutDestinationInput = {
    where: UserVoyageScalarWhereInput
    data: XOR<UserVoyageUpdateManyMutationInput, UserVoyageUncheckedUpdateManyWithoutDestinationInput>
  }

  export type BulletPointCreateWithoutSectionInput = {
    id?: string
    contenu?: string | null
    ordre: number
  }

  export type BulletPointUncheckedCreateWithoutSectionInput = {
    id?: string
    contenu?: string | null
    ordre: number
  }

  export type BulletPointCreateOrConnectWithoutSectionInput = {
    where: BulletPointWhereUniqueInput
    create: XOR<BulletPointCreateWithoutSectionInput, BulletPointUncheckedCreateWithoutSectionInput>
  }

  export type BulletPointCreateManySectionInputEnvelope = {
    data: BulletPointCreateManySectionInput | BulletPointCreateManySectionInput[]
    skipDuplicates?: boolean
  }

  export type GroupedBulletPointCreateWithoutSectionInput = {
    id?: string
    titre: string
    ordre: number
    contents?: BulletPointContentCreateNestedManyWithoutGroupInput
  }

  export type GroupedBulletPointUncheckedCreateWithoutSectionInput = {
    id?: string
    titre: string
    ordre: number
    contents?: BulletPointContentUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupedBulletPointCreateOrConnectWithoutSectionInput = {
    where: GroupedBulletPointWhereUniqueInput
    create: XOR<GroupedBulletPointCreateWithoutSectionInput, GroupedBulletPointUncheckedCreateWithoutSectionInput>
  }

  export type GroupedBulletPointCreateManySectionInputEnvelope = {
    data: GroupedBulletPointCreateManySectionInput | GroupedBulletPointCreateManySectionInput[]
    skipDuplicates?: boolean
  }

  export type ImageCreateWithoutSectionInput = {
    id?: string
    url: string
    alt?: string | null
  }

  export type ImageUncheckedCreateWithoutSectionInput = {
    id?: string
    url: string
    alt?: string | null
  }

  export type ImageCreateOrConnectWithoutSectionInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutSectionInput, ImageUncheckedCreateWithoutSectionInput>
  }

  export type ImageCreateManySectionInputEnvelope = {
    data: ImageCreateManySectionInput | ImageCreateManySectionInput[]
    skipDuplicates?: boolean
  }

  export type DestinationCreateWithoutSectionsInput = {
    id?: string
    titre: string
    pays: string
    continent?: string | null
    description?: string | null
    imagePrincipale?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    utilisateur?: UserCreateNestedOneWithoutVoyagesInput
    checklists?: ChecklistCreateNestedManyWithoutVoyageInput
    reviews?: ReviewCreateNestedManyWithoutDestinationInput
    userVoyages?: UserVoyageCreateNestedManyWithoutDestinationInput
  }

  export type DestinationUncheckedCreateWithoutSectionsInput = {
    id?: string
    titre: string
    pays: string
    continent?: string | null
    description?: string | null
    imagePrincipale?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    utilisateurId?: number | null
    checklists?: ChecklistUncheckedCreateNestedManyWithoutVoyageInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutDestinationInput
    userVoyages?: UserVoyageUncheckedCreateNestedManyWithoutDestinationInput
  }

  export type DestinationCreateOrConnectWithoutSectionsInput = {
    where: DestinationWhereUniqueInput
    create: XOR<DestinationCreateWithoutSectionsInput, DestinationUncheckedCreateWithoutSectionsInput>
  }

  export type BulletPointUpsertWithWhereUniqueWithoutSectionInput = {
    where: BulletPointWhereUniqueInput
    update: XOR<BulletPointUpdateWithoutSectionInput, BulletPointUncheckedUpdateWithoutSectionInput>
    create: XOR<BulletPointCreateWithoutSectionInput, BulletPointUncheckedCreateWithoutSectionInput>
  }

  export type BulletPointUpdateWithWhereUniqueWithoutSectionInput = {
    where: BulletPointWhereUniqueInput
    data: XOR<BulletPointUpdateWithoutSectionInput, BulletPointUncheckedUpdateWithoutSectionInput>
  }

  export type BulletPointUpdateManyWithWhereWithoutSectionInput = {
    where: BulletPointScalarWhereInput
    data: XOR<BulletPointUpdateManyMutationInput, BulletPointUncheckedUpdateManyWithoutSectionInput>
  }

  export type BulletPointScalarWhereInput = {
    AND?: BulletPointScalarWhereInput | BulletPointScalarWhereInput[]
    OR?: BulletPointScalarWhereInput[]
    NOT?: BulletPointScalarWhereInput | BulletPointScalarWhereInput[]
    id?: StringFilter<"BulletPoint"> | string
    contenu?: StringNullableFilter<"BulletPoint"> | string | null
    ordre?: IntFilter<"BulletPoint"> | number
    sectionId?: StringFilter<"BulletPoint"> | string
  }

  export type GroupedBulletPointUpsertWithWhereUniqueWithoutSectionInput = {
    where: GroupedBulletPointWhereUniqueInput
    update: XOR<GroupedBulletPointUpdateWithoutSectionInput, GroupedBulletPointUncheckedUpdateWithoutSectionInput>
    create: XOR<GroupedBulletPointCreateWithoutSectionInput, GroupedBulletPointUncheckedCreateWithoutSectionInput>
  }

  export type GroupedBulletPointUpdateWithWhereUniqueWithoutSectionInput = {
    where: GroupedBulletPointWhereUniqueInput
    data: XOR<GroupedBulletPointUpdateWithoutSectionInput, GroupedBulletPointUncheckedUpdateWithoutSectionInput>
  }

  export type GroupedBulletPointUpdateManyWithWhereWithoutSectionInput = {
    where: GroupedBulletPointScalarWhereInput
    data: XOR<GroupedBulletPointUpdateManyMutationInput, GroupedBulletPointUncheckedUpdateManyWithoutSectionInput>
  }

  export type GroupedBulletPointScalarWhereInput = {
    AND?: GroupedBulletPointScalarWhereInput | GroupedBulletPointScalarWhereInput[]
    OR?: GroupedBulletPointScalarWhereInput[]
    NOT?: GroupedBulletPointScalarWhereInput | GroupedBulletPointScalarWhereInput[]
    id?: StringFilter<"GroupedBulletPoint"> | string
    titre?: StringFilter<"GroupedBulletPoint"> | string
    ordre?: IntFilter<"GroupedBulletPoint"> | number
    sectionId?: StringFilter<"GroupedBulletPoint"> | string
  }

  export type ImageUpsertWithWhereUniqueWithoutSectionInput = {
    where: ImageWhereUniqueInput
    update: XOR<ImageUpdateWithoutSectionInput, ImageUncheckedUpdateWithoutSectionInput>
    create: XOR<ImageCreateWithoutSectionInput, ImageUncheckedCreateWithoutSectionInput>
  }

  export type ImageUpdateWithWhereUniqueWithoutSectionInput = {
    where: ImageWhereUniqueInput
    data: XOR<ImageUpdateWithoutSectionInput, ImageUncheckedUpdateWithoutSectionInput>
  }

  export type ImageUpdateManyWithWhereWithoutSectionInput = {
    where: ImageScalarWhereInput
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyWithoutSectionInput>
  }

  export type ImageScalarWhereInput = {
    AND?: ImageScalarWhereInput | ImageScalarWhereInput[]
    OR?: ImageScalarWhereInput[]
    NOT?: ImageScalarWhereInput | ImageScalarWhereInput[]
    id?: StringFilter<"Image"> | string
    url?: StringFilter<"Image"> | string
    alt?: StringNullableFilter<"Image"> | string | null
    sectionId?: StringFilter<"Image"> | string
  }

  export type DestinationUpsertWithoutSectionsInput = {
    update: XOR<DestinationUpdateWithoutSectionsInput, DestinationUncheckedUpdateWithoutSectionsInput>
    create: XOR<DestinationCreateWithoutSectionsInput, DestinationUncheckedCreateWithoutSectionsInput>
    where?: DestinationWhereInput
  }

  export type DestinationUpdateToOneWithWhereWithoutSectionsInput = {
    where?: DestinationWhereInput
    data: XOR<DestinationUpdateWithoutSectionsInput, DestinationUncheckedUpdateWithoutSectionsInput>
  }

  export type DestinationUpdateWithoutSectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    pays?: StringFieldUpdateOperationsInput | string
    continent?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imagePrincipale?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    utilisateur?: UserUpdateOneWithoutVoyagesNestedInput
    checklists?: ChecklistUpdateManyWithoutVoyageNestedInput
    reviews?: ReviewUpdateManyWithoutDestinationNestedInput
    userVoyages?: UserVoyageUpdateManyWithoutDestinationNestedInput
  }

  export type DestinationUncheckedUpdateWithoutSectionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    pays?: StringFieldUpdateOperationsInput | string
    continent?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imagePrincipale?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    utilisateurId?: NullableIntFieldUpdateOperationsInput | number | null
    checklists?: ChecklistUncheckedUpdateManyWithoutVoyageNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutDestinationNestedInput
    userVoyages?: UserVoyageUncheckedUpdateManyWithoutDestinationNestedInput
  }

  export type SectionCreateWithoutBulletPointsInput = {
    id?: string
    titre: string
    contenu?: string | null
    ordre: number
    type: $Enums.SectionType
    updatedAt?: Date | string
    groupedPoints?: GroupedBulletPointCreateNestedManyWithoutSectionInput
    images?: ImageCreateNestedManyWithoutSectionInput
    destination: DestinationCreateNestedOneWithoutSectionsInput
  }

  export type SectionUncheckedCreateWithoutBulletPointsInput = {
    id?: string
    titre: string
    contenu?: string | null
    ordre: number
    type: $Enums.SectionType
    destinationId: string
    updatedAt?: Date | string
    groupedPoints?: GroupedBulletPointUncheckedCreateNestedManyWithoutSectionInput
    images?: ImageUncheckedCreateNestedManyWithoutSectionInput
  }

  export type SectionCreateOrConnectWithoutBulletPointsInput = {
    where: SectionWhereUniqueInput
    create: XOR<SectionCreateWithoutBulletPointsInput, SectionUncheckedCreateWithoutBulletPointsInput>
  }

  export type SectionUpsertWithoutBulletPointsInput = {
    update: XOR<SectionUpdateWithoutBulletPointsInput, SectionUncheckedUpdateWithoutBulletPointsInput>
    create: XOR<SectionCreateWithoutBulletPointsInput, SectionUncheckedCreateWithoutBulletPointsInput>
    where?: SectionWhereInput
  }

  export type SectionUpdateToOneWithWhereWithoutBulletPointsInput = {
    where?: SectionWhereInput
    data: XOR<SectionUpdateWithoutBulletPointsInput, SectionUncheckedUpdateWithoutBulletPointsInput>
  }

  export type SectionUpdateWithoutBulletPointsInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    contenu?: NullableStringFieldUpdateOperationsInput | string | null
    ordre?: IntFieldUpdateOperationsInput | number
    type?: EnumSectionTypeFieldUpdateOperationsInput | $Enums.SectionType
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupedPoints?: GroupedBulletPointUpdateManyWithoutSectionNestedInput
    images?: ImageUpdateManyWithoutSectionNestedInput
    destination?: DestinationUpdateOneRequiredWithoutSectionsNestedInput
  }

  export type SectionUncheckedUpdateWithoutBulletPointsInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    contenu?: NullableStringFieldUpdateOperationsInput | string | null
    ordre?: IntFieldUpdateOperationsInput | number
    type?: EnumSectionTypeFieldUpdateOperationsInput | $Enums.SectionType
    destinationId?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groupedPoints?: GroupedBulletPointUncheckedUpdateManyWithoutSectionNestedInput
    images?: ImageUncheckedUpdateManyWithoutSectionNestedInput
  }

  export type SectionCreateWithoutGroupedPointsInput = {
    id?: string
    titre: string
    contenu?: string | null
    ordre: number
    type: $Enums.SectionType
    updatedAt?: Date | string
    bulletPoints?: BulletPointCreateNestedManyWithoutSectionInput
    images?: ImageCreateNestedManyWithoutSectionInput
    destination: DestinationCreateNestedOneWithoutSectionsInput
  }

  export type SectionUncheckedCreateWithoutGroupedPointsInput = {
    id?: string
    titre: string
    contenu?: string | null
    ordre: number
    type: $Enums.SectionType
    destinationId: string
    updatedAt?: Date | string
    bulletPoints?: BulletPointUncheckedCreateNestedManyWithoutSectionInput
    images?: ImageUncheckedCreateNestedManyWithoutSectionInput
  }

  export type SectionCreateOrConnectWithoutGroupedPointsInput = {
    where: SectionWhereUniqueInput
    create: XOR<SectionCreateWithoutGroupedPointsInput, SectionUncheckedCreateWithoutGroupedPointsInput>
  }

  export type BulletPointContentCreateWithoutGroupInput = {
    id?: string
    contenu?: string | null
    ordre: number
  }

  export type BulletPointContentUncheckedCreateWithoutGroupInput = {
    id?: string
    contenu?: string | null
    ordre: number
  }

  export type BulletPointContentCreateOrConnectWithoutGroupInput = {
    where: BulletPointContentWhereUniqueInput
    create: XOR<BulletPointContentCreateWithoutGroupInput, BulletPointContentUncheckedCreateWithoutGroupInput>
  }

  export type BulletPointContentCreateManyGroupInputEnvelope = {
    data: BulletPointContentCreateManyGroupInput | BulletPointContentCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type SectionUpsertWithoutGroupedPointsInput = {
    update: XOR<SectionUpdateWithoutGroupedPointsInput, SectionUncheckedUpdateWithoutGroupedPointsInput>
    create: XOR<SectionCreateWithoutGroupedPointsInput, SectionUncheckedCreateWithoutGroupedPointsInput>
    where?: SectionWhereInput
  }

  export type SectionUpdateToOneWithWhereWithoutGroupedPointsInput = {
    where?: SectionWhereInput
    data: XOR<SectionUpdateWithoutGroupedPointsInput, SectionUncheckedUpdateWithoutGroupedPointsInput>
  }

  export type SectionUpdateWithoutGroupedPointsInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    contenu?: NullableStringFieldUpdateOperationsInput | string | null
    ordre?: IntFieldUpdateOperationsInput | number
    type?: EnumSectionTypeFieldUpdateOperationsInput | $Enums.SectionType
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bulletPoints?: BulletPointUpdateManyWithoutSectionNestedInput
    images?: ImageUpdateManyWithoutSectionNestedInput
    destination?: DestinationUpdateOneRequiredWithoutSectionsNestedInput
  }

  export type SectionUncheckedUpdateWithoutGroupedPointsInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    contenu?: NullableStringFieldUpdateOperationsInput | string | null
    ordre?: IntFieldUpdateOperationsInput | number
    type?: EnumSectionTypeFieldUpdateOperationsInput | $Enums.SectionType
    destinationId?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bulletPoints?: BulletPointUncheckedUpdateManyWithoutSectionNestedInput
    images?: ImageUncheckedUpdateManyWithoutSectionNestedInput
  }

  export type BulletPointContentUpsertWithWhereUniqueWithoutGroupInput = {
    where: BulletPointContentWhereUniqueInput
    update: XOR<BulletPointContentUpdateWithoutGroupInput, BulletPointContentUncheckedUpdateWithoutGroupInput>
    create: XOR<BulletPointContentCreateWithoutGroupInput, BulletPointContentUncheckedCreateWithoutGroupInput>
  }

  export type BulletPointContentUpdateWithWhereUniqueWithoutGroupInput = {
    where: BulletPointContentWhereUniqueInput
    data: XOR<BulletPointContentUpdateWithoutGroupInput, BulletPointContentUncheckedUpdateWithoutGroupInput>
  }

  export type BulletPointContentUpdateManyWithWhereWithoutGroupInput = {
    where: BulletPointContentScalarWhereInput
    data: XOR<BulletPointContentUpdateManyMutationInput, BulletPointContentUncheckedUpdateManyWithoutGroupInput>
  }

  export type BulletPointContentScalarWhereInput = {
    AND?: BulletPointContentScalarWhereInput | BulletPointContentScalarWhereInput[]
    OR?: BulletPointContentScalarWhereInput[]
    NOT?: BulletPointContentScalarWhereInput | BulletPointContentScalarWhereInput[]
    id?: StringFilter<"BulletPointContent"> | string
    contenu?: StringNullableFilter<"BulletPointContent"> | string | null
    ordre?: IntFilter<"BulletPointContent"> | number
    groupId?: StringFilter<"BulletPointContent"> | string
  }

  export type GroupedBulletPointCreateWithoutContentsInput = {
    id?: string
    titre: string
    ordre: number
    section: SectionCreateNestedOneWithoutGroupedPointsInput
  }

  export type GroupedBulletPointUncheckedCreateWithoutContentsInput = {
    id?: string
    titre: string
    ordre: number
    sectionId: string
  }

  export type GroupedBulletPointCreateOrConnectWithoutContentsInput = {
    where: GroupedBulletPointWhereUniqueInput
    create: XOR<GroupedBulletPointCreateWithoutContentsInput, GroupedBulletPointUncheckedCreateWithoutContentsInput>
  }

  export type GroupedBulletPointUpsertWithoutContentsInput = {
    update: XOR<GroupedBulletPointUpdateWithoutContentsInput, GroupedBulletPointUncheckedUpdateWithoutContentsInput>
    create: XOR<GroupedBulletPointCreateWithoutContentsInput, GroupedBulletPointUncheckedCreateWithoutContentsInput>
    where?: GroupedBulletPointWhereInput
  }

  export type GroupedBulletPointUpdateToOneWithWhereWithoutContentsInput = {
    where?: GroupedBulletPointWhereInput
    data: XOR<GroupedBulletPointUpdateWithoutContentsInput, GroupedBulletPointUncheckedUpdateWithoutContentsInput>
  }

  export type GroupedBulletPointUpdateWithoutContentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    ordre?: IntFieldUpdateOperationsInput | number
    section?: SectionUpdateOneRequiredWithoutGroupedPointsNestedInput
  }

  export type GroupedBulletPointUncheckedUpdateWithoutContentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    ordre?: IntFieldUpdateOperationsInput | number
    sectionId?: StringFieldUpdateOperationsInput | string
  }

  export type SectionCreateWithoutImagesInput = {
    id?: string
    titre: string
    contenu?: string | null
    ordre: number
    type: $Enums.SectionType
    updatedAt?: Date | string
    bulletPoints?: BulletPointCreateNestedManyWithoutSectionInput
    groupedPoints?: GroupedBulletPointCreateNestedManyWithoutSectionInput
    destination: DestinationCreateNestedOneWithoutSectionsInput
  }

  export type SectionUncheckedCreateWithoutImagesInput = {
    id?: string
    titre: string
    contenu?: string | null
    ordre: number
    type: $Enums.SectionType
    destinationId: string
    updatedAt?: Date | string
    bulletPoints?: BulletPointUncheckedCreateNestedManyWithoutSectionInput
    groupedPoints?: GroupedBulletPointUncheckedCreateNestedManyWithoutSectionInput
  }

  export type SectionCreateOrConnectWithoutImagesInput = {
    where: SectionWhereUniqueInput
    create: XOR<SectionCreateWithoutImagesInput, SectionUncheckedCreateWithoutImagesInput>
  }

  export type SectionUpsertWithoutImagesInput = {
    update: XOR<SectionUpdateWithoutImagesInput, SectionUncheckedUpdateWithoutImagesInput>
    create: XOR<SectionCreateWithoutImagesInput, SectionUncheckedCreateWithoutImagesInput>
    where?: SectionWhereInput
  }

  export type SectionUpdateToOneWithWhereWithoutImagesInput = {
    where?: SectionWhereInput
    data: XOR<SectionUpdateWithoutImagesInput, SectionUncheckedUpdateWithoutImagesInput>
  }

  export type SectionUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    contenu?: NullableStringFieldUpdateOperationsInput | string | null
    ordre?: IntFieldUpdateOperationsInput | number
    type?: EnumSectionTypeFieldUpdateOperationsInput | $Enums.SectionType
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bulletPoints?: BulletPointUpdateManyWithoutSectionNestedInput
    groupedPoints?: GroupedBulletPointUpdateManyWithoutSectionNestedInput
    destination?: DestinationUpdateOneRequiredWithoutSectionsNestedInput
  }

  export type SectionUncheckedUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    contenu?: NullableStringFieldUpdateOperationsInput | string | null
    ordre?: IntFieldUpdateOperationsInput | number
    type?: EnumSectionTypeFieldUpdateOperationsInput | $Enums.SectionType
    destinationId?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bulletPoints?: BulletPointUncheckedUpdateManyWithoutSectionNestedInput
    groupedPoints?: GroupedBulletPointUncheckedUpdateManyWithoutSectionNestedInput
  }

  export type ChecklistCategoryCreateWithoutChecklistInput = {
    id?: string
    titre: string
    icone?: string | null
    items?: ChecklistItemCreateNestedManyWithoutCategoryInput
  }

  export type ChecklistCategoryUncheckedCreateWithoutChecklistInput = {
    id?: string
    titre: string
    icone?: string | null
    items?: ChecklistItemUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type ChecklistCategoryCreateOrConnectWithoutChecklistInput = {
    where: ChecklistCategoryWhereUniqueInput
    create: XOR<ChecklistCategoryCreateWithoutChecklistInput, ChecklistCategoryUncheckedCreateWithoutChecklistInput>
  }

  export type ChecklistCategoryCreateManyChecklistInputEnvelope = {
    data: ChecklistCategoryCreateManyChecklistInput | ChecklistCategoryCreateManyChecklistInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutChecklistsInput = {
    nom: string
    prenom: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    bio?: string | null
    instagram?: string | null
    facebook?: string | null
    youtube?: string | null
    isPublic?: boolean
    adventurerType?: string | null
    avatar?: string | null
    coverImage?: string | null
    voyages?: DestinationCreateNestedManyWithoutUtilisateurInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    reviewLikes?: ReviewLikeCreateNestedManyWithoutUserInput
    userVoyages?: UserVoyageCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutChecklistsInput = {
    id?: number
    nom: string
    prenom: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    bio?: string | null
    instagram?: string | null
    facebook?: string | null
    youtube?: string | null
    isPublic?: boolean
    adventurerType?: string | null
    avatar?: string | null
    coverImage?: string | null
    voyages?: DestinationUncheckedCreateNestedManyWithoutUtilisateurInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    reviewLikes?: ReviewLikeUncheckedCreateNestedManyWithoutUserInput
    userVoyages?: UserVoyageUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutChecklistsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChecklistsInput, UserUncheckedCreateWithoutChecklistsInput>
  }

  export type DestinationCreateWithoutChecklistsInput = {
    id?: string
    titre: string
    pays: string
    continent?: string | null
    description?: string | null
    imagePrincipale?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sections?: SectionCreateNestedManyWithoutDestinationInput
    utilisateur?: UserCreateNestedOneWithoutVoyagesInput
    reviews?: ReviewCreateNestedManyWithoutDestinationInput
    userVoyages?: UserVoyageCreateNestedManyWithoutDestinationInput
  }

  export type DestinationUncheckedCreateWithoutChecklistsInput = {
    id?: string
    titre: string
    pays: string
    continent?: string | null
    description?: string | null
    imagePrincipale?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    utilisateurId?: number | null
    sections?: SectionUncheckedCreateNestedManyWithoutDestinationInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutDestinationInput
    userVoyages?: UserVoyageUncheckedCreateNestedManyWithoutDestinationInput
  }

  export type DestinationCreateOrConnectWithoutChecklistsInput = {
    where: DestinationWhereUniqueInput
    create: XOR<DestinationCreateWithoutChecklistsInput, DestinationUncheckedCreateWithoutChecklistsInput>
  }

  export type ChecklistCategoryUpsertWithWhereUniqueWithoutChecklistInput = {
    where: ChecklistCategoryWhereUniqueInput
    update: XOR<ChecklistCategoryUpdateWithoutChecklistInput, ChecklistCategoryUncheckedUpdateWithoutChecklistInput>
    create: XOR<ChecklistCategoryCreateWithoutChecklistInput, ChecklistCategoryUncheckedCreateWithoutChecklistInput>
  }

  export type ChecklistCategoryUpdateWithWhereUniqueWithoutChecklistInput = {
    where: ChecklistCategoryWhereUniqueInput
    data: XOR<ChecklistCategoryUpdateWithoutChecklistInput, ChecklistCategoryUncheckedUpdateWithoutChecklistInput>
  }

  export type ChecklistCategoryUpdateManyWithWhereWithoutChecklistInput = {
    where: ChecklistCategoryScalarWhereInput
    data: XOR<ChecklistCategoryUpdateManyMutationInput, ChecklistCategoryUncheckedUpdateManyWithoutChecklistInput>
  }

  export type ChecklistCategoryScalarWhereInput = {
    AND?: ChecklistCategoryScalarWhereInput | ChecklistCategoryScalarWhereInput[]
    OR?: ChecklistCategoryScalarWhereInput[]
    NOT?: ChecklistCategoryScalarWhereInput | ChecklistCategoryScalarWhereInput[]
    id?: StringFilter<"ChecklistCategory"> | string
    titre?: StringFilter<"ChecklistCategory"> | string
    icone?: StringNullableFilter<"ChecklistCategory"> | string | null
    checklistId?: StringFilter<"ChecklistCategory"> | string
  }

  export type UserUpsertWithoutChecklistsInput = {
    update: XOR<UserUpdateWithoutChecklistsInput, UserUncheckedUpdateWithoutChecklistsInput>
    create: XOR<UserCreateWithoutChecklistsInput, UserUncheckedCreateWithoutChecklistsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChecklistsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChecklistsInput, UserUncheckedUpdateWithoutChecklistsInput>
  }

  export type UserUpdateWithoutChecklistsInput = {
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    youtube?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    adventurerType?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    voyages?: DestinationUpdateManyWithoutUtilisateurNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    reviewLikes?: ReviewLikeUpdateManyWithoutUserNestedInput
    userVoyages?: UserVoyageUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutChecklistsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    youtube?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    adventurerType?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    voyages?: DestinationUncheckedUpdateManyWithoutUtilisateurNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    reviewLikes?: ReviewLikeUncheckedUpdateManyWithoutUserNestedInput
    userVoyages?: UserVoyageUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DestinationUpsertWithoutChecklistsInput = {
    update: XOR<DestinationUpdateWithoutChecklistsInput, DestinationUncheckedUpdateWithoutChecklistsInput>
    create: XOR<DestinationCreateWithoutChecklistsInput, DestinationUncheckedCreateWithoutChecklistsInput>
    where?: DestinationWhereInput
  }

  export type DestinationUpdateToOneWithWhereWithoutChecklistsInput = {
    where?: DestinationWhereInput
    data: XOR<DestinationUpdateWithoutChecklistsInput, DestinationUncheckedUpdateWithoutChecklistsInput>
  }

  export type DestinationUpdateWithoutChecklistsInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    pays?: StringFieldUpdateOperationsInput | string
    continent?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imagePrincipale?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sections?: SectionUpdateManyWithoutDestinationNestedInput
    utilisateur?: UserUpdateOneWithoutVoyagesNestedInput
    reviews?: ReviewUpdateManyWithoutDestinationNestedInput
    userVoyages?: UserVoyageUpdateManyWithoutDestinationNestedInput
  }

  export type DestinationUncheckedUpdateWithoutChecklistsInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    pays?: StringFieldUpdateOperationsInput | string
    continent?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imagePrincipale?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    utilisateurId?: NullableIntFieldUpdateOperationsInput | number | null
    sections?: SectionUncheckedUpdateManyWithoutDestinationNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutDestinationNestedInput
    userVoyages?: UserVoyageUncheckedUpdateManyWithoutDestinationNestedInput
  }

  export type ChecklistItemCreateWithoutCategoryInput = {
    id?: string
    titre: string
    description?: string | null
    isChecked?: boolean
    reminderDate?: Date | string | null
  }

  export type ChecklistItemUncheckedCreateWithoutCategoryInput = {
    id?: string
    titre: string
    description?: string | null
    isChecked?: boolean
    reminderDate?: Date | string | null
  }

  export type ChecklistItemCreateOrConnectWithoutCategoryInput = {
    where: ChecklistItemWhereUniqueInput
    create: XOR<ChecklistItemCreateWithoutCategoryInput, ChecklistItemUncheckedCreateWithoutCategoryInput>
  }

  export type ChecklistItemCreateManyCategoryInputEnvelope = {
    data: ChecklistItemCreateManyCategoryInput | ChecklistItemCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type ChecklistCreateWithoutCategoriesInput = {
    id?: string
    titre: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutChecklistsInput
    voyage: DestinationCreateNestedOneWithoutChecklistsInput
  }

  export type ChecklistUncheckedCreateWithoutCategoriesInput = {
    id?: string
    titre: string
    userId: number
    voyageId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChecklistCreateOrConnectWithoutCategoriesInput = {
    where: ChecklistWhereUniqueInput
    create: XOR<ChecklistCreateWithoutCategoriesInput, ChecklistUncheckedCreateWithoutCategoriesInput>
  }

  export type ChecklistItemUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ChecklistItemWhereUniqueInput
    update: XOR<ChecklistItemUpdateWithoutCategoryInput, ChecklistItemUncheckedUpdateWithoutCategoryInput>
    create: XOR<ChecklistItemCreateWithoutCategoryInput, ChecklistItemUncheckedCreateWithoutCategoryInput>
  }

  export type ChecklistItemUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ChecklistItemWhereUniqueInput
    data: XOR<ChecklistItemUpdateWithoutCategoryInput, ChecklistItemUncheckedUpdateWithoutCategoryInput>
  }

  export type ChecklistItemUpdateManyWithWhereWithoutCategoryInput = {
    where: ChecklistItemScalarWhereInput
    data: XOR<ChecklistItemUpdateManyMutationInput, ChecklistItemUncheckedUpdateManyWithoutCategoryInput>
  }

  export type ChecklistItemScalarWhereInput = {
    AND?: ChecklistItemScalarWhereInput | ChecklistItemScalarWhereInput[]
    OR?: ChecklistItemScalarWhereInput[]
    NOT?: ChecklistItemScalarWhereInput | ChecklistItemScalarWhereInput[]
    id?: StringFilter<"ChecklistItem"> | string
    titre?: StringFilter<"ChecklistItem"> | string
    description?: StringNullableFilter<"ChecklistItem"> | string | null
    isChecked?: BoolFilter<"ChecklistItem"> | boolean
    reminderDate?: DateTimeNullableFilter<"ChecklistItem"> | Date | string | null
    categoryId?: StringFilter<"ChecklistItem"> | string
  }

  export type ChecklistUpsertWithoutCategoriesInput = {
    update: XOR<ChecklistUpdateWithoutCategoriesInput, ChecklistUncheckedUpdateWithoutCategoriesInput>
    create: XOR<ChecklistCreateWithoutCategoriesInput, ChecklistUncheckedCreateWithoutCategoriesInput>
    where?: ChecklistWhereInput
  }

  export type ChecklistUpdateToOneWithWhereWithoutCategoriesInput = {
    where?: ChecklistWhereInput
    data: XOR<ChecklistUpdateWithoutCategoriesInput, ChecklistUncheckedUpdateWithoutCategoriesInput>
  }

  export type ChecklistUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutChecklistsNestedInput
    voyage?: DestinationUpdateOneRequiredWithoutChecklistsNestedInput
  }

  export type ChecklistUncheckedUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    voyageId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChecklistCategoryCreateWithoutItemsInput = {
    id?: string
    titre: string
    icone?: string | null
    checklist: ChecklistCreateNestedOneWithoutCategoriesInput
  }

  export type ChecklistCategoryUncheckedCreateWithoutItemsInput = {
    id?: string
    titre: string
    icone?: string | null
    checklistId: string
  }

  export type ChecklistCategoryCreateOrConnectWithoutItemsInput = {
    where: ChecklistCategoryWhereUniqueInput
    create: XOR<ChecklistCategoryCreateWithoutItemsInput, ChecklistCategoryUncheckedCreateWithoutItemsInput>
  }

  export type ChecklistCategoryUpsertWithoutItemsInput = {
    update: XOR<ChecklistCategoryUpdateWithoutItemsInput, ChecklistCategoryUncheckedUpdateWithoutItemsInput>
    create: XOR<ChecklistCategoryCreateWithoutItemsInput, ChecklistCategoryUncheckedCreateWithoutItemsInput>
    where?: ChecklistCategoryWhereInput
  }

  export type ChecklistCategoryUpdateToOneWithWhereWithoutItemsInput = {
    where?: ChecklistCategoryWhereInput
    data: XOR<ChecklistCategoryUpdateWithoutItemsInput, ChecklistCategoryUncheckedUpdateWithoutItemsInput>
  }

  export type ChecklistCategoryUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    icone?: NullableStringFieldUpdateOperationsInput | string | null
    checklist?: ChecklistUpdateOneRequiredWithoutCategoriesNestedInput
  }

  export type ChecklistCategoryUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    icone?: NullableStringFieldUpdateOperationsInput | string | null
    checklistId?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateWithoutReviewsInput = {
    nom: string
    prenom: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    bio?: string | null
    instagram?: string | null
    facebook?: string | null
    youtube?: string | null
    isPublic?: boolean
    adventurerType?: string | null
    avatar?: string | null
    coverImage?: string | null
    voyages?: DestinationCreateNestedManyWithoutUtilisateurInput
    checklists?: ChecklistCreateNestedManyWithoutUserInput
    reviewLikes?: ReviewLikeCreateNestedManyWithoutUserInput
    userVoyages?: UserVoyageCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReviewsInput = {
    id?: number
    nom: string
    prenom: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    bio?: string | null
    instagram?: string | null
    facebook?: string | null
    youtube?: string | null
    isPublic?: boolean
    adventurerType?: string | null
    avatar?: string | null
    coverImage?: string | null
    voyages?: DestinationUncheckedCreateNestedManyWithoutUtilisateurInput
    checklists?: ChecklistUncheckedCreateNestedManyWithoutUserInput
    reviewLikes?: ReviewLikeUncheckedCreateNestedManyWithoutUserInput
    userVoyages?: UserVoyageUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReviewsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
  }

  export type DestinationCreateWithoutReviewsInput = {
    id?: string
    titre: string
    pays: string
    continent?: string | null
    description?: string | null
    imagePrincipale?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sections?: SectionCreateNestedManyWithoutDestinationInput
    utilisateur?: UserCreateNestedOneWithoutVoyagesInput
    checklists?: ChecklistCreateNestedManyWithoutVoyageInput
    userVoyages?: UserVoyageCreateNestedManyWithoutDestinationInput
  }

  export type DestinationUncheckedCreateWithoutReviewsInput = {
    id?: string
    titre: string
    pays: string
    continent?: string | null
    description?: string | null
    imagePrincipale?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    utilisateurId?: number | null
    sections?: SectionUncheckedCreateNestedManyWithoutDestinationInput
    checklists?: ChecklistUncheckedCreateNestedManyWithoutVoyageInput
    userVoyages?: UserVoyageUncheckedCreateNestedManyWithoutDestinationInput
  }

  export type DestinationCreateOrConnectWithoutReviewsInput = {
    where: DestinationWhereUniqueInput
    create: XOR<DestinationCreateWithoutReviewsInput, DestinationUncheckedCreateWithoutReviewsInput>
  }

  export type ReviewLikeCreateWithoutReviewInput = {
    id?: string
    user: UserCreateNestedOneWithoutReviewLikesInput
  }

  export type ReviewLikeUncheckedCreateWithoutReviewInput = {
    id?: string
    userId: number
  }

  export type ReviewLikeCreateOrConnectWithoutReviewInput = {
    where: ReviewLikeWhereUniqueInput
    create: XOR<ReviewLikeCreateWithoutReviewInput, ReviewLikeUncheckedCreateWithoutReviewInput>
  }

  export type ReviewLikeCreateManyReviewInputEnvelope = {
    data: ReviewLikeCreateManyReviewInput | ReviewLikeCreateManyReviewInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutReviewsInput = {
    update: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type UserUpdateWithoutReviewsInput = {
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    youtube?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    adventurerType?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    voyages?: DestinationUpdateManyWithoutUtilisateurNestedInput
    checklists?: ChecklistUpdateManyWithoutUserNestedInput
    reviewLikes?: ReviewLikeUpdateManyWithoutUserNestedInput
    userVoyages?: UserVoyageUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    youtube?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    adventurerType?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    voyages?: DestinationUncheckedUpdateManyWithoutUtilisateurNestedInput
    checklists?: ChecklistUncheckedUpdateManyWithoutUserNestedInput
    reviewLikes?: ReviewLikeUncheckedUpdateManyWithoutUserNestedInput
    userVoyages?: UserVoyageUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DestinationUpsertWithoutReviewsInput = {
    update: XOR<DestinationUpdateWithoutReviewsInput, DestinationUncheckedUpdateWithoutReviewsInput>
    create: XOR<DestinationCreateWithoutReviewsInput, DestinationUncheckedCreateWithoutReviewsInput>
    where?: DestinationWhereInput
  }

  export type DestinationUpdateToOneWithWhereWithoutReviewsInput = {
    where?: DestinationWhereInput
    data: XOR<DestinationUpdateWithoutReviewsInput, DestinationUncheckedUpdateWithoutReviewsInput>
  }

  export type DestinationUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    pays?: StringFieldUpdateOperationsInput | string
    continent?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imagePrincipale?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sections?: SectionUpdateManyWithoutDestinationNestedInput
    utilisateur?: UserUpdateOneWithoutVoyagesNestedInput
    checklists?: ChecklistUpdateManyWithoutVoyageNestedInput
    userVoyages?: UserVoyageUpdateManyWithoutDestinationNestedInput
  }

  export type DestinationUncheckedUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    pays?: StringFieldUpdateOperationsInput | string
    continent?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imagePrincipale?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    utilisateurId?: NullableIntFieldUpdateOperationsInput | number | null
    sections?: SectionUncheckedUpdateManyWithoutDestinationNestedInput
    checklists?: ChecklistUncheckedUpdateManyWithoutVoyageNestedInput
    userVoyages?: UserVoyageUncheckedUpdateManyWithoutDestinationNestedInput
  }

  export type ReviewLikeUpsertWithWhereUniqueWithoutReviewInput = {
    where: ReviewLikeWhereUniqueInput
    update: XOR<ReviewLikeUpdateWithoutReviewInput, ReviewLikeUncheckedUpdateWithoutReviewInput>
    create: XOR<ReviewLikeCreateWithoutReviewInput, ReviewLikeUncheckedCreateWithoutReviewInput>
  }

  export type ReviewLikeUpdateWithWhereUniqueWithoutReviewInput = {
    where: ReviewLikeWhereUniqueInput
    data: XOR<ReviewLikeUpdateWithoutReviewInput, ReviewLikeUncheckedUpdateWithoutReviewInput>
  }

  export type ReviewLikeUpdateManyWithWhereWithoutReviewInput = {
    where: ReviewLikeScalarWhereInput
    data: XOR<ReviewLikeUpdateManyMutationInput, ReviewLikeUncheckedUpdateManyWithoutReviewInput>
  }

  export type UserCreateWithoutReviewLikesInput = {
    nom: string
    prenom: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    bio?: string | null
    instagram?: string | null
    facebook?: string | null
    youtube?: string | null
    isPublic?: boolean
    adventurerType?: string | null
    avatar?: string | null
    coverImage?: string | null
    voyages?: DestinationCreateNestedManyWithoutUtilisateurInput
    checklists?: ChecklistCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    userVoyages?: UserVoyageCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReviewLikesInput = {
    id?: number
    nom: string
    prenom: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    bio?: string | null
    instagram?: string | null
    facebook?: string | null
    youtube?: string | null
    isPublic?: boolean
    adventurerType?: string | null
    avatar?: string | null
    coverImage?: string | null
    voyages?: DestinationUncheckedCreateNestedManyWithoutUtilisateurInput
    checklists?: ChecklistUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    userVoyages?: UserVoyageUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReviewLikesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewLikesInput, UserUncheckedCreateWithoutReviewLikesInput>
  }

  export type ReviewCreateWithoutLikesInput = {
    id?: string
    rating: number
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutReviewsInput
    destination: DestinationCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutLikesInput = {
    id?: string
    userId: number
    destinationId: string
    rating: number
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutLikesInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutLikesInput, ReviewUncheckedCreateWithoutLikesInput>
  }

  export type UserUpsertWithoutReviewLikesInput = {
    update: XOR<UserUpdateWithoutReviewLikesInput, UserUncheckedUpdateWithoutReviewLikesInput>
    create: XOR<UserCreateWithoutReviewLikesInput, UserUncheckedCreateWithoutReviewLikesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewLikesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewLikesInput, UserUncheckedUpdateWithoutReviewLikesInput>
  }

  export type UserUpdateWithoutReviewLikesInput = {
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    youtube?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    adventurerType?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    voyages?: DestinationUpdateManyWithoutUtilisateurNestedInput
    checklists?: ChecklistUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    userVoyages?: UserVoyageUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewLikesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    youtube?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    adventurerType?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    voyages?: DestinationUncheckedUpdateManyWithoutUtilisateurNestedInput
    checklists?: ChecklistUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    userVoyages?: UserVoyageUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ReviewUpsertWithoutLikesInput = {
    update: XOR<ReviewUpdateWithoutLikesInput, ReviewUncheckedUpdateWithoutLikesInput>
    create: XOR<ReviewCreateWithoutLikesInput, ReviewUncheckedCreateWithoutLikesInput>
    where?: ReviewWhereInput
  }

  export type ReviewUpdateToOneWithWhereWithoutLikesInput = {
    where?: ReviewWhereInput
    data: XOR<ReviewUpdateWithoutLikesInput, ReviewUncheckedUpdateWithoutLikesInput>
  }

  export type ReviewUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
    destination?: DestinationUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    destinationId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutUserVoyagesInput = {
    nom: string
    prenom: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    bio?: string | null
    instagram?: string | null
    facebook?: string | null
    youtube?: string | null
    isPublic?: boolean
    adventurerType?: string | null
    avatar?: string | null
    coverImage?: string | null
    voyages?: DestinationCreateNestedManyWithoutUtilisateurInput
    checklists?: ChecklistCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    reviewLikes?: ReviewLikeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserVoyagesInput = {
    id?: number
    nom: string
    prenom: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    bio?: string | null
    instagram?: string | null
    facebook?: string | null
    youtube?: string | null
    isPublic?: boolean
    adventurerType?: string | null
    avatar?: string | null
    coverImage?: string | null
    voyages?: DestinationUncheckedCreateNestedManyWithoutUtilisateurInput
    checklists?: ChecklistUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    reviewLikes?: ReviewLikeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserVoyagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserVoyagesInput, UserUncheckedCreateWithoutUserVoyagesInput>
  }

  export type DestinationCreateWithoutUserVoyagesInput = {
    id?: string
    titre: string
    pays: string
    continent?: string | null
    description?: string | null
    imagePrincipale?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sections?: SectionCreateNestedManyWithoutDestinationInput
    utilisateur?: UserCreateNestedOneWithoutVoyagesInput
    checklists?: ChecklistCreateNestedManyWithoutVoyageInput
    reviews?: ReviewCreateNestedManyWithoutDestinationInput
  }

  export type DestinationUncheckedCreateWithoutUserVoyagesInput = {
    id?: string
    titre: string
    pays: string
    continent?: string | null
    description?: string | null
    imagePrincipale?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    utilisateurId?: number | null
    sections?: SectionUncheckedCreateNestedManyWithoutDestinationInput
    checklists?: ChecklistUncheckedCreateNestedManyWithoutVoyageInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutDestinationInput
  }

  export type DestinationCreateOrConnectWithoutUserVoyagesInput = {
    where: DestinationWhereUniqueInput
    create: XOR<DestinationCreateWithoutUserVoyagesInput, DestinationUncheckedCreateWithoutUserVoyagesInput>
  }

  export type UserUpsertWithoutUserVoyagesInput = {
    update: XOR<UserUpdateWithoutUserVoyagesInput, UserUncheckedUpdateWithoutUserVoyagesInput>
    create: XOR<UserCreateWithoutUserVoyagesInput, UserUncheckedCreateWithoutUserVoyagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserVoyagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserVoyagesInput, UserUncheckedUpdateWithoutUserVoyagesInput>
  }

  export type UserUpdateWithoutUserVoyagesInput = {
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    youtube?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    adventurerType?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    voyages?: DestinationUpdateManyWithoutUtilisateurNestedInput
    checklists?: ChecklistUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    reviewLikes?: ReviewLikeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserVoyagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    youtube?: NullableStringFieldUpdateOperationsInput | string | null
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    adventurerType?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    voyages?: DestinationUncheckedUpdateManyWithoutUtilisateurNestedInput
    checklists?: ChecklistUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    reviewLikes?: ReviewLikeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DestinationUpsertWithoutUserVoyagesInput = {
    update: XOR<DestinationUpdateWithoutUserVoyagesInput, DestinationUncheckedUpdateWithoutUserVoyagesInput>
    create: XOR<DestinationCreateWithoutUserVoyagesInput, DestinationUncheckedCreateWithoutUserVoyagesInput>
    where?: DestinationWhereInput
  }

  export type DestinationUpdateToOneWithWhereWithoutUserVoyagesInput = {
    where?: DestinationWhereInput
    data: XOR<DestinationUpdateWithoutUserVoyagesInput, DestinationUncheckedUpdateWithoutUserVoyagesInput>
  }

  export type DestinationUpdateWithoutUserVoyagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    pays?: StringFieldUpdateOperationsInput | string
    continent?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imagePrincipale?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sections?: SectionUpdateManyWithoutDestinationNestedInput
    utilisateur?: UserUpdateOneWithoutVoyagesNestedInput
    checklists?: ChecklistUpdateManyWithoutVoyageNestedInput
    reviews?: ReviewUpdateManyWithoutDestinationNestedInput
  }

  export type DestinationUncheckedUpdateWithoutUserVoyagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    pays?: StringFieldUpdateOperationsInput | string
    continent?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imagePrincipale?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    utilisateurId?: NullableIntFieldUpdateOperationsInput | number | null
    sections?: SectionUncheckedUpdateManyWithoutDestinationNestedInput
    checklists?: ChecklistUncheckedUpdateManyWithoutVoyageNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutDestinationNestedInput
  }

  export type DestinationCreateManyUtilisateurInput = {
    id?: string
    titre: string
    pays: string
    continent?: string | null
    description?: string | null
    imagePrincipale?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChecklistCreateManyUserInput = {
    id?: string
    titre: string
    voyageId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateManyUserInput = {
    id?: string
    destinationId: string
    rating: number
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewLikeCreateManyUserInput = {
    id?: string
    reviewId: string
  }

  export type UserVoyageCreateManyUserInput = {
    id?: number
    destinationId: string
    createdAt?: Date | string
  }

  export type DestinationUpdateWithoutUtilisateurInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    pays?: StringFieldUpdateOperationsInput | string
    continent?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imagePrincipale?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sections?: SectionUpdateManyWithoutDestinationNestedInput
    checklists?: ChecklistUpdateManyWithoutVoyageNestedInput
    reviews?: ReviewUpdateManyWithoutDestinationNestedInput
    userVoyages?: UserVoyageUpdateManyWithoutDestinationNestedInput
  }

  export type DestinationUncheckedUpdateWithoutUtilisateurInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    pays?: StringFieldUpdateOperationsInput | string
    continent?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imagePrincipale?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sections?: SectionUncheckedUpdateManyWithoutDestinationNestedInput
    checklists?: ChecklistUncheckedUpdateManyWithoutVoyageNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutDestinationNestedInput
    userVoyages?: UserVoyageUncheckedUpdateManyWithoutDestinationNestedInput
  }

  export type DestinationUncheckedUpdateManyWithoutUtilisateurInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    pays?: StringFieldUpdateOperationsInput | string
    continent?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imagePrincipale?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChecklistUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: ChecklistCategoryUpdateManyWithoutChecklistNestedInput
    voyage?: DestinationUpdateOneRequiredWithoutChecklistsNestedInput
  }

  export type ChecklistUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    voyageId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: ChecklistCategoryUncheckedUpdateManyWithoutChecklistNestedInput
  }

  export type ChecklistUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    voyageId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    destination?: DestinationUpdateOneRequiredWithoutReviewsNestedInput
    likes?: ReviewLikeUpdateManyWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    destinationId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: ReviewLikeUncheckedUpdateManyWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    destinationId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewLikeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    review?: ReviewUpdateOneRequiredWithoutLikesNestedInput
  }

  export type ReviewLikeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    reviewId?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewLikeUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    reviewId?: StringFieldUpdateOperationsInput | string
  }

  export type UserVoyageUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    destination?: DestinationUpdateOneRequiredWithoutUserVoyagesNestedInput
  }

  export type UserVoyageUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    destinationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserVoyageUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    destinationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SectionCreateManyDestinationInput = {
    id?: string
    titre: string
    contenu?: string | null
    ordre: number
    type: $Enums.SectionType
    updatedAt?: Date | string
  }

  export type ChecklistCreateManyVoyageInput = {
    id?: string
    titre: string
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateManyDestinationInput = {
    id?: string
    userId: number
    rating: number
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserVoyageCreateManyDestinationInput = {
    id?: number
    userId: number
    createdAt?: Date | string
  }

  export type SectionUpdateWithoutDestinationInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    contenu?: NullableStringFieldUpdateOperationsInput | string | null
    ordre?: IntFieldUpdateOperationsInput | number
    type?: EnumSectionTypeFieldUpdateOperationsInput | $Enums.SectionType
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bulletPoints?: BulletPointUpdateManyWithoutSectionNestedInput
    groupedPoints?: GroupedBulletPointUpdateManyWithoutSectionNestedInput
    images?: ImageUpdateManyWithoutSectionNestedInput
  }

  export type SectionUncheckedUpdateWithoutDestinationInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    contenu?: NullableStringFieldUpdateOperationsInput | string | null
    ordre?: IntFieldUpdateOperationsInput | number
    type?: EnumSectionTypeFieldUpdateOperationsInput | $Enums.SectionType
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bulletPoints?: BulletPointUncheckedUpdateManyWithoutSectionNestedInput
    groupedPoints?: GroupedBulletPointUncheckedUpdateManyWithoutSectionNestedInput
    images?: ImageUncheckedUpdateManyWithoutSectionNestedInput
  }

  export type SectionUncheckedUpdateManyWithoutDestinationInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    contenu?: NullableStringFieldUpdateOperationsInput | string | null
    ordre?: IntFieldUpdateOperationsInput | number
    type?: EnumSectionTypeFieldUpdateOperationsInput | $Enums.SectionType
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChecklistUpdateWithoutVoyageInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: ChecklistCategoryUpdateManyWithoutChecklistNestedInput
    user?: UserUpdateOneRequiredWithoutChecklistsNestedInput
  }

  export type ChecklistUncheckedUpdateWithoutVoyageInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: ChecklistCategoryUncheckedUpdateManyWithoutChecklistNestedInput
  }

  export type ChecklistUncheckedUpdateManyWithoutVoyageInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUpdateWithoutDestinationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
    likes?: ReviewLikeUpdateManyWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateWithoutDestinationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: ReviewLikeUncheckedUpdateManyWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateManyWithoutDestinationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserVoyageUpdateWithoutDestinationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserVoyagesNestedInput
  }

  export type UserVoyageUncheckedUpdateWithoutDestinationInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserVoyageUncheckedUpdateManyWithoutDestinationInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BulletPointCreateManySectionInput = {
    id?: string
    contenu?: string | null
    ordre: number
  }

  export type GroupedBulletPointCreateManySectionInput = {
    id?: string
    titre: string
    ordre: number
  }

  export type ImageCreateManySectionInput = {
    id?: string
    url: string
    alt?: string | null
  }

  export type BulletPointUpdateWithoutSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    contenu?: NullableStringFieldUpdateOperationsInput | string | null
    ordre?: IntFieldUpdateOperationsInput | number
  }

  export type BulletPointUncheckedUpdateWithoutSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    contenu?: NullableStringFieldUpdateOperationsInput | string | null
    ordre?: IntFieldUpdateOperationsInput | number
  }

  export type BulletPointUncheckedUpdateManyWithoutSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    contenu?: NullableStringFieldUpdateOperationsInput | string | null
    ordre?: IntFieldUpdateOperationsInput | number
  }

  export type GroupedBulletPointUpdateWithoutSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    ordre?: IntFieldUpdateOperationsInput | number
    contents?: BulletPointContentUpdateManyWithoutGroupNestedInput
  }

  export type GroupedBulletPointUncheckedUpdateWithoutSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    ordre?: IntFieldUpdateOperationsInput | number
    contents?: BulletPointContentUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type GroupedBulletPointUncheckedUpdateManyWithoutSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    ordre?: IntFieldUpdateOperationsInput | number
  }

  export type ImageUpdateWithoutSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    alt?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ImageUncheckedUpdateWithoutSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    alt?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ImageUncheckedUpdateManyWithoutSectionInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    alt?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BulletPointContentCreateManyGroupInput = {
    id?: string
    contenu?: string | null
    ordre: number
  }

  export type BulletPointContentUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    contenu?: NullableStringFieldUpdateOperationsInput | string | null
    ordre?: IntFieldUpdateOperationsInput | number
  }

  export type BulletPointContentUncheckedUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    contenu?: NullableStringFieldUpdateOperationsInput | string | null
    ordre?: IntFieldUpdateOperationsInput | number
  }

  export type BulletPointContentUncheckedUpdateManyWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    contenu?: NullableStringFieldUpdateOperationsInput | string | null
    ordre?: IntFieldUpdateOperationsInput | number
  }

  export type ChecklistCategoryCreateManyChecklistInput = {
    id?: string
    titre: string
    icone?: string | null
  }

  export type ChecklistCategoryUpdateWithoutChecklistInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    icone?: NullableStringFieldUpdateOperationsInput | string | null
    items?: ChecklistItemUpdateManyWithoutCategoryNestedInput
  }

  export type ChecklistCategoryUncheckedUpdateWithoutChecklistInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    icone?: NullableStringFieldUpdateOperationsInput | string | null
    items?: ChecklistItemUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type ChecklistCategoryUncheckedUpdateManyWithoutChecklistInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    icone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ChecklistItemCreateManyCategoryInput = {
    id?: string
    titre: string
    description?: string | null
    isChecked?: boolean
    reminderDate?: Date | string | null
  }

  export type ChecklistItemUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isChecked?: BoolFieldUpdateOperationsInput | boolean
    reminderDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ChecklistItemUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isChecked?: BoolFieldUpdateOperationsInput | boolean
    reminderDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ChecklistItemUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    titre?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isChecked?: BoolFieldUpdateOperationsInput | boolean
    reminderDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReviewLikeCreateManyReviewInput = {
    id?: string
    userId: number
  }

  export type ReviewLikeUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutReviewLikesNestedInput
  }

  export type ReviewLikeUncheckedUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ReviewLikeUncheckedUpdateManyWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}