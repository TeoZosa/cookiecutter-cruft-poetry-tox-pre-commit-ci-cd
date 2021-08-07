window.BENCHMARK_DATA = {
  "lastUpdate": 1628358881280,
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
          "id": "871c8bf4ec9fe5e5951f1ee01183fac71bba78ce",
          "message": ":memo: Add emojis to all documentation sections",
          "timestamp": "2021-08-07T17:48:52Z",
          "tree_id": "b4d9dc16d499f6e1a35ec2a047605be8102c397e"
        },
        "date": 1628358879541,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15104.390912610499,
            "unit": "iter/sec",
            "range": "stddev: 0.000023592848394023393",
            "extra": "mean: 66.2059136171529 usec\nrounds: 9921"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4223827.179277817,
            "unit": "iter/sec",
            "range": "stddev: 2.310774076002643e-7",
            "extra": "mean: 236.75211071728674 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12172.332575837178,
            "unit": "iter/sec",
            "range": "stddev: 0.000022691826398305683",
            "extra": "mean: 82.15352265226971 usec\nrounds: 9050"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 127435.29107781079,
            "unit": "iter/sec",
            "range": "stddev: 0.000012801614386896989",
            "extra": "mean: 7.847119832679705 usec\nrounds: 45455"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14615.876172178812,
            "unit": "iter/sec",
            "range": "stddev: 0.00009209241184535876",
            "extra": "mean: 68.41875151511553 usec\nrounds: 8085"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4321575.688387731,
            "unit": "iter/sec",
            "range": "stddev: 2.1901397491816893e-7",
            "extra": "mean: 231.39708108943634 nsec\nrounds: 196079"
          }
        ]
      }
    ]
  }
}