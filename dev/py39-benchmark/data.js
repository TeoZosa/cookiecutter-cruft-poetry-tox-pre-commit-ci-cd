window.BENCHMARK_DATA = {
  "lastUpdate": 1628355987387,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa"
          },
          "committer": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa"
          },
          "id": "2d0fc19c32a0c943313084aada4fe8ce04b924f2",
          "message": "Merge pull request #273 from TeoZosa/migrate-packaging-from-pure-python-to-mypyc-compiled-platform-specific-packages\n\n📦⚡️Compile Package Modules as C-Extensions via Mypyc",
          "timestamp": "2021-08-07T16:56:37Z",
          "tree_id": "babd3d743380d8b6715ee6a3dac9a44284b73536"
        },
        "date": 1628355984277,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15063.440713404216,
            "unit": "iter/sec",
            "range": "stddev: 0.00007231216719590275",
            "extra": "mean: 66.38589542893405 usec\nrounds: 12690"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4307902.49014876,
            "unit": "iter/sec",
            "range": "stddev: 3.884687858979565e-8",
            "extra": "mean: 232.13153089898046 nsec\nrounds: 196040"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12905.101677618492,
            "unit": "iter/sec",
            "range": "stddev: 0.000071689117464247",
            "extra": "mean: 77.48873468655538 usec\nrounds: 5322"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 129747.54175533389,
            "unit": "iter/sec",
            "range": "stddev: 0.000010025609497151193",
            "extra": "mean: 7.707275116515956 usec\nrounds: 44443"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14965.628832716588,
            "unit": "iter/sec",
            "range": "stddev: 0.00005173663161884999",
            "extra": "mean: 66.81977825174208 usec\nrounds: 13123"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4056465.113326165,
            "unit": "iter/sec",
            "range": "stddev: 4.010417436655309e-7",
            "extra": "mean: 246.5200542992931 nsec\nrounds: 199961"
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
          "id": "3d14fa086f8a4fd8090b1b9de46792e9a237ea86",
          "message": ":bookmark: Bump version number to `0.4.0`",
          "timestamp": "2021-08-07T17:01:36Z",
          "tree_id": "a8df16c7f4f4ea31e62698b97a7b700d908e07f6"
        },
        "date": 1628355984914,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15250.952170644576,
            "unit": "iter/sec",
            "range": "stddev: 0.000011302352983826574",
            "extra": "mean: 65.5696764904178 usec\nrounds: 13369"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 5626377.634265721,
            "unit": "iter/sec",
            "range": "stddev: 3.106234059639083e-8",
            "extra": "mean: 177.7342483927767 nsec\nrounds: 60976"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12646.488192939567,
            "unit": "iter/sec",
            "range": "stddev: 0.000016010523664330893",
            "extra": "mean: 79.07333520133218 usec\nrounds: 8389"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 175245.62717035765,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012039253133956915",
            "extra": "mean: 5.706276476889732 usec\nrounds: 44246"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14952.993885049938,
            "unit": "iter/sec",
            "range": "stddev: 0.000012634012230598897",
            "extra": "mean: 66.8762394800284 usec\nrounds: 14164"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 5143706.372099093,
            "unit": "iter/sec",
            "range": "stddev: 5.1620831235575154e-8",
            "extra": "mean: 194.4123415408956 nsec\nrounds: 199961"
          }
        ]
      }
    ]
  }
}