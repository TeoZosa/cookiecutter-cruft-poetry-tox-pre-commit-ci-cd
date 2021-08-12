window.BENCHMARK_DATA = {
  "lastUpdate": 1628809891589,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa"
          },
          "committer": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa"
          },
          "id": "9dc1d756c3a96b8d6757474947c4cb91ac14603f",
          "message": ":wrench: Extract `NUM_PROCS` global variable\n\nSigned-off-by: Teo Zosa <teofilo@sonosim.com>",
          "timestamp": "2021-08-12T22:57:39Z",
          "tree_id": "44a1888d4f2a5588b7ed00727cad6fe00c11ea60"
        },
        "date": 1628809761814,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 16472.706095610145,
            "unit": "iter/sec",
            "range": "stddev: 0.000008086570790728918",
            "extra": "mean: 60.70647980944022 usec\nrounds: 4408"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 5020986.907633979,
            "unit": "iter/sec",
            "range": "stddev: 1.3608165983786575e-8",
            "extra": "mean: 199.16403256881023 nsec\nrounds: 68961"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 14396.244122888489,
            "unit": "iter/sec",
            "range": "stddev: 0.00000968071879325596",
            "extra": "mean: 69.46256200324548 usec\nrounds: 9443"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 149872.3280188891,
            "unit": "iter/sec",
            "range": "stddev: 3.5099954301162345e-7",
            "extra": "mean: 6.672345810722079 usec\nrounds: 48781"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 16485.79094751005,
            "unit": "iter/sec",
            "range": "stddev: 0.000002366863137665975",
            "extra": "mean: 60.658296783208705 usec\nrounds: 8299"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 5052444.542483419,
            "unit": "iter/sec",
            "range": "stddev: 1.6425075468939976e-8",
            "extra": "mean: 197.92399334450573 nsec\nrounds: 192271"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa"
          },
          "committer": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa"
          },
          "id": "07ac9404dcbde638abd2eb2bdb33a27e4b6b2ec3",
          "message": ":cookie: :wrench: Move Mypy configurations to `pyproject.toml`\n\nAll tooling configurations are now fully centralized in\n`pyproject.toml`.\n\nSigned-off-by: Teo Zosa <teofilo@sonosim.com>",
          "timestamp": "2021-08-12T23:05:22Z",
          "tree_id": "e3ff0d429d87e08ec760783d8e57e7f8ef7365b6"
        },
        "date": 1628809889568,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15441.56385013884,
            "unit": "iter/sec",
            "range": "stddev: 0.000041885214734257234",
            "extra": "mean: 64.76028009242138 usec\nrounds: 12121"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4332230.639954241,
            "unit": "iter/sec",
            "range": "stddev: 3.7551643185435813e-7",
            "extra": "mean: 230.82796903229354 nsec\nrounds: 11779"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12873.609018661979,
            "unit": "iter/sec",
            "range": "stddev: 0.000033102508568910986",
            "extra": "mean: 77.67829507252932 usec\nrounds: 5297"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 131205.18160979674,
            "unit": "iter/sec",
            "range": "stddev: 0.000021540547602086157",
            "extra": "mean: 7.621650210233256 usec\nrounds: 45453"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14749.624331489946,
            "unit": "iter/sec",
            "range": "stddev: 0.00008926133867551977",
            "extra": "mean: 67.79833692882836 usec\nrounds: 14184"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4099833.960020838,
            "unit": "iter/sec",
            "range": "stddev: 8.195637206134714e-7",
            "extra": "mean: 243.91231687691263 nsec\nrounds: 192308"
          }
        ]
      }
    ]
  }
}