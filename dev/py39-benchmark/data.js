window.BENCHMARK_DATA = {
  "lastUpdate": 1628355986030,
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
      }
    ]
  }
}