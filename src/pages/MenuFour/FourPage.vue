<template>
	<el-card>
		<el-row align="middle">
			<el-col :span="4">
				<el-button @click="handleGetSystemPrinterCounter">获取系统内打印机数量</el-button>
			</el-col>
			<el-col :span="20">
				<el-descriptions>
					<el-descriptions-item label="系统内打印机数量：">{{ systemPrinterCounters }}个</el-descriptions-item>
				</el-descriptions>
			</el-col>
		</el-row>
		<el-row style="margin-top:20px" align="middle">
			<el-col :span="4">
				<el-button @click="handleGetDriverName">获取系统内打印机驱动名称</el-button>
			</el-col>
			<el-col :span="20">
				<el-descriptions>
					<el-descriptions-item v-for="(driver, index) of printerDriverNames" :key="index"
						:label="`第${index + 1}个打印机驱动名称为：`">
						<el-button>
							{{ driver }}
						</el-button>
					</el-descriptions-item>
				</el-descriptions>
			</el-col>
		</el-row>

		<el-row style="margin-top:20px" align="middle">
			<el-col :span="8">
				<el-select v-model="selectOrder" placeholder="请选择打印设备进行打印" style="width: 400px" clearable>
					<el-option v-for="(driver, index) in printerDriverNames" :key="index" :label="driver"
						:value="index" />
				</el-select>
			</el-col>
			<el-col :span="14">
				<el-button type="primary" @click="handlePrint">打印测试页</el-button>
			</el-col>
		</el-row>
	</el-card>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { Ref } from 'vue'
import getlodop from '@/assets/LodopFuncs'
import { ElMessage } from 'element-plus';

const systemPrinterCounters: Ref<number> = ref(0)
const printerDriverNames: Ref<Array<string>> = ref([])
const selectOrder: Ref<number | undefined> = ref(undefined)

onMounted(() => {
	handleGetSystemPrinterCounter()
	handleGetDriverName()
})

const handleGetSystemPrinterCounter = () => {
	const lodop = getlodop()
	systemPrinterCounters.value = lodop.GET_PRINTER_COUNT()
}

const handleGetDriverName = () => {
	if (!systemPrinterCounters.value) {
		ElMessage({
			type: 'warning',
			duration: 5000,
			message: '请先获取系统内打印机数量'
		})
		return
	}
	const lodop = getlodop()
	for (let i = 0; i < systemPrinterCounters.value; i++) {
		printerDriverNames.value.push(lodop.GET_PRINTER_NAME(i))
	}
}

const handlePrint = () => {
	if (!selectOrder.value) {
		ElMessage({
			type: 'warning',
			duration: 5000,
			message: '请先选择打印设备'
		})
		return
	}
	const lodop = getlodop()
	if (lodop.SET_PRINTER_INDEX(selectOrder.value)) lodop.PRINT();
}

const CreatePrintPage = () => {
        const LODOP = getLodop();
        LODOP.PRINT_INIT("打印控件功能演示_Lodop功能_测试页一");
        LODOP.ADD_PRINT_RECT(77, 74, 409, 345, 0, 2);
        LODOP.ADD_PRINT_ELLIPSE(351, 140, 140, 60, 0, 1);
        LODOP.ADD_PRINT_RECT(299, 133, 344, 42, 1, 1);
        LODOP.ADD_PRINT_TEXT(91, 242, 70, 21, "测试页标题");
        LODOP.ADD_PRINT_TEXT(201, 94, 20, 94, "测试页内容");
        LODOP.ADD_PRINT_TEXT(
          129,
          131,
          345,
          31,
          "测试内容一:9号宋体字是默认字体"
        );
        LODOP.ADD_PRINT_TEXT(
          161,
          131,
          345,
          31,
          "测试内容二:11号普通宋体字正体"
        );
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 11);
        LODOP.ADD_PRINT_TEXT(
          193,
          131,
          345,
          31,
          "测试内容三:13.5 号宋体字的粗体"
        );
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 13.5);
        LODOP.SET_PRINT_STYLEA(0, "Bold", 1);
        LODOP.ADD_PRINT_TEXT(225, 131, 345, 31, "测试内容四:15号宋体字的斜体");
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 15);
        LODOP.SET_PRINT_STYLEA(0, "Italic", 1);
        LODOP.ADD_PRINT_TEXT(
          260,
          131,
          345,
          31,
          "测试内容五:16号斜体字带下划线"
        );
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 16);
        LODOP.SET_PRINT_STYLEA(0, "Italic", 1);
        LODOP.SET_PRINT_STYLEA(0, "Underline", 1);
        LODOP.ADD_PRINT_TEXT(308, 144, 318, 29, "测试内容六:黑体字居中");
        LODOP.SET_PRINT_STYLEA(0, "FontName", "黑体");
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 13);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
        LODOP.ADD_PRINT_TEXT(
          350,
          300,
          170,
          66,
          "测试内容七:单行文字右靠齐超出区域宽度时则折行显示"
        );
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 11);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 3);
        LODOP.ADD_PRINT_TEXT(
          428,
          79,
          400,
          23,
          "以上演示了位置、区域、字体、图形、线型等打印布局和风格。"
        );
        LODOP.ADD_PRINT_LINE(119, 76, 118, 481, 0, 1);
        LODOP.ADD_PRINT_LINE(78, 127, 420, 128, 0, 1);
        LODOP.ADD_PRINT_LINE(79, 76, 118, 127, 0, 1);
      }
</script>

<style scoped></style>
