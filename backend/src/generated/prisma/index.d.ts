
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
 * Model Parking
 * 
 */
export type Parking = $Result.DefaultSelection<Prisma.$ParkingPayload>
/**
 * Model VehicleType
 * 
 */
export type VehicleType = $Result.DefaultSelection<Prisma.$VehicleTypePayload>
/**
 * Model Reservation
 * 
 */
export type Reservation = $Result.DefaultSelection<Prisma.$ReservationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ReservationStatus: {
  reserved: 'reserved',
  used: 'used',
  canceled: 'canceled',
  released: 'released'
};

export type ReservationStatus = (typeof ReservationStatus)[keyof typeof ReservationStatus]

}

export type ReservationStatus = $Enums.ReservationStatus

export const ReservationStatus: typeof $Enums.ReservationStatus

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
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * `prisma.parking`: Exposes CRUD operations for the **Parking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Parkings
    * const parkings = await prisma.parking.findMany()
    * ```
    */
  get parking(): Prisma.ParkingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vehicleType`: Exposes CRUD operations for the **VehicleType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VehicleTypes
    * const vehicleTypes = await prisma.vehicleType.findMany()
    * ```
    */
  get vehicleType(): Prisma.VehicleTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reservation`: Exposes CRUD operations for the **Reservation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reservations
    * const reservations = await prisma.reservation.findMany()
    * ```
    */
  get reservation(): Prisma.ReservationDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.16.0
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
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
    Parking: 'Parking',
    VehicleType: 'VehicleType',
    Reservation: 'Reservation'
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
      modelProps: "user" | "parking" | "vehicleType" | "reservation"
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
      Parking: {
        payload: Prisma.$ParkingPayload<ExtArgs>
        fields: Prisma.ParkingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParkingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParkingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingPayload>
          }
          findFirst: {
            args: Prisma.ParkingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParkingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingPayload>
          }
          findMany: {
            args: Prisma.ParkingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingPayload>[]
          }
          create: {
            args: Prisma.ParkingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingPayload>
          }
          createMany: {
            args: Prisma.ParkingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ParkingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingPayload>
          }
          update: {
            args: Prisma.ParkingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingPayload>
          }
          deleteMany: {
            args: Prisma.ParkingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParkingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ParkingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingPayload>
          }
          aggregate: {
            args: Prisma.ParkingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParking>
          }
          groupBy: {
            args: Prisma.ParkingGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParkingGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParkingCountArgs<ExtArgs>
            result: $Utils.Optional<ParkingCountAggregateOutputType> | number
          }
        }
      }
      VehicleType: {
        payload: Prisma.$VehicleTypePayload<ExtArgs>
        fields: Prisma.VehicleTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VehicleTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VehicleTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleTypePayload>
          }
          findFirst: {
            args: Prisma.VehicleTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VehicleTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleTypePayload>
          }
          findMany: {
            args: Prisma.VehicleTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleTypePayload>[]
          }
          create: {
            args: Prisma.VehicleTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleTypePayload>
          }
          createMany: {
            args: Prisma.VehicleTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VehicleTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleTypePayload>
          }
          update: {
            args: Prisma.VehicleTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleTypePayload>
          }
          deleteMany: {
            args: Prisma.VehicleTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VehicleTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VehicleTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleTypePayload>
          }
          aggregate: {
            args: Prisma.VehicleTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVehicleType>
          }
          groupBy: {
            args: Prisma.VehicleTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<VehicleTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.VehicleTypeCountArgs<ExtArgs>
            result: $Utils.Optional<VehicleTypeCountAggregateOutputType> | number
          }
        }
      }
      Reservation: {
        payload: Prisma.$ReservationPayload<ExtArgs>
        fields: Prisma.ReservationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReservationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReservationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          findFirst: {
            args: Prisma.ReservationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReservationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          findMany: {
            args: Prisma.ReservationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>[]
          }
          create: {
            args: Prisma.ReservationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          createMany: {
            args: Prisma.ReservationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ReservationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          update: {
            args: Prisma.ReservationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          deleteMany: {
            args: Prisma.ReservationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReservationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReservationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          aggregate: {
            args: Prisma.ReservationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReservation>
          }
          groupBy: {
            args: Prisma.ReservationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReservationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReservationCountArgs<ExtArgs>
            result: $Utils.Optional<ReservationCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    parking?: ParkingOmit
    vehicleType?: VehicleTypeOmit
    reservation?: ReservationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    reservations: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservations?: boolean | UserCountOutputTypeCountReservationsArgs
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
  export type UserCountOutputTypeCountReservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservationWhereInput
  }


  /**
   * Count Type ParkingCountOutputType
   */

  export type ParkingCountOutputType = {
    reservations: number
  }

  export type ParkingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservations?: boolean | ParkingCountOutputTypeCountReservationsArgs
  }

  // Custom InputTypes
  /**
   * ParkingCountOutputType without action
   */
  export type ParkingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingCountOutputType
     */
    select?: ParkingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ParkingCountOutputType without action
   */
  export type ParkingCountOutputTypeCountReservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservationWhereInput
  }


  /**
   * Count Type VehicleTypeCountOutputType
   */

  export type VehicleTypeCountOutputType = {
    reservations: number
  }

  export type VehicleTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservations?: boolean | VehicleTypeCountOutputTypeCountReservationsArgs
  }

  // Custom InputTypes
  /**
   * VehicleTypeCountOutputType without action
   */
  export type VehicleTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleTypeCountOutputType
     */
    select?: VehicleTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VehicleTypeCountOutputType without action
   */
  export type VehicleTypeCountOutputTypeCountReservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservationWhereInput
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
    userCode: number | null
    userRol: number | null
    userStatus: number | null
  }

  export type UserSumAggregateOutputType = {
    userCode: number | null
    userRol: number | null
    userStatus: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    userCode: number | null
    userName: string | null
    userEmail: string | null
    userRol: number | null
    userStatus: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    userCode: number | null
    userName: string | null
    userEmail: string | null
    userRol: number | null
    userStatus: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    userCode: number
    userName: number
    userEmail: number
    userRol: number
    userStatus: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    userCode?: true
    userRol?: true
    userStatus?: true
  }

  export type UserSumAggregateInputType = {
    userCode?: true
    userRol?: true
    userStatus?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    userCode?: true
    userName?: true
    userEmail?: true
    userRol?: true
    userStatus?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    userCode?: true
    userName?: true
    userEmail?: true
    userRol?: true
    userStatus?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    userCode?: true
    userName?: true
    userEmail?: true
    userRol?: true
    userStatus?: true
    createdAt?: true
    updatedAt?: true
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
    id: string
    userCode: number
    userName: string
    userEmail: string
    userRol: number
    userStatus: number
    createdAt: Date
    updatedAt: Date
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
    userCode?: boolean
    userName?: boolean
    userEmail?: boolean
    userRol?: boolean
    userStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    reservations?: boolean | User$reservationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    userCode?: boolean
    userName?: boolean
    userEmail?: boolean
    userRol?: boolean
    userStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userCode" | "userName" | "userEmail" | "userRol" | "userStatus" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservations?: boolean | User$reservationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      reservations: Prisma.$ReservationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userCode: number
      userName: string
      userEmail: string
      userRol: number
      userStatus: number
      createdAt: Date
      updatedAt: Date
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
    reservations<T extends User$reservationsArgs<ExtArgs> = {}>(args?: Subset<T, User$reservationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'String'>
    readonly userCode: FieldRef<"User", 'Int'>
    readonly userName: FieldRef<"User", 'String'>
    readonly userEmail: FieldRef<"User", 'String'>
    readonly userRol: FieldRef<"User", 'Int'>
    readonly userStatus: FieldRef<"User", 'Int'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
   * User.reservations
   */
  export type User$reservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    where?: ReservationWhereInput
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    cursor?: ReservationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
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
   * Model Parking
   */

  export type AggregateParking = {
    _count: ParkingCountAggregateOutputType | null
    _avg: ParkingAvgAggregateOutputType | null
    _sum: ParkingSumAggregateOutputType | null
    _min: ParkingMinAggregateOutputType | null
    _max: ParkingMaxAggregateOutputType | null
  }

  export type ParkingAvgAggregateOutputType = {
    places: number | null
    status: number | null
  }

  export type ParkingSumAggregateOutputType = {
    places: number | null
    status: number | null
  }

  export type ParkingMinAggregateOutputType = {
    id: string | null
    location: string | null
    places: number | null
    status: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ParkingMaxAggregateOutputType = {
    id: string | null
    location: string | null
    places: number | null
    status: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ParkingCountAggregateOutputType = {
    id: number
    location: number
    places: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ParkingAvgAggregateInputType = {
    places?: true
    status?: true
  }

  export type ParkingSumAggregateInputType = {
    places?: true
    status?: true
  }

  export type ParkingMinAggregateInputType = {
    id?: true
    location?: true
    places?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ParkingMaxAggregateInputType = {
    id?: true
    location?: true
    places?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ParkingCountAggregateInputType = {
    id?: true
    location?: true
    places?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ParkingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Parking to aggregate.
     */
    where?: ParkingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parkings to fetch.
     */
    orderBy?: ParkingOrderByWithRelationInput | ParkingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParkingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parkings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parkings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Parkings
    **/
    _count?: true | ParkingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ParkingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ParkingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParkingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParkingMaxAggregateInputType
  }

  export type GetParkingAggregateType<T extends ParkingAggregateArgs> = {
        [P in keyof T & keyof AggregateParking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParking[P]>
      : GetScalarType<T[P], AggregateParking[P]>
  }




  export type ParkingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParkingWhereInput
    orderBy?: ParkingOrderByWithAggregationInput | ParkingOrderByWithAggregationInput[]
    by: ParkingScalarFieldEnum[] | ParkingScalarFieldEnum
    having?: ParkingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParkingCountAggregateInputType | true
    _avg?: ParkingAvgAggregateInputType
    _sum?: ParkingSumAggregateInputType
    _min?: ParkingMinAggregateInputType
    _max?: ParkingMaxAggregateInputType
  }

  export type ParkingGroupByOutputType = {
    id: string
    location: string
    places: number
    status: number
    createdAt: Date
    updatedAt: Date
    _count: ParkingCountAggregateOutputType | null
    _avg: ParkingAvgAggregateOutputType | null
    _sum: ParkingSumAggregateOutputType | null
    _min: ParkingMinAggregateOutputType | null
    _max: ParkingMaxAggregateOutputType | null
  }

  type GetParkingGroupByPayload<T extends ParkingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParkingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParkingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParkingGroupByOutputType[P]>
            : GetScalarType<T[P], ParkingGroupByOutputType[P]>
        }
      >
    >


  export type ParkingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    location?: boolean
    places?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    reservations?: boolean | Parking$reservationsArgs<ExtArgs>
    _count?: boolean | ParkingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parking"]>



  export type ParkingSelectScalar = {
    id?: boolean
    location?: boolean
    places?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ParkingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "location" | "places" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["parking"]>
  export type ParkingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservations?: boolean | Parking$reservationsArgs<ExtArgs>
    _count?: boolean | ParkingCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ParkingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Parking"
    objects: {
      reservations: Prisma.$ReservationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      location: string
      places: number
      status: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["parking"]>
    composites: {}
  }

  type ParkingGetPayload<S extends boolean | null | undefined | ParkingDefaultArgs> = $Result.GetResult<Prisma.$ParkingPayload, S>

  type ParkingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ParkingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParkingCountAggregateInputType | true
    }

  export interface ParkingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Parking'], meta: { name: 'Parking' } }
    /**
     * Find zero or one Parking that matches the filter.
     * @param {ParkingFindUniqueArgs} args - Arguments to find a Parking
     * @example
     * // Get one Parking
     * const parking = await prisma.parking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParkingFindUniqueArgs>(args: SelectSubset<T, ParkingFindUniqueArgs<ExtArgs>>): Prisma__ParkingClient<$Result.GetResult<Prisma.$ParkingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Parking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ParkingFindUniqueOrThrowArgs} args - Arguments to find a Parking
     * @example
     * // Get one Parking
     * const parking = await prisma.parking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParkingFindUniqueOrThrowArgs>(args: SelectSubset<T, ParkingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParkingClient<$Result.GetResult<Prisma.$ParkingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Parking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingFindFirstArgs} args - Arguments to find a Parking
     * @example
     * // Get one Parking
     * const parking = await prisma.parking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParkingFindFirstArgs>(args?: SelectSubset<T, ParkingFindFirstArgs<ExtArgs>>): Prisma__ParkingClient<$Result.GetResult<Prisma.$ParkingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Parking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingFindFirstOrThrowArgs} args - Arguments to find a Parking
     * @example
     * // Get one Parking
     * const parking = await prisma.parking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParkingFindFirstOrThrowArgs>(args?: SelectSubset<T, ParkingFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParkingClient<$Result.GetResult<Prisma.$ParkingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Parkings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Parkings
     * const parkings = await prisma.parking.findMany()
     * 
     * // Get first 10 Parkings
     * const parkings = await prisma.parking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const parkingWithIdOnly = await prisma.parking.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ParkingFindManyArgs>(args?: SelectSubset<T, ParkingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Parking.
     * @param {ParkingCreateArgs} args - Arguments to create a Parking.
     * @example
     * // Create one Parking
     * const Parking = await prisma.parking.create({
     *   data: {
     *     // ... data to create a Parking
     *   }
     * })
     * 
     */
    create<T extends ParkingCreateArgs>(args: SelectSubset<T, ParkingCreateArgs<ExtArgs>>): Prisma__ParkingClient<$Result.GetResult<Prisma.$ParkingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Parkings.
     * @param {ParkingCreateManyArgs} args - Arguments to create many Parkings.
     * @example
     * // Create many Parkings
     * const parking = await prisma.parking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParkingCreateManyArgs>(args?: SelectSubset<T, ParkingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Parking.
     * @param {ParkingDeleteArgs} args - Arguments to delete one Parking.
     * @example
     * // Delete one Parking
     * const Parking = await prisma.parking.delete({
     *   where: {
     *     // ... filter to delete one Parking
     *   }
     * })
     * 
     */
    delete<T extends ParkingDeleteArgs>(args: SelectSubset<T, ParkingDeleteArgs<ExtArgs>>): Prisma__ParkingClient<$Result.GetResult<Prisma.$ParkingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Parking.
     * @param {ParkingUpdateArgs} args - Arguments to update one Parking.
     * @example
     * // Update one Parking
     * const parking = await prisma.parking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParkingUpdateArgs>(args: SelectSubset<T, ParkingUpdateArgs<ExtArgs>>): Prisma__ParkingClient<$Result.GetResult<Prisma.$ParkingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Parkings.
     * @param {ParkingDeleteManyArgs} args - Arguments to filter Parkings to delete.
     * @example
     * // Delete a few Parkings
     * const { count } = await prisma.parking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParkingDeleteManyArgs>(args?: SelectSubset<T, ParkingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Parkings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Parkings
     * const parking = await prisma.parking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParkingUpdateManyArgs>(args: SelectSubset<T, ParkingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Parking.
     * @param {ParkingUpsertArgs} args - Arguments to update or create a Parking.
     * @example
     * // Update or create a Parking
     * const parking = await prisma.parking.upsert({
     *   create: {
     *     // ... data to create a Parking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Parking we want to update
     *   }
     * })
     */
    upsert<T extends ParkingUpsertArgs>(args: SelectSubset<T, ParkingUpsertArgs<ExtArgs>>): Prisma__ParkingClient<$Result.GetResult<Prisma.$ParkingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Parkings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingCountArgs} args - Arguments to filter Parkings to count.
     * @example
     * // Count the number of Parkings
     * const count = await prisma.parking.count({
     *   where: {
     *     // ... the filter for the Parkings we want to count
     *   }
     * })
    **/
    count<T extends ParkingCountArgs>(
      args?: Subset<T, ParkingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParkingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Parking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ParkingAggregateArgs>(args: Subset<T, ParkingAggregateArgs>): Prisma.PrismaPromise<GetParkingAggregateType<T>>

    /**
     * Group by Parking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingGroupByArgs} args - Group by arguments.
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
      T extends ParkingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParkingGroupByArgs['orderBy'] }
        : { orderBy?: ParkingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ParkingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParkingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Parking model
   */
  readonly fields: ParkingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Parking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParkingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reservations<T extends Parking$reservationsArgs<ExtArgs> = {}>(args?: Subset<T, Parking$reservationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Parking model
   */
  interface ParkingFieldRefs {
    readonly id: FieldRef<"Parking", 'String'>
    readonly location: FieldRef<"Parking", 'String'>
    readonly places: FieldRef<"Parking", 'Int'>
    readonly status: FieldRef<"Parking", 'Int'>
    readonly createdAt: FieldRef<"Parking", 'DateTime'>
    readonly updatedAt: FieldRef<"Parking", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Parking findUnique
   */
  export type ParkingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parking
     */
    select?: ParkingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parking
     */
    omit?: ParkingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingInclude<ExtArgs> | null
    /**
     * Filter, which Parking to fetch.
     */
    where: ParkingWhereUniqueInput
  }

  /**
   * Parking findUniqueOrThrow
   */
  export type ParkingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parking
     */
    select?: ParkingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parking
     */
    omit?: ParkingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingInclude<ExtArgs> | null
    /**
     * Filter, which Parking to fetch.
     */
    where: ParkingWhereUniqueInput
  }

  /**
   * Parking findFirst
   */
  export type ParkingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parking
     */
    select?: ParkingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parking
     */
    omit?: ParkingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingInclude<ExtArgs> | null
    /**
     * Filter, which Parking to fetch.
     */
    where?: ParkingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parkings to fetch.
     */
    orderBy?: ParkingOrderByWithRelationInput | ParkingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Parkings.
     */
    cursor?: ParkingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parkings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parkings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parkings.
     */
    distinct?: ParkingScalarFieldEnum | ParkingScalarFieldEnum[]
  }

  /**
   * Parking findFirstOrThrow
   */
  export type ParkingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parking
     */
    select?: ParkingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parking
     */
    omit?: ParkingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingInclude<ExtArgs> | null
    /**
     * Filter, which Parking to fetch.
     */
    where?: ParkingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parkings to fetch.
     */
    orderBy?: ParkingOrderByWithRelationInput | ParkingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Parkings.
     */
    cursor?: ParkingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parkings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parkings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parkings.
     */
    distinct?: ParkingScalarFieldEnum | ParkingScalarFieldEnum[]
  }

  /**
   * Parking findMany
   */
  export type ParkingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parking
     */
    select?: ParkingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parking
     */
    omit?: ParkingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingInclude<ExtArgs> | null
    /**
     * Filter, which Parkings to fetch.
     */
    where?: ParkingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parkings to fetch.
     */
    orderBy?: ParkingOrderByWithRelationInput | ParkingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Parkings.
     */
    cursor?: ParkingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parkings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parkings.
     */
    skip?: number
    distinct?: ParkingScalarFieldEnum | ParkingScalarFieldEnum[]
  }

  /**
   * Parking create
   */
  export type ParkingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parking
     */
    select?: ParkingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parking
     */
    omit?: ParkingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingInclude<ExtArgs> | null
    /**
     * The data needed to create a Parking.
     */
    data: XOR<ParkingCreateInput, ParkingUncheckedCreateInput>
  }

  /**
   * Parking createMany
   */
  export type ParkingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Parkings.
     */
    data: ParkingCreateManyInput | ParkingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Parking update
   */
  export type ParkingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parking
     */
    select?: ParkingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parking
     */
    omit?: ParkingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingInclude<ExtArgs> | null
    /**
     * The data needed to update a Parking.
     */
    data: XOR<ParkingUpdateInput, ParkingUncheckedUpdateInput>
    /**
     * Choose, which Parking to update.
     */
    where: ParkingWhereUniqueInput
  }

  /**
   * Parking updateMany
   */
  export type ParkingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Parkings.
     */
    data: XOR<ParkingUpdateManyMutationInput, ParkingUncheckedUpdateManyInput>
    /**
     * Filter which Parkings to update
     */
    where?: ParkingWhereInput
    /**
     * Limit how many Parkings to update.
     */
    limit?: number
  }

  /**
   * Parking upsert
   */
  export type ParkingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parking
     */
    select?: ParkingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parking
     */
    omit?: ParkingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingInclude<ExtArgs> | null
    /**
     * The filter to search for the Parking to update in case it exists.
     */
    where: ParkingWhereUniqueInput
    /**
     * In case the Parking found by the `where` argument doesn't exist, create a new Parking with this data.
     */
    create: XOR<ParkingCreateInput, ParkingUncheckedCreateInput>
    /**
     * In case the Parking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParkingUpdateInput, ParkingUncheckedUpdateInput>
  }

  /**
   * Parking delete
   */
  export type ParkingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parking
     */
    select?: ParkingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parking
     */
    omit?: ParkingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingInclude<ExtArgs> | null
    /**
     * Filter which Parking to delete.
     */
    where: ParkingWhereUniqueInput
  }

  /**
   * Parking deleteMany
   */
  export type ParkingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Parkings to delete
     */
    where?: ParkingWhereInput
    /**
     * Limit how many Parkings to delete.
     */
    limit?: number
  }

  /**
   * Parking.reservations
   */
  export type Parking$reservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    where?: ReservationWhereInput
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    cursor?: ReservationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * Parking without action
   */
  export type ParkingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parking
     */
    select?: ParkingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parking
     */
    omit?: ParkingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingInclude<ExtArgs> | null
  }


  /**
   * Model VehicleType
   */

  export type AggregateVehicleType = {
    _count: VehicleTypeCountAggregateOutputType | null
    _min: VehicleTypeMinAggregateOutputType | null
    _max: VehicleTypeMaxAggregateOutputType | null
  }

  export type VehicleTypeMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VehicleTypeMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VehicleTypeCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VehicleTypeMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VehicleTypeMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VehicleTypeCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VehicleTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VehicleType to aggregate.
     */
    where?: VehicleTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VehicleTypes to fetch.
     */
    orderBy?: VehicleTypeOrderByWithRelationInput | VehicleTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VehicleTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VehicleTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VehicleTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VehicleTypes
    **/
    _count?: true | VehicleTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VehicleTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VehicleTypeMaxAggregateInputType
  }

  export type GetVehicleTypeAggregateType<T extends VehicleTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateVehicleType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVehicleType[P]>
      : GetScalarType<T[P], AggregateVehicleType[P]>
  }




  export type VehicleTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehicleTypeWhereInput
    orderBy?: VehicleTypeOrderByWithAggregationInput | VehicleTypeOrderByWithAggregationInput[]
    by: VehicleTypeScalarFieldEnum[] | VehicleTypeScalarFieldEnum
    having?: VehicleTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VehicleTypeCountAggregateInputType | true
    _min?: VehicleTypeMinAggregateInputType
    _max?: VehicleTypeMaxAggregateInputType
  }

  export type VehicleTypeGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: VehicleTypeCountAggregateOutputType | null
    _min: VehicleTypeMinAggregateOutputType | null
    _max: VehicleTypeMaxAggregateOutputType | null
  }

  type GetVehicleTypeGroupByPayload<T extends VehicleTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VehicleTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VehicleTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VehicleTypeGroupByOutputType[P]>
            : GetScalarType<T[P], VehicleTypeGroupByOutputType[P]>
        }
      >
    >


  export type VehicleTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    reservations?: boolean | VehicleType$reservationsArgs<ExtArgs>
    _count?: boolean | VehicleTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicleType"]>



  export type VehicleTypeSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VehicleTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["vehicleType"]>
  export type VehicleTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservations?: boolean | VehicleType$reservationsArgs<ExtArgs>
    _count?: boolean | VehicleTypeCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $VehicleTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VehicleType"
    objects: {
      reservations: Prisma.$ReservationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["vehicleType"]>
    composites: {}
  }

  type VehicleTypeGetPayload<S extends boolean | null | undefined | VehicleTypeDefaultArgs> = $Result.GetResult<Prisma.$VehicleTypePayload, S>

  type VehicleTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VehicleTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VehicleTypeCountAggregateInputType | true
    }

  export interface VehicleTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VehicleType'], meta: { name: 'VehicleType' } }
    /**
     * Find zero or one VehicleType that matches the filter.
     * @param {VehicleTypeFindUniqueArgs} args - Arguments to find a VehicleType
     * @example
     * // Get one VehicleType
     * const vehicleType = await prisma.vehicleType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VehicleTypeFindUniqueArgs>(args: SelectSubset<T, VehicleTypeFindUniqueArgs<ExtArgs>>): Prisma__VehicleTypeClient<$Result.GetResult<Prisma.$VehicleTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VehicleType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VehicleTypeFindUniqueOrThrowArgs} args - Arguments to find a VehicleType
     * @example
     * // Get one VehicleType
     * const vehicleType = await prisma.vehicleType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VehicleTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, VehicleTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VehicleTypeClient<$Result.GetResult<Prisma.$VehicleTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VehicleType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleTypeFindFirstArgs} args - Arguments to find a VehicleType
     * @example
     * // Get one VehicleType
     * const vehicleType = await prisma.vehicleType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VehicleTypeFindFirstArgs>(args?: SelectSubset<T, VehicleTypeFindFirstArgs<ExtArgs>>): Prisma__VehicleTypeClient<$Result.GetResult<Prisma.$VehicleTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VehicleType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleTypeFindFirstOrThrowArgs} args - Arguments to find a VehicleType
     * @example
     * // Get one VehicleType
     * const vehicleType = await prisma.vehicleType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VehicleTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, VehicleTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__VehicleTypeClient<$Result.GetResult<Prisma.$VehicleTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VehicleTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VehicleTypes
     * const vehicleTypes = await prisma.vehicleType.findMany()
     * 
     * // Get first 10 VehicleTypes
     * const vehicleTypes = await prisma.vehicleType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vehicleTypeWithIdOnly = await prisma.vehicleType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VehicleTypeFindManyArgs>(args?: SelectSubset<T, VehicleTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehicleTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VehicleType.
     * @param {VehicleTypeCreateArgs} args - Arguments to create a VehicleType.
     * @example
     * // Create one VehicleType
     * const VehicleType = await prisma.vehicleType.create({
     *   data: {
     *     // ... data to create a VehicleType
     *   }
     * })
     * 
     */
    create<T extends VehicleTypeCreateArgs>(args: SelectSubset<T, VehicleTypeCreateArgs<ExtArgs>>): Prisma__VehicleTypeClient<$Result.GetResult<Prisma.$VehicleTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VehicleTypes.
     * @param {VehicleTypeCreateManyArgs} args - Arguments to create many VehicleTypes.
     * @example
     * // Create many VehicleTypes
     * const vehicleType = await prisma.vehicleType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VehicleTypeCreateManyArgs>(args?: SelectSubset<T, VehicleTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a VehicleType.
     * @param {VehicleTypeDeleteArgs} args - Arguments to delete one VehicleType.
     * @example
     * // Delete one VehicleType
     * const VehicleType = await prisma.vehicleType.delete({
     *   where: {
     *     // ... filter to delete one VehicleType
     *   }
     * })
     * 
     */
    delete<T extends VehicleTypeDeleteArgs>(args: SelectSubset<T, VehicleTypeDeleteArgs<ExtArgs>>): Prisma__VehicleTypeClient<$Result.GetResult<Prisma.$VehicleTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VehicleType.
     * @param {VehicleTypeUpdateArgs} args - Arguments to update one VehicleType.
     * @example
     * // Update one VehicleType
     * const vehicleType = await prisma.vehicleType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VehicleTypeUpdateArgs>(args: SelectSubset<T, VehicleTypeUpdateArgs<ExtArgs>>): Prisma__VehicleTypeClient<$Result.GetResult<Prisma.$VehicleTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VehicleTypes.
     * @param {VehicleTypeDeleteManyArgs} args - Arguments to filter VehicleTypes to delete.
     * @example
     * // Delete a few VehicleTypes
     * const { count } = await prisma.vehicleType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VehicleTypeDeleteManyArgs>(args?: SelectSubset<T, VehicleTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VehicleTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VehicleTypes
     * const vehicleType = await prisma.vehicleType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VehicleTypeUpdateManyArgs>(args: SelectSubset<T, VehicleTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VehicleType.
     * @param {VehicleTypeUpsertArgs} args - Arguments to update or create a VehicleType.
     * @example
     * // Update or create a VehicleType
     * const vehicleType = await prisma.vehicleType.upsert({
     *   create: {
     *     // ... data to create a VehicleType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VehicleType we want to update
     *   }
     * })
     */
    upsert<T extends VehicleTypeUpsertArgs>(args: SelectSubset<T, VehicleTypeUpsertArgs<ExtArgs>>): Prisma__VehicleTypeClient<$Result.GetResult<Prisma.$VehicleTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VehicleTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleTypeCountArgs} args - Arguments to filter VehicleTypes to count.
     * @example
     * // Count the number of VehicleTypes
     * const count = await prisma.vehicleType.count({
     *   where: {
     *     // ... the filter for the VehicleTypes we want to count
     *   }
     * })
    **/
    count<T extends VehicleTypeCountArgs>(
      args?: Subset<T, VehicleTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VehicleTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VehicleType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VehicleTypeAggregateArgs>(args: Subset<T, VehicleTypeAggregateArgs>): Prisma.PrismaPromise<GetVehicleTypeAggregateType<T>>

    /**
     * Group by VehicleType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleTypeGroupByArgs} args - Group by arguments.
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
      T extends VehicleTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VehicleTypeGroupByArgs['orderBy'] }
        : { orderBy?: VehicleTypeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VehicleTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVehicleTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VehicleType model
   */
  readonly fields: VehicleTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VehicleType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VehicleTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reservations<T extends VehicleType$reservationsArgs<ExtArgs> = {}>(args?: Subset<T, VehicleType$reservationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the VehicleType model
   */
  interface VehicleTypeFieldRefs {
    readonly id: FieldRef<"VehicleType", 'String'>
    readonly name: FieldRef<"VehicleType", 'String'>
    readonly createdAt: FieldRef<"VehicleType", 'DateTime'>
    readonly updatedAt: FieldRef<"VehicleType", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VehicleType findUnique
   */
  export type VehicleTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleType
     */
    select?: VehicleTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleType
     */
    omit?: VehicleTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleTypeInclude<ExtArgs> | null
    /**
     * Filter, which VehicleType to fetch.
     */
    where: VehicleTypeWhereUniqueInput
  }

  /**
   * VehicleType findUniqueOrThrow
   */
  export type VehicleTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleType
     */
    select?: VehicleTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleType
     */
    omit?: VehicleTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleTypeInclude<ExtArgs> | null
    /**
     * Filter, which VehicleType to fetch.
     */
    where: VehicleTypeWhereUniqueInput
  }

  /**
   * VehicleType findFirst
   */
  export type VehicleTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleType
     */
    select?: VehicleTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleType
     */
    omit?: VehicleTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleTypeInclude<ExtArgs> | null
    /**
     * Filter, which VehicleType to fetch.
     */
    where?: VehicleTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VehicleTypes to fetch.
     */
    orderBy?: VehicleTypeOrderByWithRelationInput | VehicleTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VehicleTypes.
     */
    cursor?: VehicleTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VehicleTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VehicleTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VehicleTypes.
     */
    distinct?: VehicleTypeScalarFieldEnum | VehicleTypeScalarFieldEnum[]
  }

  /**
   * VehicleType findFirstOrThrow
   */
  export type VehicleTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleType
     */
    select?: VehicleTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleType
     */
    omit?: VehicleTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleTypeInclude<ExtArgs> | null
    /**
     * Filter, which VehicleType to fetch.
     */
    where?: VehicleTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VehicleTypes to fetch.
     */
    orderBy?: VehicleTypeOrderByWithRelationInput | VehicleTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VehicleTypes.
     */
    cursor?: VehicleTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VehicleTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VehicleTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VehicleTypes.
     */
    distinct?: VehicleTypeScalarFieldEnum | VehicleTypeScalarFieldEnum[]
  }

  /**
   * VehicleType findMany
   */
  export type VehicleTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleType
     */
    select?: VehicleTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleType
     */
    omit?: VehicleTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleTypeInclude<ExtArgs> | null
    /**
     * Filter, which VehicleTypes to fetch.
     */
    where?: VehicleTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VehicleTypes to fetch.
     */
    orderBy?: VehicleTypeOrderByWithRelationInput | VehicleTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VehicleTypes.
     */
    cursor?: VehicleTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VehicleTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VehicleTypes.
     */
    skip?: number
    distinct?: VehicleTypeScalarFieldEnum | VehicleTypeScalarFieldEnum[]
  }

  /**
   * VehicleType create
   */
  export type VehicleTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleType
     */
    select?: VehicleTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleType
     */
    omit?: VehicleTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a VehicleType.
     */
    data: XOR<VehicleTypeCreateInput, VehicleTypeUncheckedCreateInput>
  }

  /**
   * VehicleType createMany
   */
  export type VehicleTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VehicleTypes.
     */
    data: VehicleTypeCreateManyInput | VehicleTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VehicleType update
   */
  export type VehicleTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleType
     */
    select?: VehicleTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleType
     */
    omit?: VehicleTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a VehicleType.
     */
    data: XOR<VehicleTypeUpdateInput, VehicleTypeUncheckedUpdateInput>
    /**
     * Choose, which VehicleType to update.
     */
    where: VehicleTypeWhereUniqueInput
  }

  /**
   * VehicleType updateMany
   */
  export type VehicleTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VehicleTypes.
     */
    data: XOR<VehicleTypeUpdateManyMutationInput, VehicleTypeUncheckedUpdateManyInput>
    /**
     * Filter which VehicleTypes to update
     */
    where?: VehicleTypeWhereInput
    /**
     * Limit how many VehicleTypes to update.
     */
    limit?: number
  }

  /**
   * VehicleType upsert
   */
  export type VehicleTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleType
     */
    select?: VehicleTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleType
     */
    omit?: VehicleTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the VehicleType to update in case it exists.
     */
    where: VehicleTypeWhereUniqueInput
    /**
     * In case the VehicleType found by the `where` argument doesn't exist, create a new VehicleType with this data.
     */
    create: XOR<VehicleTypeCreateInput, VehicleTypeUncheckedCreateInput>
    /**
     * In case the VehicleType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VehicleTypeUpdateInput, VehicleTypeUncheckedUpdateInput>
  }

  /**
   * VehicleType delete
   */
  export type VehicleTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleType
     */
    select?: VehicleTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleType
     */
    omit?: VehicleTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleTypeInclude<ExtArgs> | null
    /**
     * Filter which VehicleType to delete.
     */
    where: VehicleTypeWhereUniqueInput
  }

  /**
   * VehicleType deleteMany
   */
  export type VehicleTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VehicleTypes to delete
     */
    where?: VehicleTypeWhereInput
    /**
     * Limit how many VehicleTypes to delete.
     */
    limit?: number
  }

  /**
   * VehicleType.reservations
   */
  export type VehicleType$reservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    where?: ReservationWhereInput
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    cursor?: ReservationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * VehicleType without action
   */
  export type VehicleTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleType
     */
    select?: VehicleTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleType
     */
    omit?: VehicleTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleTypeInclude<ExtArgs> | null
  }


  /**
   * Model Reservation
   */

  export type AggregateReservation = {
    _count: ReservationCountAggregateOutputType | null
    _avg: ReservationAvgAggregateOutputType | null
    _sum: ReservationSumAggregateOutputType | null
    _min: ReservationMinAggregateOutputType | null
    _max: ReservationMaxAggregateOutputType | null
  }

  export type ReservationAvgAggregateOutputType = {
    userCode: number | null
  }

  export type ReservationSumAggregateOutputType = {
    userCode: number | null
  }

  export type ReservationMinAggregateOutputType = {
    id: string | null
    parkingId: string | null
    userCode: number | null
    vehiclePlate: string | null
    vehicleTypeId: string | null
    vehicleModel: string | null
    reservationDate: Date | null
    reservationStatus: $Enums.ReservationStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReservationMaxAggregateOutputType = {
    id: string | null
    parkingId: string | null
    userCode: number | null
    vehiclePlate: string | null
    vehicleTypeId: string | null
    vehicleModel: string | null
    reservationDate: Date | null
    reservationStatus: $Enums.ReservationStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReservationCountAggregateOutputType = {
    id: number
    parkingId: number
    userCode: number
    vehiclePlate: number
    vehicleTypeId: number
    vehicleModel: number
    reservationDate: number
    reservationStatus: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReservationAvgAggregateInputType = {
    userCode?: true
  }

  export type ReservationSumAggregateInputType = {
    userCode?: true
  }

  export type ReservationMinAggregateInputType = {
    id?: true
    parkingId?: true
    userCode?: true
    vehiclePlate?: true
    vehicleTypeId?: true
    vehicleModel?: true
    reservationDate?: true
    reservationStatus?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReservationMaxAggregateInputType = {
    id?: true
    parkingId?: true
    userCode?: true
    vehiclePlate?: true
    vehicleTypeId?: true
    vehicleModel?: true
    reservationDate?: true
    reservationStatus?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReservationCountAggregateInputType = {
    id?: true
    parkingId?: true
    userCode?: true
    vehiclePlate?: true
    vehicleTypeId?: true
    vehicleModel?: true
    reservationDate?: true
    reservationStatus?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReservationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reservation to aggregate.
     */
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reservations
    **/
    _count?: true | ReservationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReservationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReservationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReservationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReservationMaxAggregateInputType
  }

  export type GetReservationAggregateType<T extends ReservationAggregateArgs> = {
        [P in keyof T & keyof AggregateReservation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReservation[P]>
      : GetScalarType<T[P], AggregateReservation[P]>
  }




  export type ReservationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservationWhereInput
    orderBy?: ReservationOrderByWithAggregationInput | ReservationOrderByWithAggregationInput[]
    by: ReservationScalarFieldEnum[] | ReservationScalarFieldEnum
    having?: ReservationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReservationCountAggregateInputType | true
    _avg?: ReservationAvgAggregateInputType
    _sum?: ReservationSumAggregateInputType
    _min?: ReservationMinAggregateInputType
    _max?: ReservationMaxAggregateInputType
  }

  export type ReservationGroupByOutputType = {
    id: string
    parkingId: string
    userCode: number
    vehiclePlate: string
    vehicleTypeId: string
    vehicleModel: string
    reservationDate: Date
    reservationStatus: $Enums.ReservationStatus
    createdAt: Date
    updatedAt: Date
    _count: ReservationCountAggregateOutputType | null
    _avg: ReservationAvgAggregateOutputType | null
    _sum: ReservationSumAggregateOutputType | null
    _min: ReservationMinAggregateOutputType | null
    _max: ReservationMaxAggregateOutputType | null
  }

  type GetReservationGroupByPayload<T extends ReservationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReservationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReservationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReservationGroupByOutputType[P]>
            : GetScalarType<T[P], ReservationGroupByOutputType[P]>
        }
      >
    >


  export type ReservationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    parkingId?: boolean
    userCode?: boolean
    vehiclePlate?: boolean
    vehicleTypeId?: boolean
    vehicleModel?: boolean
    reservationDate?: boolean
    reservationStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    parking?: boolean | ParkingDefaultArgs<ExtArgs>
    vehicleType?: boolean | VehicleTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reservation"]>



  export type ReservationSelectScalar = {
    id?: boolean
    parkingId?: boolean
    userCode?: boolean
    vehiclePlate?: boolean
    vehicleTypeId?: boolean
    vehicleModel?: boolean
    reservationDate?: boolean
    reservationStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ReservationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "parkingId" | "userCode" | "vehiclePlate" | "vehicleTypeId" | "vehicleModel" | "reservationDate" | "reservationStatus" | "createdAt" | "updatedAt", ExtArgs["result"]["reservation"]>
  export type ReservationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    parking?: boolean | ParkingDefaultArgs<ExtArgs>
    vehicleType?: boolean | VehicleTypeDefaultArgs<ExtArgs>
  }

  export type $ReservationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reservation"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      parking: Prisma.$ParkingPayload<ExtArgs>
      vehicleType: Prisma.$VehicleTypePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      parkingId: string
      userCode: number
      vehiclePlate: string
      vehicleTypeId: string
      vehicleModel: string
      reservationDate: Date
      reservationStatus: $Enums.ReservationStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["reservation"]>
    composites: {}
  }

  type ReservationGetPayload<S extends boolean | null | undefined | ReservationDefaultArgs> = $Result.GetResult<Prisma.$ReservationPayload, S>

  type ReservationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReservationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReservationCountAggregateInputType | true
    }

  export interface ReservationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reservation'], meta: { name: 'Reservation' } }
    /**
     * Find zero or one Reservation that matches the filter.
     * @param {ReservationFindUniqueArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReservationFindUniqueArgs>(args: SelectSubset<T, ReservationFindUniqueArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reservation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReservationFindUniqueOrThrowArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReservationFindUniqueOrThrowArgs>(args: SelectSubset<T, ReservationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reservation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationFindFirstArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReservationFindFirstArgs>(args?: SelectSubset<T, ReservationFindFirstArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reservation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationFindFirstOrThrowArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReservationFindFirstOrThrowArgs>(args?: SelectSubset<T, ReservationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reservations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reservations
     * const reservations = await prisma.reservation.findMany()
     * 
     * // Get first 10 Reservations
     * const reservations = await prisma.reservation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reservationWithIdOnly = await prisma.reservation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReservationFindManyArgs>(args?: SelectSubset<T, ReservationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reservation.
     * @param {ReservationCreateArgs} args - Arguments to create a Reservation.
     * @example
     * // Create one Reservation
     * const Reservation = await prisma.reservation.create({
     *   data: {
     *     // ... data to create a Reservation
     *   }
     * })
     * 
     */
    create<T extends ReservationCreateArgs>(args: SelectSubset<T, ReservationCreateArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reservations.
     * @param {ReservationCreateManyArgs} args - Arguments to create many Reservations.
     * @example
     * // Create many Reservations
     * const reservation = await prisma.reservation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReservationCreateManyArgs>(args?: SelectSubset<T, ReservationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Reservation.
     * @param {ReservationDeleteArgs} args - Arguments to delete one Reservation.
     * @example
     * // Delete one Reservation
     * const Reservation = await prisma.reservation.delete({
     *   where: {
     *     // ... filter to delete one Reservation
     *   }
     * })
     * 
     */
    delete<T extends ReservationDeleteArgs>(args: SelectSubset<T, ReservationDeleteArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reservation.
     * @param {ReservationUpdateArgs} args - Arguments to update one Reservation.
     * @example
     * // Update one Reservation
     * const reservation = await prisma.reservation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReservationUpdateArgs>(args: SelectSubset<T, ReservationUpdateArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reservations.
     * @param {ReservationDeleteManyArgs} args - Arguments to filter Reservations to delete.
     * @example
     * // Delete a few Reservations
     * const { count } = await prisma.reservation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReservationDeleteManyArgs>(args?: SelectSubset<T, ReservationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reservations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reservations
     * const reservation = await prisma.reservation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReservationUpdateManyArgs>(args: SelectSubset<T, ReservationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Reservation.
     * @param {ReservationUpsertArgs} args - Arguments to update or create a Reservation.
     * @example
     * // Update or create a Reservation
     * const reservation = await prisma.reservation.upsert({
     *   create: {
     *     // ... data to create a Reservation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reservation we want to update
     *   }
     * })
     */
    upsert<T extends ReservationUpsertArgs>(args: SelectSubset<T, ReservationUpsertArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reservations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationCountArgs} args - Arguments to filter Reservations to count.
     * @example
     * // Count the number of Reservations
     * const count = await prisma.reservation.count({
     *   where: {
     *     // ... the filter for the Reservations we want to count
     *   }
     * })
    **/
    count<T extends ReservationCountArgs>(
      args?: Subset<T, ReservationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReservationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reservation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReservationAggregateArgs>(args: Subset<T, ReservationAggregateArgs>): Prisma.PrismaPromise<GetReservationAggregateType<T>>

    /**
     * Group by Reservation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationGroupByArgs} args - Group by arguments.
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
      T extends ReservationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReservationGroupByArgs['orderBy'] }
        : { orderBy?: ReservationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReservationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReservationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reservation model
   */
  readonly fields: ReservationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reservation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReservationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    parking<T extends ParkingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ParkingDefaultArgs<ExtArgs>>): Prisma__ParkingClient<$Result.GetResult<Prisma.$ParkingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    vehicleType<T extends VehicleTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VehicleTypeDefaultArgs<ExtArgs>>): Prisma__VehicleTypeClient<$Result.GetResult<Prisma.$VehicleTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Reservation model
   */
  interface ReservationFieldRefs {
    readonly id: FieldRef<"Reservation", 'String'>
    readonly parkingId: FieldRef<"Reservation", 'String'>
    readonly userCode: FieldRef<"Reservation", 'Int'>
    readonly vehiclePlate: FieldRef<"Reservation", 'String'>
    readonly vehicleTypeId: FieldRef<"Reservation", 'String'>
    readonly vehicleModel: FieldRef<"Reservation", 'String'>
    readonly reservationDate: FieldRef<"Reservation", 'DateTime'>
    readonly reservationStatus: FieldRef<"Reservation", 'ReservationStatus'>
    readonly createdAt: FieldRef<"Reservation", 'DateTime'>
    readonly updatedAt: FieldRef<"Reservation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Reservation findUnique
   */
  export type ReservationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservation to fetch.
     */
    where: ReservationWhereUniqueInput
  }

  /**
   * Reservation findUniqueOrThrow
   */
  export type ReservationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservation to fetch.
     */
    where: ReservationWhereUniqueInput
  }

  /**
   * Reservation findFirst
   */
  export type ReservationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservation to fetch.
     */
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reservations.
     */
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reservations.
     */
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * Reservation findFirstOrThrow
   */
  export type ReservationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservation to fetch.
     */
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reservations.
     */
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reservations.
     */
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * Reservation findMany
   */
  export type ReservationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservations to fetch.
     */
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reservations.
     */
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * Reservation create
   */
  export type ReservationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * The data needed to create a Reservation.
     */
    data: XOR<ReservationCreateInput, ReservationUncheckedCreateInput>
  }

  /**
   * Reservation createMany
   */
  export type ReservationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reservations.
     */
    data: ReservationCreateManyInput | ReservationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reservation update
   */
  export type ReservationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * The data needed to update a Reservation.
     */
    data: XOR<ReservationUpdateInput, ReservationUncheckedUpdateInput>
    /**
     * Choose, which Reservation to update.
     */
    where: ReservationWhereUniqueInput
  }

  /**
   * Reservation updateMany
   */
  export type ReservationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reservations.
     */
    data: XOR<ReservationUpdateManyMutationInput, ReservationUncheckedUpdateManyInput>
    /**
     * Filter which Reservations to update
     */
    where?: ReservationWhereInput
    /**
     * Limit how many Reservations to update.
     */
    limit?: number
  }

  /**
   * Reservation upsert
   */
  export type ReservationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * The filter to search for the Reservation to update in case it exists.
     */
    where: ReservationWhereUniqueInput
    /**
     * In case the Reservation found by the `where` argument doesn't exist, create a new Reservation with this data.
     */
    create: XOR<ReservationCreateInput, ReservationUncheckedCreateInput>
    /**
     * In case the Reservation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReservationUpdateInput, ReservationUncheckedUpdateInput>
  }

  /**
   * Reservation delete
   */
  export type ReservationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter which Reservation to delete.
     */
    where: ReservationWhereUniqueInput
  }

  /**
   * Reservation deleteMany
   */
  export type ReservationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reservations to delete
     */
    where?: ReservationWhereInput
    /**
     * Limit how many Reservations to delete.
     */
    limit?: number
  }

  /**
   * Reservation without action
   */
  export type ReservationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
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
    userCode: 'userCode',
    userName: 'userName',
    userEmail: 'userEmail',
    userRol: 'userRol',
    userStatus: 'userStatus',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ParkingScalarFieldEnum: {
    id: 'id',
    location: 'location',
    places: 'places',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ParkingScalarFieldEnum = (typeof ParkingScalarFieldEnum)[keyof typeof ParkingScalarFieldEnum]


  export const VehicleTypeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VehicleTypeScalarFieldEnum = (typeof VehicleTypeScalarFieldEnum)[keyof typeof VehicleTypeScalarFieldEnum]


  export const ReservationScalarFieldEnum: {
    id: 'id',
    parkingId: 'parkingId',
    userCode: 'userCode',
    vehiclePlate: 'vehiclePlate',
    vehicleTypeId: 'vehicleTypeId',
    vehicleModel: 'vehicleModel',
    reservationDate: 'reservationDate',
    reservationStatus: 'reservationStatus',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReservationScalarFieldEnum = (typeof ReservationScalarFieldEnum)[keyof typeof ReservationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const UserOrderByRelevanceFieldEnum: {
    id: 'id',
    userName: 'userName',
    userEmail: 'userEmail'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const ParkingOrderByRelevanceFieldEnum: {
    id: 'id',
    location: 'location'
  };

  export type ParkingOrderByRelevanceFieldEnum = (typeof ParkingOrderByRelevanceFieldEnum)[keyof typeof ParkingOrderByRelevanceFieldEnum]


  export const VehicleTypeOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type VehicleTypeOrderByRelevanceFieldEnum = (typeof VehicleTypeOrderByRelevanceFieldEnum)[keyof typeof VehicleTypeOrderByRelevanceFieldEnum]


  export const ReservationOrderByRelevanceFieldEnum: {
    id: 'id',
    parkingId: 'parkingId',
    vehiclePlate: 'vehiclePlate',
    vehicleTypeId: 'vehicleTypeId',
    vehicleModel: 'vehicleModel'
  };

  export type ReservationOrderByRelevanceFieldEnum = (typeof ReservationOrderByRelevanceFieldEnum)[keyof typeof ReservationOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'ReservationStatus'
   */
  export type EnumReservationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReservationStatus'>
    


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
    id?: StringFilter<"User"> | string
    userCode?: IntFilter<"User"> | number
    userName?: StringFilter<"User"> | string
    userEmail?: StringFilter<"User"> | string
    userRol?: IntFilter<"User"> | number
    userStatus?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    reservations?: ReservationListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    userCode?: SortOrder
    userName?: SortOrder
    userEmail?: SortOrder
    userRol?: SortOrder
    userStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    reservations?: ReservationOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userCode?: number
    userEmail?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    userName?: StringFilter<"User"> | string
    userRol?: IntFilter<"User"> | number
    userStatus?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    reservations?: ReservationListRelationFilter
  }, "id" | "userCode" | "userEmail">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    userCode?: SortOrder
    userName?: SortOrder
    userEmail?: SortOrder
    userRol?: SortOrder
    userStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    id?: StringWithAggregatesFilter<"User"> | string
    userCode?: IntWithAggregatesFilter<"User"> | number
    userName?: StringWithAggregatesFilter<"User"> | string
    userEmail?: StringWithAggregatesFilter<"User"> | string
    userRol?: IntWithAggregatesFilter<"User"> | number
    userStatus?: IntWithAggregatesFilter<"User"> | number
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ParkingWhereInput = {
    AND?: ParkingWhereInput | ParkingWhereInput[]
    OR?: ParkingWhereInput[]
    NOT?: ParkingWhereInput | ParkingWhereInput[]
    id?: StringFilter<"Parking"> | string
    location?: StringFilter<"Parking"> | string
    places?: IntFilter<"Parking"> | number
    status?: IntFilter<"Parking"> | number
    createdAt?: DateTimeFilter<"Parking"> | Date | string
    updatedAt?: DateTimeFilter<"Parking"> | Date | string
    reservations?: ReservationListRelationFilter
  }

  export type ParkingOrderByWithRelationInput = {
    id?: SortOrder
    location?: SortOrder
    places?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    reservations?: ReservationOrderByRelationAggregateInput
    _relevance?: ParkingOrderByRelevanceInput
  }

  export type ParkingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ParkingWhereInput | ParkingWhereInput[]
    OR?: ParkingWhereInput[]
    NOT?: ParkingWhereInput | ParkingWhereInput[]
    location?: StringFilter<"Parking"> | string
    places?: IntFilter<"Parking"> | number
    status?: IntFilter<"Parking"> | number
    createdAt?: DateTimeFilter<"Parking"> | Date | string
    updatedAt?: DateTimeFilter<"Parking"> | Date | string
    reservations?: ReservationListRelationFilter
  }, "id">

  export type ParkingOrderByWithAggregationInput = {
    id?: SortOrder
    location?: SortOrder
    places?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ParkingCountOrderByAggregateInput
    _avg?: ParkingAvgOrderByAggregateInput
    _max?: ParkingMaxOrderByAggregateInput
    _min?: ParkingMinOrderByAggregateInput
    _sum?: ParkingSumOrderByAggregateInput
  }

  export type ParkingScalarWhereWithAggregatesInput = {
    AND?: ParkingScalarWhereWithAggregatesInput | ParkingScalarWhereWithAggregatesInput[]
    OR?: ParkingScalarWhereWithAggregatesInput[]
    NOT?: ParkingScalarWhereWithAggregatesInput | ParkingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Parking"> | string
    location?: StringWithAggregatesFilter<"Parking"> | string
    places?: IntWithAggregatesFilter<"Parking"> | number
    status?: IntWithAggregatesFilter<"Parking"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Parking"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Parking"> | Date | string
  }

  export type VehicleTypeWhereInput = {
    AND?: VehicleTypeWhereInput | VehicleTypeWhereInput[]
    OR?: VehicleTypeWhereInput[]
    NOT?: VehicleTypeWhereInput | VehicleTypeWhereInput[]
    id?: StringFilter<"VehicleType"> | string
    name?: StringFilter<"VehicleType"> | string
    createdAt?: DateTimeFilter<"VehicleType"> | Date | string
    updatedAt?: DateTimeFilter<"VehicleType"> | Date | string
    reservations?: ReservationListRelationFilter
  }

  export type VehicleTypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    reservations?: ReservationOrderByRelationAggregateInput
    _relevance?: VehicleTypeOrderByRelevanceInput
  }

  export type VehicleTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VehicleTypeWhereInput | VehicleTypeWhereInput[]
    OR?: VehicleTypeWhereInput[]
    NOT?: VehicleTypeWhereInput | VehicleTypeWhereInput[]
    name?: StringFilter<"VehicleType"> | string
    createdAt?: DateTimeFilter<"VehicleType"> | Date | string
    updatedAt?: DateTimeFilter<"VehicleType"> | Date | string
    reservations?: ReservationListRelationFilter
  }, "id">

  export type VehicleTypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VehicleTypeCountOrderByAggregateInput
    _max?: VehicleTypeMaxOrderByAggregateInput
    _min?: VehicleTypeMinOrderByAggregateInput
  }

  export type VehicleTypeScalarWhereWithAggregatesInput = {
    AND?: VehicleTypeScalarWhereWithAggregatesInput | VehicleTypeScalarWhereWithAggregatesInput[]
    OR?: VehicleTypeScalarWhereWithAggregatesInput[]
    NOT?: VehicleTypeScalarWhereWithAggregatesInput | VehicleTypeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VehicleType"> | string
    name?: StringWithAggregatesFilter<"VehicleType"> | string
    createdAt?: DateTimeWithAggregatesFilter<"VehicleType"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"VehicleType"> | Date | string
  }

  export type ReservationWhereInput = {
    AND?: ReservationWhereInput | ReservationWhereInput[]
    OR?: ReservationWhereInput[]
    NOT?: ReservationWhereInput | ReservationWhereInput[]
    id?: StringFilter<"Reservation"> | string
    parkingId?: StringFilter<"Reservation"> | string
    userCode?: IntFilter<"Reservation"> | number
    vehiclePlate?: StringFilter<"Reservation"> | string
    vehicleTypeId?: StringFilter<"Reservation"> | string
    vehicleModel?: StringFilter<"Reservation"> | string
    reservationDate?: DateTimeFilter<"Reservation"> | Date | string
    reservationStatus?: EnumReservationStatusFilter<"Reservation"> | $Enums.ReservationStatus
    createdAt?: DateTimeFilter<"Reservation"> | Date | string
    updatedAt?: DateTimeFilter<"Reservation"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    parking?: XOR<ParkingScalarRelationFilter, ParkingWhereInput>
    vehicleType?: XOR<VehicleTypeScalarRelationFilter, VehicleTypeWhereInput>
  }

  export type ReservationOrderByWithRelationInput = {
    id?: SortOrder
    parkingId?: SortOrder
    userCode?: SortOrder
    vehiclePlate?: SortOrder
    vehicleTypeId?: SortOrder
    vehicleModel?: SortOrder
    reservationDate?: SortOrder
    reservationStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    parking?: ParkingOrderByWithRelationInput
    vehicleType?: VehicleTypeOrderByWithRelationInput
    _relevance?: ReservationOrderByRelevanceInput
  }

  export type ReservationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReservationWhereInput | ReservationWhereInput[]
    OR?: ReservationWhereInput[]
    NOT?: ReservationWhereInput | ReservationWhereInput[]
    parkingId?: StringFilter<"Reservation"> | string
    userCode?: IntFilter<"Reservation"> | number
    vehiclePlate?: StringFilter<"Reservation"> | string
    vehicleTypeId?: StringFilter<"Reservation"> | string
    vehicleModel?: StringFilter<"Reservation"> | string
    reservationDate?: DateTimeFilter<"Reservation"> | Date | string
    reservationStatus?: EnumReservationStatusFilter<"Reservation"> | $Enums.ReservationStatus
    createdAt?: DateTimeFilter<"Reservation"> | Date | string
    updatedAt?: DateTimeFilter<"Reservation"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    parking?: XOR<ParkingScalarRelationFilter, ParkingWhereInput>
    vehicleType?: XOR<VehicleTypeScalarRelationFilter, VehicleTypeWhereInput>
  }, "id">

  export type ReservationOrderByWithAggregationInput = {
    id?: SortOrder
    parkingId?: SortOrder
    userCode?: SortOrder
    vehiclePlate?: SortOrder
    vehicleTypeId?: SortOrder
    vehicleModel?: SortOrder
    reservationDate?: SortOrder
    reservationStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ReservationCountOrderByAggregateInput
    _avg?: ReservationAvgOrderByAggregateInput
    _max?: ReservationMaxOrderByAggregateInput
    _min?: ReservationMinOrderByAggregateInput
    _sum?: ReservationSumOrderByAggregateInput
  }

  export type ReservationScalarWhereWithAggregatesInput = {
    AND?: ReservationScalarWhereWithAggregatesInput | ReservationScalarWhereWithAggregatesInput[]
    OR?: ReservationScalarWhereWithAggregatesInput[]
    NOT?: ReservationScalarWhereWithAggregatesInput | ReservationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Reservation"> | string
    parkingId?: StringWithAggregatesFilter<"Reservation"> | string
    userCode?: IntWithAggregatesFilter<"Reservation"> | number
    vehiclePlate?: StringWithAggregatesFilter<"Reservation"> | string
    vehicleTypeId?: StringWithAggregatesFilter<"Reservation"> | string
    vehicleModel?: StringWithAggregatesFilter<"Reservation"> | string
    reservationDate?: DateTimeWithAggregatesFilter<"Reservation"> | Date | string
    reservationStatus?: EnumReservationStatusWithAggregatesFilter<"Reservation"> | $Enums.ReservationStatus
    createdAt?: DateTimeWithAggregatesFilter<"Reservation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Reservation"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    userCode: number
    userName: string
    userEmail: string
    userRol: number
    userStatus: number
    createdAt?: Date | string
    updatedAt?: Date | string
    reservations?: ReservationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    userCode: number
    userName: string
    userEmail: string
    userRol: number
    userStatus: number
    createdAt?: Date | string
    updatedAt?: Date | string
    reservations?: ReservationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userCode?: IntFieldUpdateOperationsInput | number
    userName?: StringFieldUpdateOperationsInput | string
    userEmail?: StringFieldUpdateOperationsInput | string
    userRol?: IntFieldUpdateOperationsInput | number
    userStatus?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservations?: ReservationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userCode?: IntFieldUpdateOperationsInput | number
    userName?: StringFieldUpdateOperationsInput | string
    userEmail?: StringFieldUpdateOperationsInput | string
    userRol?: IntFieldUpdateOperationsInput | number
    userStatus?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservations?: ReservationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    userCode: number
    userName: string
    userEmail: string
    userRol: number
    userStatus: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userCode?: IntFieldUpdateOperationsInput | number
    userName?: StringFieldUpdateOperationsInput | string
    userEmail?: StringFieldUpdateOperationsInput | string
    userRol?: IntFieldUpdateOperationsInput | number
    userStatus?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userCode?: IntFieldUpdateOperationsInput | number
    userName?: StringFieldUpdateOperationsInput | string
    userEmail?: StringFieldUpdateOperationsInput | string
    userRol?: IntFieldUpdateOperationsInput | number
    userStatus?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParkingCreateInput = {
    id?: string
    location: string
    places: number
    status: number
    createdAt?: Date | string
    updatedAt?: Date | string
    reservations?: ReservationCreateNestedManyWithoutParkingInput
  }

  export type ParkingUncheckedCreateInput = {
    id?: string
    location: string
    places: number
    status: number
    createdAt?: Date | string
    updatedAt?: Date | string
    reservations?: ReservationUncheckedCreateNestedManyWithoutParkingInput
  }

  export type ParkingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    places?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservations?: ReservationUpdateManyWithoutParkingNestedInput
  }

  export type ParkingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    places?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservations?: ReservationUncheckedUpdateManyWithoutParkingNestedInput
  }

  export type ParkingCreateManyInput = {
    id?: string
    location: string
    places: number
    status: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParkingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    places?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParkingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    places?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleTypeCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    reservations?: ReservationCreateNestedManyWithoutVehicleTypeInput
  }

  export type VehicleTypeUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    reservations?: ReservationUncheckedCreateNestedManyWithoutVehicleTypeInput
  }

  export type VehicleTypeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservations?: ReservationUpdateManyWithoutVehicleTypeNestedInput
  }

  export type VehicleTypeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservations?: ReservationUncheckedUpdateManyWithoutVehicleTypeNestedInput
  }

  export type VehicleTypeCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VehicleTypeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleTypeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationCreateInput = {
    id?: string
    vehiclePlate: string
    vehicleModel: string
    reservationDate: Date | string
    reservationStatus?: $Enums.ReservationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutReservationsInput
    parking: ParkingCreateNestedOneWithoutReservationsInput
    vehicleType: VehicleTypeCreateNestedOneWithoutReservationsInput
  }

  export type ReservationUncheckedCreateInput = {
    id?: string
    parkingId: string
    userCode: number
    vehiclePlate: string
    vehicleTypeId: string
    vehicleModel: string
    reservationDate: Date | string
    reservationStatus?: $Enums.ReservationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReservationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehiclePlate?: StringFieldUpdateOperationsInput | string
    vehicleModel?: StringFieldUpdateOperationsInput | string
    reservationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reservationStatus?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReservationsNestedInput
    parking?: ParkingUpdateOneRequiredWithoutReservationsNestedInput
    vehicleType?: VehicleTypeUpdateOneRequiredWithoutReservationsNestedInput
  }

  export type ReservationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    parkingId?: StringFieldUpdateOperationsInput | string
    userCode?: IntFieldUpdateOperationsInput | number
    vehiclePlate?: StringFieldUpdateOperationsInput | string
    vehicleTypeId?: StringFieldUpdateOperationsInput | string
    vehicleModel?: StringFieldUpdateOperationsInput | string
    reservationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reservationStatus?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationCreateManyInput = {
    id?: string
    parkingId: string
    userCode: number
    vehiclePlate: string
    vehicleTypeId: string
    vehicleModel: string
    reservationDate: Date | string
    reservationStatus?: $Enums.ReservationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReservationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehiclePlate?: StringFieldUpdateOperationsInput | string
    vehicleModel?: StringFieldUpdateOperationsInput | string
    reservationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reservationStatus?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    parkingId?: StringFieldUpdateOperationsInput | string
    userCode?: IntFieldUpdateOperationsInput | number
    vehiclePlate?: StringFieldUpdateOperationsInput | string
    vehicleTypeId?: StringFieldUpdateOperationsInput | string
    vehicleModel?: StringFieldUpdateOperationsInput | string
    reservationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reservationStatus?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type ReservationListRelationFilter = {
    every?: ReservationWhereInput
    some?: ReservationWhereInput
    none?: ReservationWhereInput
  }

  export type ReservationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    userCode?: SortOrder
    userName?: SortOrder
    userEmail?: SortOrder
    userRol?: SortOrder
    userStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    userCode?: SortOrder
    userRol?: SortOrder
    userStatus?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    userCode?: SortOrder
    userName?: SortOrder
    userEmail?: SortOrder
    userRol?: SortOrder
    userStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    userCode?: SortOrder
    userName?: SortOrder
    userEmail?: SortOrder
    userRol?: SortOrder
    userStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    userCode?: SortOrder
    userRol?: SortOrder
    userStatus?: SortOrder
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

  export type ParkingOrderByRelevanceInput = {
    fields: ParkingOrderByRelevanceFieldEnum | ParkingOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ParkingCountOrderByAggregateInput = {
    id?: SortOrder
    location?: SortOrder
    places?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ParkingAvgOrderByAggregateInput = {
    places?: SortOrder
    status?: SortOrder
  }

  export type ParkingMaxOrderByAggregateInput = {
    id?: SortOrder
    location?: SortOrder
    places?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ParkingMinOrderByAggregateInput = {
    id?: SortOrder
    location?: SortOrder
    places?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ParkingSumOrderByAggregateInput = {
    places?: SortOrder
    status?: SortOrder
  }

  export type VehicleTypeOrderByRelevanceInput = {
    fields: VehicleTypeOrderByRelevanceFieldEnum | VehicleTypeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type VehicleTypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VehicleTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VehicleTypeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumReservationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ReservationStatus | EnumReservationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReservationStatus[]
    notIn?: $Enums.ReservationStatus[]
    not?: NestedEnumReservationStatusFilter<$PrismaModel> | $Enums.ReservationStatus
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ParkingScalarRelationFilter = {
    is?: ParkingWhereInput
    isNot?: ParkingWhereInput
  }

  export type VehicleTypeScalarRelationFilter = {
    is?: VehicleTypeWhereInput
    isNot?: VehicleTypeWhereInput
  }

  export type ReservationOrderByRelevanceInput = {
    fields: ReservationOrderByRelevanceFieldEnum | ReservationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ReservationCountOrderByAggregateInput = {
    id?: SortOrder
    parkingId?: SortOrder
    userCode?: SortOrder
    vehiclePlate?: SortOrder
    vehicleTypeId?: SortOrder
    vehicleModel?: SortOrder
    reservationDate?: SortOrder
    reservationStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReservationAvgOrderByAggregateInput = {
    userCode?: SortOrder
  }

  export type ReservationMaxOrderByAggregateInput = {
    id?: SortOrder
    parkingId?: SortOrder
    userCode?: SortOrder
    vehiclePlate?: SortOrder
    vehicleTypeId?: SortOrder
    vehicleModel?: SortOrder
    reservationDate?: SortOrder
    reservationStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReservationMinOrderByAggregateInput = {
    id?: SortOrder
    parkingId?: SortOrder
    userCode?: SortOrder
    vehiclePlate?: SortOrder
    vehicleTypeId?: SortOrder
    vehicleModel?: SortOrder
    reservationDate?: SortOrder
    reservationStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReservationSumOrderByAggregateInput = {
    userCode?: SortOrder
  }

  export type EnumReservationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReservationStatus | EnumReservationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReservationStatus[]
    notIn?: $Enums.ReservationStatus[]
    not?: NestedEnumReservationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ReservationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReservationStatusFilter<$PrismaModel>
    _max?: NestedEnumReservationStatusFilter<$PrismaModel>
  }

  export type ReservationCreateNestedManyWithoutUserInput = {
    create?: XOR<ReservationCreateWithoutUserInput, ReservationUncheckedCreateWithoutUserInput> | ReservationCreateWithoutUserInput[] | ReservationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutUserInput | ReservationCreateOrConnectWithoutUserInput[]
    createMany?: ReservationCreateManyUserInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type ReservationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReservationCreateWithoutUserInput, ReservationUncheckedCreateWithoutUserInput> | ReservationCreateWithoutUserInput[] | ReservationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutUserInput | ReservationCreateOrConnectWithoutUserInput[]
    createMany?: ReservationCreateManyUserInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ReservationUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReservationCreateWithoutUserInput, ReservationUncheckedCreateWithoutUserInput> | ReservationCreateWithoutUserInput[] | ReservationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutUserInput | ReservationCreateOrConnectWithoutUserInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutUserInput | ReservationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReservationCreateManyUserInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutUserInput | ReservationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutUserInput | ReservationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type ReservationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReservationCreateWithoutUserInput, ReservationUncheckedCreateWithoutUserInput> | ReservationCreateWithoutUserInput[] | ReservationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutUserInput | ReservationCreateOrConnectWithoutUserInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutUserInput | ReservationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReservationCreateManyUserInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutUserInput | ReservationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutUserInput | ReservationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type ReservationCreateNestedManyWithoutParkingInput = {
    create?: XOR<ReservationCreateWithoutParkingInput, ReservationUncheckedCreateWithoutParkingInput> | ReservationCreateWithoutParkingInput[] | ReservationUncheckedCreateWithoutParkingInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutParkingInput | ReservationCreateOrConnectWithoutParkingInput[]
    createMany?: ReservationCreateManyParkingInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type ReservationUncheckedCreateNestedManyWithoutParkingInput = {
    create?: XOR<ReservationCreateWithoutParkingInput, ReservationUncheckedCreateWithoutParkingInput> | ReservationCreateWithoutParkingInput[] | ReservationUncheckedCreateWithoutParkingInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutParkingInput | ReservationCreateOrConnectWithoutParkingInput[]
    createMany?: ReservationCreateManyParkingInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type ReservationUpdateManyWithoutParkingNestedInput = {
    create?: XOR<ReservationCreateWithoutParkingInput, ReservationUncheckedCreateWithoutParkingInput> | ReservationCreateWithoutParkingInput[] | ReservationUncheckedCreateWithoutParkingInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutParkingInput | ReservationCreateOrConnectWithoutParkingInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutParkingInput | ReservationUpsertWithWhereUniqueWithoutParkingInput[]
    createMany?: ReservationCreateManyParkingInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutParkingInput | ReservationUpdateWithWhereUniqueWithoutParkingInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutParkingInput | ReservationUpdateManyWithWhereWithoutParkingInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type ReservationUncheckedUpdateManyWithoutParkingNestedInput = {
    create?: XOR<ReservationCreateWithoutParkingInput, ReservationUncheckedCreateWithoutParkingInput> | ReservationCreateWithoutParkingInput[] | ReservationUncheckedCreateWithoutParkingInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutParkingInput | ReservationCreateOrConnectWithoutParkingInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutParkingInput | ReservationUpsertWithWhereUniqueWithoutParkingInput[]
    createMany?: ReservationCreateManyParkingInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutParkingInput | ReservationUpdateWithWhereUniqueWithoutParkingInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutParkingInput | ReservationUpdateManyWithWhereWithoutParkingInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type ReservationCreateNestedManyWithoutVehicleTypeInput = {
    create?: XOR<ReservationCreateWithoutVehicleTypeInput, ReservationUncheckedCreateWithoutVehicleTypeInput> | ReservationCreateWithoutVehicleTypeInput[] | ReservationUncheckedCreateWithoutVehicleTypeInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutVehicleTypeInput | ReservationCreateOrConnectWithoutVehicleTypeInput[]
    createMany?: ReservationCreateManyVehicleTypeInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type ReservationUncheckedCreateNestedManyWithoutVehicleTypeInput = {
    create?: XOR<ReservationCreateWithoutVehicleTypeInput, ReservationUncheckedCreateWithoutVehicleTypeInput> | ReservationCreateWithoutVehicleTypeInput[] | ReservationUncheckedCreateWithoutVehicleTypeInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutVehicleTypeInput | ReservationCreateOrConnectWithoutVehicleTypeInput[]
    createMany?: ReservationCreateManyVehicleTypeInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type ReservationUpdateManyWithoutVehicleTypeNestedInput = {
    create?: XOR<ReservationCreateWithoutVehicleTypeInput, ReservationUncheckedCreateWithoutVehicleTypeInput> | ReservationCreateWithoutVehicleTypeInput[] | ReservationUncheckedCreateWithoutVehicleTypeInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutVehicleTypeInput | ReservationCreateOrConnectWithoutVehicleTypeInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutVehicleTypeInput | ReservationUpsertWithWhereUniqueWithoutVehicleTypeInput[]
    createMany?: ReservationCreateManyVehicleTypeInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutVehicleTypeInput | ReservationUpdateWithWhereUniqueWithoutVehicleTypeInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutVehicleTypeInput | ReservationUpdateManyWithWhereWithoutVehicleTypeInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type ReservationUncheckedUpdateManyWithoutVehicleTypeNestedInput = {
    create?: XOR<ReservationCreateWithoutVehicleTypeInput, ReservationUncheckedCreateWithoutVehicleTypeInput> | ReservationCreateWithoutVehicleTypeInput[] | ReservationUncheckedCreateWithoutVehicleTypeInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutVehicleTypeInput | ReservationCreateOrConnectWithoutVehicleTypeInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutVehicleTypeInput | ReservationUpsertWithWhereUniqueWithoutVehicleTypeInput[]
    createMany?: ReservationCreateManyVehicleTypeInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutVehicleTypeInput | ReservationUpdateWithWhereUniqueWithoutVehicleTypeInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutVehicleTypeInput | ReservationUpdateManyWithWhereWithoutVehicleTypeInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutReservationsInput = {
    create?: XOR<UserCreateWithoutReservationsInput, UserUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReservationsInput
    connect?: UserWhereUniqueInput
  }

  export type ParkingCreateNestedOneWithoutReservationsInput = {
    create?: XOR<ParkingCreateWithoutReservationsInput, ParkingUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: ParkingCreateOrConnectWithoutReservationsInput
    connect?: ParkingWhereUniqueInput
  }

  export type VehicleTypeCreateNestedOneWithoutReservationsInput = {
    create?: XOR<VehicleTypeCreateWithoutReservationsInput, VehicleTypeUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: VehicleTypeCreateOrConnectWithoutReservationsInput
    connect?: VehicleTypeWhereUniqueInput
  }

  export type EnumReservationStatusFieldUpdateOperationsInput = {
    set?: $Enums.ReservationStatus
  }

  export type UserUpdateOneRequiredWithoutReservationsNestedInput = {
    create?: XOR<UserCreateWithoutReservationsInput, UserUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReservationsInput
    upsert?: UserUpsertWithoutReservationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReservationsInput, UserUpdateWithoutReservationsInput>, UserUncheckedUpdateWithoutReservationsInput>
  }

  export type ParkingUpdateOneRequiredWithoutReservationsNestedInput = {
    create?: XOR<ParkingCreateWithoutReservationsInput, ParkingUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: ParkingCreateOrConnectWithoutReservationsInput
    upsert?: ParkingUpsertWithoutReservationsInput
    connect?: ParkingWhereUniqueInput
    update?: XOR<XOR<ParkingUpdateToOneWithWhereWithoutReservationsInput, ParkingUpdateWithoutReservationsInput>, ParkingUncheckedUpdateWithoutReservationsInput>
  }

  export type VehicleTypeUpdateOneRequiredWithoutReservationsNestedInput = {
    create?: XOR<VehicleTypeCreateWithoutReservationsInput, VehicleTypeUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: VehicleTypeCreateOrConnectWithoutReservationsInput
    upsert?: VehicleTypeUpsertWithoutReservationsInput
    connect?: VehicleTypeWhereUniqueInput
    update?: XOR<XOR<VehicleTypeUpdateToOneWithWhereWithoutReservationsInput, VehicleTypeUpdateWithoutReservationsInput>, VehicleTypeUncheckedUpdateWithoutReservationsInput>
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

  export type NestedEnumReservationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ReservationStatus | EnumReservationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReservationStatus[]
    notIn?: $Enums.ReservationStatus[]
    not?: NestedEnumReservationStatusFilter<$PrismaModel> | $Enums.ReservationStatus
  }

  export type NestedEnumReservationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReservationStatus | EnumReservationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReservationStatus[]
    notIn?: $Enums.ReservationStatus[]
    not?: NestedEnumReservationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ReservationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReservationStatusFilter<$PrismaModel>
    _max?: NestedEnumReservationStatusFilter<$PrismaModel>
  }

  export type ReservationCreateWithoutUserInput = {
    id?: string
    vehiclePlate: string
    vehicleModel: string
    reservationDate: Date | string
    reservationStatus?: $Enums.ReservationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    parking: ParkingCreateNestedOneWithoutReservationsInput
    vehicleType: VehicleTypeCreateNestedOneWithoutReservationsInput
  }

  export type ReservationUncheckedCreateWithoutUserInput = {
    id?: string
    parkingId: string
    vehiclePlate: string
    vehicleTypeId: string
    vehicleModel: string
    reservationDate: Date | string
    reservationStatus?: $Enums.ReservationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReservationCreateOrConnectWithoutUserInput = {
    where: ReservationWhereUniqueInput
    create: XOR<ReservationCreateWithoutUserInput, ReservationUncheckedCreateWithoutUserInput>
  }

  export type ReservationCreateManyUserInputEnvelope = {
    data: ReservationCreateManyUserInput | ReservationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReservationUpsertWithWhereUniqueWithoutUserInput = {
    where: ReservationWhereUniqueInput
    update: XOR<ReservationUpdateWithoutUserInput, ReservationUncheckedUpdateWithoutUserInput>
    create: XOR<ReservationCreateWithoutUserInput, ReservationUncheckedCreateWithoutUserInput>
  }

  export type ReservationUpdateWithWhereUniqueWithoutUserInput = {
    where: ReservationWhereUniqueInput
    data: XOR<ReservationUpdateWithoutUserInput, ReservationUncheckedUpdateWithoutUserInput>
  }

  export type ReservationUpdateManyWithWhereWithoutUserInput = {
    where: ReservationScalarWhereInput
    data: XOR<ReservationUpdateManyMutationInput, ReservationUncheckedUpdateManyWithoutUserInput>
  }

  export type ReservationScalarWhereInput = {
    AND?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
    OR?: ReservationScalarWhereInput[]
    NOT?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
    id?: StringFilter<"Reservation"> | string
    parkingId?: StringFilter<"Reservation"> | string
    userCode?: IntFilter<"Reservation"> | number
    vehiclePlate?: StringFilter<"Reservation"> | string
    vehicleTypeId?: StringFilter<"Reservation"> | string
    vehicleModel?: StringFilter<"Reservation"> | string
    reservationDate?: DateTimeFilter<"Reservation"> | Date | string
    reservationStatus?: EnumReservationStatusFilter<"Reservation"> | $Enums.ReservationStatus
    createdAt?: DateTimeFilter<"Reservation"> | Date | string
    updatedAt?: DateTimeFilter<"Reservation"> | Date | string
  }

  export type ReservationCreateWithoutParkingInput = {
    id?: string
    vehiclePlate: string
    vehicleModel: string
    reservationDate: Date | string
    reservationStatus?: $Enums.ReservationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutReservationsInput
    vehicleType: VehicleTypeCreateNestedOneWithoutReservationsInput
  }

  export type ReservationUncheckedCreateWithoutParkingInput = {
    id?: string
    userCode: number
    vehiclePlate: string
    vehicleTypeId: string
    vehicleModel: string
    reservationDate: Date | string
    reservationStatus?: $Enums.ReservationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReservationCreateOrConnectWithoutParkingInput = {
    where: ReservationWhereUniqueInput
    create: XOR<ReservationCreateWithoutParkingInput, ReservationUncheckedCreateWithoutParkingInput>
  }

  export type ReservationCreateManyParkingInputEnvelope = {
    data: ReservationCreateManyParkingInput | ReservationCreateManyParkingInput[]
    skipDuplicates?: boolean
  }

  export type ReservationUpsertWithWhereUniqueWithoutParkingInput = {
    where: ReservationWhereUniqueInput
    update: XOR<ReservationUpdateWithoutParkingInput, ReservationUncheckedUpdateWithoutParkingInput>
    create: XOR<ReservationCreateWithoutParkingInput, ReservationUncheckedCreateWithoutParkingInput>
  }

  export type ReservationUpdateWithWhereUniqueWithoutParkingInput = {
    where: ReservationWhereUniqueInput
    data: XOR<ReservationUpdateWithoutParkingInput, ReservationUncheckedUpdateWithoutParkingInput>
  }

  export type ReservationUpdateManyWithWhereWithoutParkingInput = {
    where: ReservationScalarWhereInput
    data: XOR<ReservationUpdateManyMutationInput, ReservationUncheckedUpdateManyWithoutParkingInput>
  }

  export type ReservationCreateWithoutVehicleTypeInput = {
    id?: string
    vehiclePlate: string
    vehicleModel: string
    reservationDate: Date | string
    reservationStatus?: $Enums.ReservationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutReservationsInput
    parking: ParkingCreateNestedOneWithoutReservationsInput
  }

  export type ReservationUncheckedCreateWithoutVehicleTypeInput = {
    id?: string
    parkingId: string
    userCode: number
    vehiclePlate: string
    vehicleModel: string
    reservationDate: Date | string
    reservationStatus?: $Enums.ReservationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReservationCreateOrConnectWithoutVehicleTypeInput = {
    where: ReservationWhereUniqueInput
    create: XOR<ReservationCreateWithoutVehicleTypeInput, ReservationUncheckedCreateWithoutVehicleTypeInput>
  }

  export type ReservationCreateManyVehicleTypeInputEnvelope = {
    data: ReservationCreateManyVehicleTypeInput | ReservationCreateManyVehicleTypeInput[]
    skipDuplicates?: boolean
  }

  export type ReservationUpsertWithWhereUniqueWithoutVehicleTypeInput = {
    where: ReservationWhereUniqueInput
    update: XOR<ReservationUpdateWithoutVehicleTypeInput, ReservationUncheckedUpdateWithoutVehicleTypeInput>
    create: XOR<ReservationCreateWithoutVehicleTypeInput, ReservationUncheckedCreateWithoutVehicleTypeInput>
  }

  export type ReservationUpdateWithWhereUniqueWithoutVehicleTypeInput = {
    where: ReservationWhereUniqueInput
    data: XOR<ReservationUpdateWithoutVehicleTypeInput, ReservationUncheckedUpdateWithoutVehicleTypeInput>
  }

  export type ReservationUpdateManyWithWhereWithoutVehicleTypeInput = {
    where: ReservationScalarWhereInput
    data: XOR<ReservationUpdateManyMutationInput, ReservationUncheckedUpdateManyWithoutVehicleTypeInput>
  }

  export type UserCreateWithoutReservationsInput = {
    id?: string
    userCode: number
    userName: string
    userEmail: string
    userRol: number
    userStatus: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutReservationsInput = {
    id?: string
    userCode: number
    userName: string
    userEmail: string
    userRol: number
    userStatus: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutReservationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReservationsInput, UserUncheckedCreateWithoutReservationsInput>
  }

  export type ParkingCreateWithoutReservationsInput = {
    id?: string
    location: string
    places: number
    status: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParkingUncheckedCreateWithoutReservationsInput = {
    id?: string
    location: string
    places: number
    status: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParkingCreateOrConnectWithoutReservationsInput = {
    where: ParkingWhereUniqueInput
    create: XOR<ParkingCreateWithoutReservationsInput, ParkingUncheckedCreateWithoutReservationsInput>
  }

  export type VehicleTypeCreateWithoutReservationsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VehicleTypeUncheckedCreateWithoutReservationsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VehicleTypeCreateOrConnectWithoutReservationsInput = {
    where: VehicleTypeWhereUniqueInput
    create: XOR<VehicleTypeCreateWithoutReservationsInput, VehicleTypeUncheckedCreateWithoutReservationsInput>
  }

  export type UserUpsertWithoutReservationsInput = {
    update: XOR<UserUpdateWithoutReservationsInput, UserUncheckedUpdateWithoutReservationsInput>
    create: XOR<UserCreateWithoutReservationsInput, UserUncheckedCreateWithoutReservationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReservationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReservationsInput, UserUncheckedUpdateWithoutReservationsInput>
  }

  export type UserUpdateWithoutReservationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userCode?: IntFieldUpdateOperationsInput | number
    userName?: StringFieldUpdateOperationsInput | string
    userEmail?: StringFieldUpdateOperationsInput | string
    userRol?: IntFieldUpdateOperationsInput | number
    userStatus?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutReservationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userCode?: IntFieldUpdateOperationsInput | number
    userName?: StringFieldUpdateOperationsInput | string
    userEmail?: StringFieldUpdateOperationsInput | string
    userRol?: IntFieldUpdateOperationsInput | number
    userStatus?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParkingUpsertWithoutReservationsInput = {
    update: XOR<ParkingUpdateWithoutReservationsInput, ParkingUncheckedUpdateWithoutReservationsInput>
    create: XOR<ParkingCreateWithoutReservationsInput, ParkingUncheckedCreateWithoutReservationsInput>
    where?: ParkingWhereInput
  }

  export type ParkingUpdateToOneWithWhereWithoutReservationsInput = {
    where?: ParkingWhereInput
    data: XOR<ParkingUpdateWithoutReservationsInput, ParkingUncheckedUpdateWithoutReservationsInput>
  }

  export type ParkingUpdateWithoutReservationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    places?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParkingUncheckedUpdateWithoutReservationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    places?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleTypeUpsertWithoutReservationsInput = {
    update: XOR<VehicleTypeUpdateWithoutReservationsInput, VehicleTypeUncheckedUpdateWithoutReservationsInput>
    create: XOR<VehicleTypeCreateWithoutReservationsInput, VehicleTypeUncheckedCreateWithoutReservationsInput>
    where?: VehicleTypeWhereInput
  }

  export type VehicleTypeUpdateToOneWithWhereWithoutReservationsInput = {
    where?: VehicleTypeWhereInput
    data: XOR<VehicleTypeUpdateWithoutReservationsInput, VehicleTypeUncheckedUpdateWithoutReservationsInput>
  }

  export type VehicleTypeUpdateWithoutReservationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleTypeUncheckedUpdateWithoutReservationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationCreateManyUserInput = {
    id?: string
    parkingId: string
    vehiclePlate: string
    vehicleTypeId: string
    vehicleModel: string
    reservationDate: Date | string
    reservationStatus?: $Enums.ReservationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReservationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehiclePlate?: StringFieldUpdateOperationsInput | string
    vehicleModel?: StringFieldUpdateOperationsInput | string
    reservationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reservationStatus?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parking?: ParkingUpdateOneRequiredWithoutReservationsNestedInput
    vehicleType?: VehicleTypeUpdateOneRequiredWithoutReservationsNestedInput
  }

  export type ReservationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    parkingId?: StringFieldUpdateOperationsInput | string
    vehiclePlate?: StringFieldUpdateOperationsInput | string
    vehicleTypeId?: StringFieldUpdateOperationsInput | string
    vehicleModel?: StringFieldUpdateOperationsInput | string
    reservationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reservationStatus?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    parkingId?: StringFieldUpdateOperationsInput | string
    vehiclePlate?: StringFieldUpdateOperationsInput | string
    vehicleTypeId?: StringFieldUpdateOperationsInput | string
    vehicleModel?: StringFieldUpdateOperationsInput | string
    reservationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reservationStatus?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationCreateManyParkingInput = {
    id?: string
    userCode: number
    vehiclePlate: string
    vehicleTypeId: string
    vehicleModel: string
    reservationDate: Date | string
    reservationStatus?: $Enums.ReservationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReservationUpdateWithoutParkingInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehiclePlate?: StringFieldUpdateOperationsInput | string
    vehicleModel?: StringFieldUpdateOperationsInput | string
    reservationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reservationStatus?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReservationsNestedInput
    vehicleType?: VehicleTypeUpdateOneRequiredWithoutReservationsNestedInput
  }

  export type ReservationUncheckedUpdateWithoutParkingInput = {
    id?: StringFieldUpdateOperationsInput | string
    userCode?: IntFieldUpdateOperationsInput | number
    vehiclePlate?: StringFieldUpdateOperationsInput | string
    vehicleTypeId?: StringFieldUpdateOperationsInput | string
    vehicleModel?: StringFieldUpdateOperationsInput | string
    reservationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reservationStatus?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationUncheckedUpdateManyWithoutParkingInput = {
    id?: StringFieldUpdateOperationsInput | string
    userCode?: IntFieldUpdateOperationsInput | number
    vehiclePlate?: StringFieldUpdateOperationsInput | string
    vehicleTypeId?: StringFieldUpdateOperationsInput | string
    vehicleModel?: StringFieldUpdateOperationsInput | string
    reservationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reservationStatus?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationCreateManyVehicleTypeInput = {
    id?: string
    parkingId: string
    userCode: number
    vehiclePlate: string
    vehicleModel: string
    reservationDate: Date | string
    reservationStatus?: $Enums.ReservationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReservationUpdateWithoutVehicleTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehiclePlate?: StringFieldUpdateOperationsInput | string
    vehicleModel?: StringFieldUpdateOperationsInput | string
    reservationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reservationStatus?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReservationsNestedInput
    parking?: ParkingUpdateOneRequiredWithoutReservationsNestedInput
  }

  export type ReservationUncheckedUpdateWithoutVehicleTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    parkingId?: StringFieldUpdateOperationsInput | string
    userCode?: IntFieldUpdateOperationsInput | number
    vehiclePlate?: StringFieldUpdateOperationsInput | string
    vehicleModel?: StringFieldUpdateOperationsInput | string
    reservationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reservationStatus?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationUncheckedUpdateManyWithoutVehicleTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    parkingId?: StringFieldUpdateOperationsInput | string
    userCode?: IntFieldUpdateOperationsInput | number
    vehiclePlate?: StringFieldUpdateOperationsInput | string
    vehicleModel?: StringFieldUpdateOperationsInput | string
    reservationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reservationStatus?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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