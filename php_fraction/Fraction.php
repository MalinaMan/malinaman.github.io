<?php

	class Fraction
	{
		private $numerator;
		private $denominator;

		public function __construct($numerator, $denominator)
		{
			if (!$denominator) {
				throw new InvalidArgumentException("Denominator must be not 0", 1);
			}
			$this->numerator = $numerator;
			$this->denominator = $denominator;
		}

		public function __toString()
		{
			return "{$this->numerator} / {$this->denominator}";  // = {$this->getDecimal()}
		}

		public function getDecimal()
		{
			return round($this->numerator / $this->denominator, 5);
		}

		private function NOD($number1, $number2) {
			// return gmp_gcd($number1, $number2);
			if ($number1 == 0) {
				return $number2;
			}
			while ($number1 != $number2) {
				if ($number1 > $number2) {
					$number1 -= $number2;
				} else {
					$number2 -= $number1;
				}
			}
			return $number1;
		}

		public function NOK($number1, $number2)
		{
			return abs($number1 * $number2) / self::NOD($number1, $number2);
		}

		public function reduce() {
			$gcd = self::NOD(abs($this->numerator), abs($this->denominator));
			$this->numerator /= $gcd;
			$this->denominator /= $gcd;
			return $this;
		}

		private function reductionToCommonDenominator($lcm) {
			$coefficient = $lcm / $this->denominator;
			$this->denominator *= $coefficient;
			$this->numerator   *= $coefficient;
		}
		
		public static function add(Fraction $a, Fraction $b)
		{
			$lcm = self::NOK($a->reduce()->denominator, $b->reduce()->denominator);

			$a->reductionToCommonDenominator($lcm);
			$b->reductionToCommonDenominator($lcm);

			return (new Fraction($a->numerator + $b->numerator, $a->denominator))->reduce();
		}

		public static function multiply(Fraction $a, Fraction $b)
		{
			$fractionRes = new Fraction($a->numerator * $b->numerator, $a->denominator * $b->denominator);
			return $fractionRes->reduce();
		}
	}