import { onMounted } from 'vue'
import useCategoryStore from '@/store/modules/category'

const {
  defineProps,
  defineSlots,
  defineEmits,
  defineExpose,
  defineModel,
  defineOptions,
  withDefaults,
} = await import('vue')
let categoryStore = useCategoryStore()
onMounted(() => {
  getC1()
})
const getC1 = async () => {
  categoryStore.getC1()
}
const handler = (n: number) => {
  if (n === 1) {
    categoryStore.c2Id = ''
    categoryStore.c3Id = ''
    categoryStore.c3Arr = []
    categoryStore.getC2()
  } else if (n === 2) {
    categoryStore.c3Id = ''
    categoryStore.getC3()
  }
}
const __VLS_props = defineProps(['scene'])
const __VLS_componentsOption = {}
let __VLS_name!: 'index'
function __VLS_template() {
  let __VLS_ctx!: InstanceType<
    __VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>
  > & {}
  /* Components */
  let __VLS_otherComponents!: NonNullable<
    typeof __VLS_internalComponent extends { components: infer C } ? C : {}
  > &
    typeof __VLS_componentsOption
  let __VLS_own!: __VLS_SelfComponent<
    typeof __VLS_name,
    typeof __VLS_internalComponent & (new () => { $slots: typeof __VLS_slots })
  >
  let __VLS_localComponents!: typeof __VLS_otherComponents &
    Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>
  let __VLS_components!: typeof __VLS_localComponents &
    __VLS_GlobalComponents &
    typeof __VLS_ctx
  /* Style Scoped */
  type __VLS_StyleScopedClasses = {}
  let __VLS_styleScopedClasses!:
    | __VLS_StyleScopedClasses
    | keyof __VLS_StyleScopedClasses
    | (keyof __VLS_StyleScopedClasses)[]
  /* CSS variable injection */
  /* CSS variable injection end */
  let __VLS_resolvedLocalAndGlobalComponents!: {} & __VLS_WithComponent<
    'ElCard',
    typeof __VLS_localComponents,
    'ElCard',
    'elCard',
    'el-card'
  > &
    __VLS_WithComponent<
      'ElForm',
      typeof __VLS_localComponents,
      'ElForm',
      'elForm',
      'el-form'
    > &
    __VLS_WithComponent<
      'ElFormItem',
      typeof __VLS_localComponents,
      'ElFormItem',
      'elFormItem',
      'el-form-item'
    > &
    __VLS_WithComponent<
      'ElSelect',
      typeof __VLS_localComponents,
      'ElSelect',
      'elSelect',
      'el-select'
    > &
    __VLS_WithComponent<
      'ElOption',
      typeof __VLS_localComponents,
      'ElOption',
      'elOption',
      'el-option'
    >
  __VLS_components.ElCard
  __VLS_components.ElCard
  __VLS_components.elCard
  __VLS_components.elCard
  __VLS_components['el-card']
  __VLS_components['el-card']
  // @ts-ignore
  ;[ElCard, ElCard]
  __VLS_components.ElForm
  __VLS_components.ElForm
  __VLS_components.elForm
  __VLS_components.elForm
  __VLS_components['el-form']
  __VLS_components['el-form']
  // @ts-ignore
  ;[ElForm, ElForm]
  __VLS_components.ElFormItem
  __VLS_components.ElFormItem
  __VLS_components.ElFormItem
  __VLS_components.ElFormItem
  __VLS_components.ElFormItem
  __VLS_components.ElFormItem
  __VLS_components.elFormItem
  __VLS_components.elFormItem
  __VLS_components.elFormItem
  __VLS_components.elFormItem
  __VLS_components.elFormItem
  __VLS_components.elFormItem
  __VLS_components['el-form-item']
  __VLS_components['el-form-item']
  __VLS_components['el-form-item']
  __VLS_components['el-form-item']
  __VLS_components['el-form-item']
  __VLS_components['el-form-item']
  // @ts-ignore
  ;[ElFormItem, ElFormItem, ElFormItem, ElFormItem, ElFormItem, ElFormItem]
  __VLS_components.ElSelect
  __VLS_components.ElSelect
  __VLS_components.ElSelect
  __VLS_components.ElSelect
  __VLS_components.ElSelect
  __VLS_components.ElSelect
  __VLS_components.elSelect
  __VLS_components.elSelect
  __VLS_components.elSelect
  __VLS_components.elSelect
  __VLS_components.elSelect
  __VLS_components.elSelect
  __VLS_components['el-select']
  __VLS_components['el-select']
  __VLS_components['el-select']
  __VLS_components['el-select']
  __VLS_components['el-select']
  __VLS_components['el-select']
  // @ts-ignore
  ;[ElSelect, ElSelect, ElSelect, ElSelect, ElSelect, ElSelect]
  __VLS_components.ElOption
  __VLS_components.ElOption
  __VLS_components.ElOption
  __VLS_components.ElOption
  __VLS_components.ElOption
  __VLS_components.ElOption
  __VLS_components.elOption
  __VLS_components.elOption
  __VLS_components.elOption
  __VLS_components.elOption
  __VLS_components.elOption
  __VLS_components.elOption
  __VLS_components['el-option']
  __VLS_components['el-option']
  __VLS_components['el-option']
  __VLS_components['el-option']
  __VLS_components['el-option']
  __VLS_components['el-option']
  // @ts-ignore
  ;[ElOption, ElOption, ElOption, ElOption, ElOption, ElOption]
  {
    let __VLS_0!: 'ElCard' extends keyof typeof __VLS_ctx
      ? typeof __VLS_ctx.ElCard
      : 'elCard' extends keyof typeof __VLS_ctx
      ? typeof __VLS_ctx.elCard
      : 'el-card' extends keyof typeof __VLS_ctx
      ? (typeof __VLS_ctx)['el-card']
      : (typeof __VLS_resolvedLocalAndGlobalComponents)['ElCard']
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{} }))
    ;(({}) as { ElCard: typeof __VLS_0 }).ElCard
    ;(({}) as { ElCard: typeof __VLS_0 }).ElCard
    const __VLS_2 = __VLS_1(
      { ...{} },
      ...__VLS_functionalComponentArgsRest(__VLS_1),
    )
    ;(
      ({}) as (
        props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> &
          Record<string, unknown>,
      ) => void
    )({ ...{} })
    const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!
    let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3.emit>
    {
      let __VLS_5!: 'ElForm' extends keyof typeof __VLS_ctx
        ? typeof __VLS_ctx.ElForm
        : 'elForm' extends keyof typeof __VLS_ctx
        ? typeof __VLS_ctx.elForm
        : 'el-form' extends keyof typeof __VLS_ctx
        ? (typeof __VLS_ctx)['el-form']
        : (typeof __VLS_resolvedLocalAndGlobalComponents)['ElForm']
      const __VLS_6 = __VLS_asFunctionalComponent(
        __VLS_5,
        new __VLS_5({ ...{}, inline: true }),
      )
      ;(({}) as { ElForm: typeof __VLS_5 }).ElForm
      ;(({}) as { ElForm: typeof __VLS_5 }).ElForm
      const __VLS_7 = __VLS_6(
        { ...{}, inline: true },
        ...__VLS_functionalComponentArgsRest(__VLS_6),
      )
      ;(
        ({}) as (
          props: __VLS_FunctionalComponentProps<
            typeof __VLS_5,
            typeof __VLS_7
          > &
            Record<string, unknown>,
        ) => void
      )({ ...{}, inline: true })
      const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7)!
      let __VLS_9!: __VLS_NormalizeEmits<typeof __VLS_8.emit>
      {
        let __VLS_10!: 'ElFormItem' extends keyof typeof __VLS_ctx
          ? typeof __VLS_ctx.ElFormItem
          : 'elFormItem' extends keyof typeof __VLS_ctx
          ? typeof __VLS_ctx.elFormItem
          : 'el-form-item' extends keyof typeof __VLS_ctx
          ? (typeof __VLS_ctx)['el-form-item']
          : (typeof __VLS_resolvedLocalAndGlobalComponents)['ElFormItem']
        const __VLS_11 = __VLS_asFunctionalComponent(
          __VLS_10,
          new __VLS_10({ ...{}, label: '一级分类' }),
        )
        ;(({}) as { ElFormItem: typeof __VLS_10 }).ElFormItem
        ;(({}) as { ElFormItem: typeof __VLS_10 }).ElFormItem
        const __VLS_12 = __VLS_11(
          { ...{}, label: '一级分类' },
          ...__VLS_functionalComponentArgsRest(__VLS_11),
        )
        ;(
          ({}) as (
            props: __VLS_FunctionalComponentProps<
              typeof __VLS_10,
              typeof __VLS_12
            > &
              Record<string, unknown>,
          ) => void
        )({ ...{}, label: '一级分类' })
        const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12)!
        let __VLS_14!: __VLS_NormalizeEmits<typeof __VLS_13.emit>
        {
          let __VLS_15!: 'ElSelect' extends keyof typeof __VLS_ctx
            ? typeof __VLS_ctx.ElSelect
            : 'elSelect' extends keyof typeof __VLS_ctx
            ? typeof __VLS_ctx.elSelect
            : 'el-select' extends keyof typeof __VLS_ctx
            ? (typeof __VLS_ctx)['el-select']
            : (typeof __VLS_resolvedLocalAndGlobalComponents)['ElSelect']
          const __VLS_16 = __VLS_asFunctionalComponent(
            __VLS_15,
            new __VLS_15({
              ...{ onChange: {} as any },
              disabled: __VLS_ctx.scene === 0 ? false : true,
              modelValue: __VLS_ctx.categoryStore.c1Id,
            }),
          )
          ;(({}) as { ElSelect: typeof __VLS_15 }).ElSelect
          ;(({}) as { ElSelect: typeof __VLS_15 }).ElSelect
          const __VLS_17 = __VLS_16(
            {
              ...{ onChange: {} as any },
              disabled: __VLS_ctx.scene === 0 ? false : true,
              modelValue: __VLS_ctx.categoryStore.c1Id,
            },
            ...__VLS_functionalComponentArgsRest(__VLS_16),
          )
          ;(
            ({}) as (
              props: __VLS_FunctionalComponentProps<
                typeof __VLS_15,
                typeof __VLS_17
              > &
                Record<string, unknown>,
            ) => void
          )({
            ...{ onChange: {} as any },
            disabled: __VLS_ctx.scene === 0 ? false : true,
            modelValue: __VLS_ctx.categoryStore.c1Id,
          })
          const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17)!
          let __VLS_19!: __VLS_NormalizeEmits<typeof __VLS_18.emit>
          let __VLS_20 = {
            change: __VLS_pickEvent(
              __VLS_19['change'],
              (
                {} as __VLS_FunctionalComponentProps<
                  typeof __VLS_16,
                  typeof __VLS_17
                >
              ).onChange,
            ),
          }
          __VLS_20 = {
            change: ($event) => {
              __VLS_ctx.handler(1)
            },
          }
          for (const [c1, index] of __VLS_getVForSourceType(
            __VLS_ctx.categoryStore.c1Arr!,
          )) {
            {
              let __VLS_21!: 'ElOption' extends keyof typeof __VLS_ctx
                ? typeof __VLS_ctx.ElOption
                : 'elOption' extends keyof typeof __VLS_ctx
                ? typeof __VLS_ctx.elOption
                : 'el-option' extends keyof typeof __VLS_ctx
                ? (typeof __VLS_ctx)['el-option']
                : (typeof __VLS_resolvedLocalAndGlobalComponents)['ElOption']
              const __VLS_22 = __VLS_asFunctionalComponent(
                __VLS_21,
                new __VLS_21({
                  ...{},
                  key: c1.id,
                  label: c1.name,
                  value: c1.id,
                }),
              )
              ;(({}) as { ElOption: typeof __VLS_21 }).ElOption
              ;(({}) as { ElOption: typeof __VLS_21 }).ElOption
              const __VLS_23 = __VLS_22(
                { ...{}, key: c1.id, label: c1.name, value: c1.id },
                ...__VLS_functionalComponentArgsRest(__VLS_22),
              )
              ;(
                ({}) as (
                  props: __VLS_FunctionalComponentProps<
                    typeof __VLS_21,
                    typeof __VLS_23
                  > &
                    Record<string, unknown>,
                ) => void
              )({ ...{}, key: c1.id, label: c1.name, value: c1.id })
              const __VLS_24 = __VLS_pickFunctionalComponentCtx(
                __VLS_21,
                __VLS_23,
              )!
              let __VLS_25!: __VLS_NormalizeEmits<typeof __VLS_24.emit>
            }
            // @ts-ignore
            ;[
              scene,
              categoryStore,
              scene,
              categoryStore,
              scene,
              categoryStore,
              handler,
              categoryStore,
            ]
          }
          __VLS_18.slots!.default
        }
        __VLS_13.slots!.default
      }
      {
        let __VLS_26!: 'ElFormItem' extends keyof typeof __VLS_ctx
          ? typeof __VLS_ctx.ElFormItem
          : 'elFormItem' extends keyof typeof __VLS_ctx
          ? typeof __VLS_ctx.elFormItem
          : 'el-form-item' extends keyof typeof __VLS_ctx
          ? (typeof __VLS_ctx)['el-form-item']
          : (typeof __VLS_resolvedLocalAndGlobalComponents)['ElFormItem']
        const __VLS_27 = __VLS_asFunctionalComponent(
          __VLS_26,
          new __VLS_26({ ...{}, label: '二级分类' }),
        )
        ;(({}) as { ElFormItem: typeof __VLS_26 }).ElFormItem
        ;(({}) as { ElFormItem: typeof __VLS_26 }).ElFormItem
        const __VLS_28 = __VLS_27(
          { ...{}, label: '二级分类' },
          ...__VLS_functionalComponentArgsRest(__VLS_27),
        )
        ;(
          ({}) as (
            props: __VLS_FunctionalComponentProps<
              typeof __VLS_26,
              typeof __VLS_28
            > &
              Record<string, unknown>,
          ) => void
        )({ ...{}, label: '二级分类' })
        const __VLS_29 = __VLS_pickFunctionalComponentCtx(__VLS_26, __VLS_28)!
        let __VLS_30!: __VLS_NormalizeEmits<typeof __VLS_29.emit>
        {
          let __VLS_31!: 'ElSelect' extends keyof typeof __VLS_ctx
            ? typeof __VLS_ctx.ElSelect
            : 'elSelect' extends keyof typeof __VLS_ctx
            ? typeof __VLS_ctx.elSelect
            : 'el-select' extends keyof typeof __VLS_ctx
            ? (typeof __VLS_ctx)['el-select']
            : (typeof __VLS_resolvedLocalAndGlobalComponents)['ElSelect']
          const __VLS_32 = __VLS_asFunctionalComponent(
            __VLS_31,
            new __VLS_31({
              ...{ onChange: {} as any },
              disabled: __VLS_ctx.scene === 0 ? false : true,
              modelValue: __VLS_ctx.categoryStore.c2Id,
            }),
          )
          ;(({}) as { ElSelect: typeof __VLS_31 }).ElSelect
          ;(({}) as { ElSelect: typeof __VLS_31 }).ElSelect
          const __VLS_33 = __VLS_32(
            {
              ...{ onChange: {} as any },
              disabled: __VLS_ctx.scene === 0 ? false : true,
              modelValue: __VLS_ctx.categoryStore.c2Id,
            },
            ...__VLS_functionalComponentArgsRest(__VLS_32),
          )
          ;(
            ({}) as (
              props: __VLS_FunctionalComponentProps<
                typeof __VLS_31,
                typeof __VLS_33
              > &
                Record<string, unknown>,
            ) => void
          )({
            ...{ onChange: {} as any },
            disabled: __VLS_ctx.scene === 0 ? false : true,
            modelValue: __VLS_ctx.categoryStore.c2Id,
          })
          const __VLS_34 = __VLS_pickFunctionalComponentCtx(__VLS_31, __VLS_33)!
          let __VLS_35!: __VLS_NormalizeEmits<typeof __VLS_34.emit>
          let __VLS_36 = {
            change: __VLS_pickEvent(
              __VLS_35['change'],
              (
                {} as __VLS_FunctionalComponentProps<
                  typeof __VLS_32,
                  typeof __VLS_33
                >
              ).onChange,
            ),
          }
          __VLS_36 = {
            change: ($event) => {
              __VLS_ctx.handler(2)
            },
          }
          for (const [c2, index] of __VLS_getVForSourceType(
            __VLS_ctx.categoryStore.c2Arr!,
          )) {
            {
              let __VLS_37!: 'ElOption' extends keyof typeof __VLS_ctx
                ? typeof __VLS_ctx.ElOption
                : 'elOption' extends keyof typeof __VLS_ctx
                ? typeof __VLS_ctx.elOption
                : 'el-option' extends keyof typeof __VLS_ctx
                ? (typeof __VLS_ctx)['el-option']
                : (typeof __VLS_resolvedLocalAndGlobalComponents)['ElOption']
              const __VLS_38 = __VLS_asFunctionalComponent(
                __VLS_37,
                new __VLS_37({
                  ...{},
                  key: c2.id,
                  label: c2.name,
                  value: c2.id,
                }),
              )
              ;(({}) as { ElOption: typeof __VLS_37 }).ElOption
              ;(({}) as { ElOption: typeof __VLS_37 }).ElOption
              const __VLS_39 = __VLS_38(
                { ...{}, key: c2.id, label: c2.name, value: c2.id },
                ...__VLS_functionalComponentArgsRest(__VLS_38),
              )
              ;(
                ({}) as (
                  props: __VLS_FunctionalComponentProps<
                    typeof __VLS_37,
                    typeof __VLS_39
                  > &
                    Record<string, unknown>,
                ) => void
              )({ ...{}, key: c2.id, label: c2.name, value: c2.id })
              const __VLS_40 = __VLS_pickFunctionalComponentCtx(
                __VLS_37,
                __VLS_39,
              )!
              let __VLS_41!: __VLS_NormalizeEmits<typeof __VLS_40.emit>
            }
            // @ts-ignore
            ;[
              scene,
              categoryStore,
              scene,
              categoryStore,
              scene,
              categoryStore,
              handler,
              categoryStore,
            ]
          }
          __VLS_34.slots!.default
        }
        __VLS_29.slots!.default
      }
      {
        let __VLS_42!: 'ElFormItem' extends keyof typeof __VLS_ctx
          ? typeof __VLS_ctx.ElFormItem
          : 'elFormItem' extends keyof typeof __VLS_ctx
          ? typeof __VLS_ctx.elFormItem
          : 'el-form-item' extends keyof typeof __VLS_ctx
          ? (typeof __VLS_ctx)['el-form-item']
          : (typeof __VLS_resolvedLocalAndGlobalComponents)['ElFormItem']
        const __VLS_43 = __VLS_asFunctionalComponent(
          __VLS_42,
          new __VLS_42({ ...{}, label: '三级分类' }),
        )
        ;(({}) as { ElFormItem: typeof __VLS_42 }).ElFormItem
        ;(({}) as { ElFormItem: typeof __VLS_42 }).ElFormItem
        const __VLS_44 = __VLS_43(
          { ...{}, label: '三级分类' },
          ...__VLS_functionalComponentArgsRest(__VLS_43),
        )
        ;(
          ({}) as (
            props: __VLS_FunctionalComponentProps<
              typeof __VLS_42,
              typeof __VLS_44
            > &
              Record<string, unknown>,
          ) => void
        )({ ...{}, label: '三级分类' })
        const __VLS_45 = __VLS_pickFunctionalComponentCtx(__VLS_42, __VLS_44)!
        let __VLS_46!: __VLS_NormalizeEmits<typeof __VLS_45.emit>
        {
          let __VLS_47!: 'ElSelect' extends keyof typeof __VLS_ctx
            ? typeof __VLS_ctx.ElSelect
            : 'elSelect' extends keyof typeof __VLS_ctx
            ? typeof __VLS_ctx.elSelect
            : 'el-select' extends keyof typeof __VLS_ctx
            ? (typeof __VLS_ctx)['el-select']
            : (typeof __VLS_resolvedLocalAndGlobalComponents)['ElSelect']
          const __VLS_48 = __VLS_asFunctionalComponent(
            __VLS_47,
            new __VLS_47({
              ...{},
              disabled: __VLS_ctx.scene === 0 ? false : true,
              modelValue: __VLS_ctx.categoryStore.c3Id,
            }),
          )
          ;(({}) as { ElSelect: typeof __VLS_47 }).ElSelect
          ;(({}) as { ElSelect: typeof __VLS_47 }).ElSelect
          const __VLS_49 = __VLS_48(
            {
              ...{},
              disabled: __VLS_ctx.scene === 0 ? false : true,
              modelValue: __VLS_ctx.categoryStore.c3Id,
            },
            ...__VLS_functionalComponentArgsRest(__VLS_48),
          )
          ;(
            ({}) as (
              props: __VLS_FunctionalComponentProps<
                typeof __VLS_47,
                typeof __VLS_49
              > &
                Record<string, unknown>,
            ) => void
          )({
            ...{},
            disabled: __VLS_ctx.scene === 0 ? false : true,
            modelValue: __VLS_ctx.categoryStore.c3Id,
          })
          const __VLS_50 = __VLS_pickFunctionalComponentCtx(__VLS_47, __VLS_49)!
          let __VLS_51!: __VLS_NormalizeEmits<typeof __VLS_50.emit>
          for (const [c3, index] of __VLS_getVForSourceType(
            __VLS_ctx.categoryStore.c3Arr!,
          )) {
            {
              let __VLS_52!: 'ElOption' extends keyof typeof __VLS_ctx
                ? typeof __VLS_ctx.ElOption
                : 'elOption' extends keyof typeof __VLS_ctx
                ? typeof __VLS_ctx.elOption
                : 'el-option' extends keyof typeof __VLS_ctx
                ? (typeof __VLS_ctx)['el-option']
                : (typeof __VLS_resolvedLocalAndGlobalComponents)['ElOption']
              const __VLS_53 = __VLS_asFunctionalComponent(
                __VLS_52,
                new __VLS_52({
                  ...{},
                  key: c3.id,
                  label: c3.name,
                  value: c3.id,
                }),
              )
              ;(({}) as { ElOption: typeof __VLS_52 }).ElOption
              ;(({}) as { ElOption: typeof __VLS_52 }).ElOption
              const __VLS_54 = __VLS_53(
                { ...{}, key: c3.id, label: c3.name, value: c3.id },
                ...__VLS_functionalComponentArgsRest(__VLS_53),
              )
              ;(
                ({}) as (
                  props: __VLS_FunctionalComponentProps<
                    typeof __VLS_52,
                    typeof __VLS_54
                  > &
                    Record<string, unknown>,
                ) => void
              )({ ...{}, key: c3.id, label: c3.name, value: c3.id })
              const __VLS_55 = __VLS_pickFunctionalComponentCtx(
                __VLS_52,
                __VLS_54,
              )!
              let __VLS_56!: __VLS_NormalizeEmits<typeof __VLS_55.emit>
            }
            // @ts-ignore
            ;[
              scene,
              categoryStore,
              scene,
              categoryStore,
              scene,
              categoryStore,
              categoryStore,
            ]
          }
          __VLS_50.slots!.default
        }
        __VLS_45.slots!.default
      }
      __VLS_8.slots!.default
    }
    __VLS_3.slots!.default
  }
  if (
    typeof __VLS_styleScopedClasses === 'object' &&
    !Array.isArray(__VLS_styleScopedClasses)
  ) {
  }
  var __VLS_slots!: {}
  return __VLS_slots
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
  props: {
    ...['scene'],
  },
  setup() {
    return {
      categoryStore: categoryStore as typeof categoryStore,
      handler: handler as typeof handler,
    }
  },
})
export default (await import('vue')).defineComponent({
  props: {
    ...['scene'],
  },
  setup() {
    return {}
  },
})
